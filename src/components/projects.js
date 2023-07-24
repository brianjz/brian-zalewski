import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const StyledProjectsSection = styled.section`
`;

const StyledProjectsList = styled.ul`
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const StyledProject = styled.li`
    position: relative;
    padding: 10px;

    .prtitle {
        margin-top: 10px;
        font-size: 1.5em;
    }

    .prdesc {
        padding: 5px 25px;
    }

    .prtechnologies {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        list-style: none;
        color: var(--lightest-slate);
        font-size: 0.8em;
        li {
            padding: 10px;
        }
    }

    .primg {
        ${({ theme }) => theme.mixins.boxGlow};
        z-index: 1;
        &:hover {
            ${({ theme }) => theme.mixins.boxShadow};
        }
        a {
            width: 100%;
            height: 100%;
            /* background-color: var(--blue); */
            border-radius: var(--border-radius);
            vertical-align: middle;
            &:hover,
            &:focus {
                background: transparent;
                outline: 0;
                &:before,
                .img {
                    background: transparent;
                    filter: none;
                }
            }
            &:before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 3;
                transition: var(--transition);
                background-color: var(--dark-blue);
                mix-blend-mode: screen;
                @media (max-width: 768px) {
                    background-color: transparent;
                }
            }
        }

        .img {
            border-radius: var(--border-radius);
            /* mix-blend-mode: multiply; */
            filter: grayscale(100%) contrast(1) brightness(90%);
            @media (max-width: 768px) {
                object-fit: cover;
                width: auto;
                height: 100%;
                filter: grayscale(0%) contrast(1) brightness(100%);
            }
        }
    } 
`;

const Projects = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            allMongodbBrianzalewskiProjects(sort: {order: ASC}) {
                nodes {
                    url
                    title
                    technologies {
                        fullname
                        name
                        url
                    }
                    description
                    order
                    featured
                    mongodb_id
                }
            },
            allFile {
                edges {
                  node {
                    publicURL
                    name
                    childImageSharp {
                      gatsbyImageData(
                          placeholder: BLURRED
                          height: 400
                          width: 600
                        )
                    }
                  }
                }
              },
        }
    `)

    const projects = data.allMongodbBrianzalewskiProjects.nodes

    return (
        <StyledProjectsSection id="projects">
            <h2 className="section-heading">Featured Projects</h2>
            <StyledProjectsList>
                {projects.map((prj) => {
                        const imageName = prj.title.replaceAll(' ', '-');
                        let imageIndex = -1
                        data.allFile.edges.forEach((image, index) => {
                            if(image.node.name === imageName) {
                                imageIndex = index
                            }
                        })
                        return (
                        <StyledProject key={prj.mongodb_id}>
                                <div className="primg">
                                    {imageIndex >= 0 && 
                                        <a href={prj.url}>
                                            <GatsbyImage className="img" alt={prj.title} image={getImage(data.allFile.edges[imageIndex].node)} />
                                        </a>
                                    }
                                </div>
                                <h3 className="prtitle"><a className="inline-link" href={prj.url} rel="nofollow">{prj.title}</a></h3>
                                <p className="prdesc">{prj.description}</p>
                                <ul className="prtechnologies">
                                {prj.technologies.map((tech, index) => (
                                    <li key={index}>
                                        <a href={tech.url} rel="nofollow noopener" title={tech.fullname && tech.fullname}>{tech.name}</a>
                                    </li>
                                ))}
                                </ul>
                            </StyledProject>
                        )
                })}
            </StyledProjectsList>
        </StyledProjectsSection>
    )
}

export default Projects