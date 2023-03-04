import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  z-index: 12;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      position: relative;
      font-size: var(--fz-lg);
      a {
        padding: 10px;
      }
    }
    li.mobile-hide {
        @media (max-width: 768px) {
          display: none;
        }
    }
  }
`;

const StyledSiteName = styled.div`
  @media (max-width: 768px) {
    font-size: 1.2em;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    min-width: 135px;
    &:before {
        content: "";
        display: block;
        position: relative;
        top: 15px;
        width: 100%;
        height: 2px;
        /* margin-right: 20px; */
        background-color: var(--blue);
    }
    &:after {
        content: "";
        display: block;
        position: relative;
        top: 15px;
        width: 100%;
        height: 2px;
        /* margin-left: 20px; */
        background-color: var(--blue);
    }
  }
`;

const NavBar = () => {
    return (
        <StyledHeader>
            <StyledNav>
            <>
                {/* {Logo} */}
                <StyledSiteName>Brian Zalewski</StyledSiteName>
                <StyledLinks>
                <ol>
                    <li>
                        <Link to="#me">Home</Link>
                    </li>
                    <li className="mobile-hide">
                        <Link to="#about">About</Link>
                    </li>
                    <li>
                        <Link to="#jobs">Jobs</Link>
                    </li>
                    <li className="mobile-hide">
                        <Link to="#projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="#contact">Contact</Link>
                    </li>
                </ol>
                {/* <div>{ResumeLink}</div> */}
                </StyledLinks>
            </>
            </StyledNav>
        </StyledHeader>
    )
}

export default NavBar;