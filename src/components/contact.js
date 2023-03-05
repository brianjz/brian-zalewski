import * as React from 'react';
import { email, socialMedia } from '@config';
import styled from 'styled-components'

const StyledContactSection = styled.section`
    font-size: 1.2em;
`;

const StyledLinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    list-style: none;

    li {
        padding: 10px 25px;
        svg {
            width: 75px;
            height: 75px;
        }
    }
`;

const Contact = () => {
    return (
        <StyledContactSection id="contact">
            <h2 className="section-heading">Contact Me</h2>
            <p>I'm currently open to opportunities that are available. Feel free to <a href={`mailto:${email}`}>email me</a> or visit
            me below.</p>
            <StyledLinks>
                {socialMedia.map((sm) => {
                    const smLink = `<a href="${sm.url}">${sm.svg}</a>`
                    return (
                        <li dangerouslySetInnerHTML={{__html: smLink}}></li>
                    )
                })}
            </StyledLinks>
        </StyledContactSection>
    )
}

export default Contact;