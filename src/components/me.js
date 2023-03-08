import * as React from 'react'
import styled from 'styled-components'

const StyledMeSection = styled.section`
    padding: 250px 0;
    font-size: 1.3em;

    @media (max-width: 768px) {
        padding: 50px 0;
        font-size: 1em;
    }
    @media (max-width: 1080px) {
        padding: 0;
        font-size: 1em;
    }
    
    .big-heading {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        @media (max-width: 1080px) {
            font-size: 1.5em;
            text-align: center;
        }
        &:after {
            content: "";
            display: block;
            position: relative;
            top: 5px;
            width: 150px;
            height: 2px;
            margin-left: 20px;
            background-color: var(--blue);
            @media (max-width: 768px) {
                width: 40px;
            }
        }
        &:before {
            content: "";
            display: block;
            position: relative;
            top: 5px;
            width: 150px;
            height: 2px;
            margin-right: 20px;
            background-color: var(--blue);
            @media (max-width: 768px) {
                width: 40px;
            }
        }
    }
    h2 {
        font-size: 1em;
    }
`;

const Me = () => {
    return (
        <StyledMeSection id="me">
            <div>
                <h1 className="big-heading">I am Brian Zalewski.</h1>
                <h2>I am a Software Engineer, Father, Genealogy Addict, Video &amp; Board Gamer, and Heavy Metal Fan</h2>
            </div>
            <div>
                <p>
                    My name is Brian Zalewski (<em>zuh-loo-ski</em> or if you're feeling particularly Polish today, <em>zaˈlɛfski</em>). I am a full-stack software engineer in the Milwaukee, Wisconsin area.
                </p>
                <p>
                    I am always striving to learn and use the the latest technologies to build with.
                </p>
            </div>
        </StyledMeSection>
    )
}

export default Me;