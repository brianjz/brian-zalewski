import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image';

const StyledAboutSection = styled.section`
    strong { 
        font-weight: bolder;
        /* color: var(--blue) */
    }
    a {
        color: #cfc;
    }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  float: right;
  margin: 0  0 20px 20px;
  @media (max-width: 768px) {
    float: none;
    width: 70%;
    margin: 0 auto;
  }
  .profile-photo {
    ${({ theme }) => theme.mixins.boxGlow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--light-slate);
    @media (max-width: 768px) {
      background-color: transparent;
    }
    z-index: 3;
    &:hover,
    &:focus {
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
      @media (max-width: 768px) {
        filter: grayscale(0%) contrast(1);
      }
  }
}
`;

const StyledTechList = styled.ul`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        position: relative;
        list-style: none;
        color: var(--lightest-slate);
        li {
            padding: 5px;
            @media (max-width: 768px) {
                font-size: var(--fz-sm)
            }
            &:before {
                content: "\u00BB";
                color: var(--blue);
                margin-right: 10px;
                font-size: var(--fz-lg);
                line-height: 12px;
                font-weight: bold;
            }
        }
`;

const About = () => {
    return (
		<StyledAboutSection id="about">
            <h2 className="section-heading">About Me</h2>
            <StyledPic>
                <div className="profile-photo">
                    <StaticImage
                    className="img"
                    src="../images/Brian-Zalewski.jpg"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Profile Photo"
                    />
                </div>
            </StyledPic>
			<p>
				Besides full-stack development, there are other things in my life that I really enjoy doing.
			</p>
			<p>
				<strong>The year 2010 marked a pivotal turning point in my life</strong> when the arrival of my daughter brought boundless joy and immeasurable changes. 
                In December 2012, my son joined our family. Parenthood has been an extraordinary mix of challenges and blessings, encompassing moments of both stress 
                and pure amazement. This incredible journey has shaped me in ways I never imagined, and I wholeheartedly embrace every step of it.
			</p>
      <p>
        In 1999, a convergence of events — a thought-provoking news article and the loss of my beloved grandfather — propelled me into the vast
        realm of <a href="https://www.zalewskifamily.net/">family history and genealogy</a>. <strong>It's an ongoing exploration</strong> that continues to teach me 
        valuable lessons about my roots and personal identity. I love to share this knowledge with my children, and my fascination with 
        genealogy fuels my ongoing quest for discovery and software engineering.
      </p>
      <p>
      <strong>Gaming has been an integral part of my life since my early years.</strong> I remember my first encounter with video games on my parents' Texas Instruments TI-99/4A, 
      where Space Invaders became my go-to entertainment. However, it was when my brother brought home the Nintendo Entertainment System that my early obsession truly took flight. 
      While my gaming time has dwindled since becoming a parent and taking on adult responsibilities, I still manage to carve out moments to get lost in this beloved hobby. 
      My interests and priorities have shifted over time, but gaming continues to provide me with a much-needed escape. Recently, my family and I decided to relaunch our 
      family gaming site, <a href="https://www.stayathomegamers.com">Stay-At-Home Gamers</a>, where we document our adventures in video and board gaming
      </p>
      <p>
        The pivotal moment when I laid my hands on my brother's <a href="https://www.youtube.com/watch?v=6xjJ2XIbGRk" title="YouTube">Metallica "Master of Puppets"</a> cassette 
        tape forever changed my musical journey (probably known to most now as that song from Stranger Things.) Since that day, I've remained a devoted fan of heavy metal and 
        hard rock music. While I also appreciate and enjoy a diverse range of genres, there's something about heavy metal that evokes a special kind of passion and
        connection, you know by how your favorite music affects your own soul.
      </p>
      <p>
      In addition to my passion for software engineering, I have a keen interest in varying concepts like big data, gamification, and the intriguing world of 
      logistics. On a lighter note, my interests also include cheering for American football teams like the Green Bay Packers and the Buffalo 
      Bills and, recently, English football teams like Liverpool, unraveling the tapestry of history, diving into documentaries, comedy movies, 
      and contemplating the wonders of the space.
      </p>
			<p>
				<strong>This site</strong> was built with React and Gatsby using much inspiration 
                from <a href="https://brittanychiang.com/">Brittany Chiang</a>.
			</p>
            <p>A few technologies that I've worked with recently are:</p>
            <StyledTechList>
                <li>C#</li>
                <li>APIs</li>
                <li>Node.js</li>
                <li>React</li>
                <li>Gatsby</li>
                <li>MongoDB</li>
                <li>Microsoft Azure</li>
                <li>Python</li>
            </StyledTechList>
		</StyledAboutSection>
    )
}

export default About;