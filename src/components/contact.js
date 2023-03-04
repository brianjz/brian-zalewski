import * as React from 'react';
import { email, socialMedia } from '@config';
import styled from 'styled-components'

const StyledContactSection = styled.section`
    font-size: 1.2em;
`;

const Contact = () => {
    console.log(email)
    return (
        <StyledContactSection id="contact">
            <h2 className="section-heading">Contact Me</h2>
            <p>I'm currently open to opportunities that are available. Feel free to <a href={`mailto:${email}`}>email me</a> or visit
            my <a href={socialMedia[1].url}>LinkedIn profile</a>.</p>
        </StyledContactSection>
    )
}

export default Contact;