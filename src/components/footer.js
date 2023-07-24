import * as React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    text-align: center;
    height: auto;
    padding: 15px;
    min-height: 70px;
`;

const StyledName = styled.div`
    color: var(--blue);
    line-height: 1;
    font-size: var(--fz-xs);

    a {
        text-decoration: underline;
    }
`;

const StyledGHImage = styled.img`
    width: 150px;
    height: 25px;
    margin-top: 5px;
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledName>
                <div>Built by Brian Zalewski. Learned From and Inspired By <a href="https://github.com/bchiang7/v4">v4</a> by Brittany Chiang.</div>
                <StyledGHImage src="https://img.shields.io/github/last-commit/brianjz/brian-zalewski/master" alt="Last Commit" />
            </StyledName>
        </StyledFooter>
    )
}

export default Footer;