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
				<strong>In 2010, my life changed completely,</strong> for the better, when my daughter was born. My perspectives on a lot of things changed. 
                Then, in December 2012, my son was born. It's been a challenge, a blessing, stressful, amazing, and many other things, and <strong>I wouldn't change 
                a thing</strong>.
			</p>
			<p>
				In 1999, partially inspired by a news article and partially inspired by the death of my grandfather, I took a dive into the huge, deep 
                ocean known as <a href="https://www.zalewskifamily.net/">family history and genealogy.</a> <strong>I have yet to surface and I doubt I ever 
                will.</strong> It's been an exciting and humbling journey that has taught me a lot about who I am and where I came from. I hope to 
                pass on the knowledge and wisdom to my children. A lot of the sites I dabble with are genealogy-related as there is so much there to work with. 
			</p>
			<p>
				<strong>I've been video gaming since I was a wee lad.</strong> My parents had 
                a <a href="http://en.wikipedia.org/wiki/Texas_Instruments_TI-99/4A" title="Wikipedia">Texas Instruments TI-99/4A</a> that I remember playing Space 
                Invaders on. Once my brother bought the <strong>Nintendo Entertainment System</strong>, all bets were off. I get less time to play now that I have 
                two kids and am an adult that has to do boring adult things, but I still find time and I still really enjoy it, though my game interests have changed. 
                In the past few years, we started (well, sort of restarted) our family gaming site, <a href="https://www.stayathomegamers.com">Stay-At-Home Gamers,</a> that 
                is about video and board gaming with our family.
			</p>
			<p>
				I've also been a fan of most <strong>heavy metal and hard rock music</strong> since I <span className="strikethrough">stole</span> borrowed my 
                older brother's <a href="https://www.youtube.com/watch?v=6xjJ2XIbGRk" title="YouTube">Metallica "Master of Puppets"</a> cassette tape (probably know to most now
                as that song from Stranger Things). I do also enjoy <a href="http://www.last.fm/user/brianjz" title="Last.fm">a lot of other music</a> from a lot of other 
                genres, but heavy metal still does that thing to me that your favorite music does to you.
			</p>
			<p>
				I am also really interested in ideas like big data, gamification, and, for some reason, logistics. Some other things I like, in no particular order: 
                the Green Bay Packers, Buffalo Bills, history, documentaries, movies (mainly comedy), <a href="http://www.bbcamerica.com/doctor-who/">Doctor Who</a>, 
                and space.
			</p>
			<p>
				<strong>This site</strong> was built with much inspiration 
                from <a href="https://brittanychiang.com/">Brittany Chiang</a> and <a href="https://github.com/bchiang7/v4/">her personal site on GitHub.</a>
			</p>
            <p>A few technologies that I've worked with recently are:</p>
            <StyledTechList>
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