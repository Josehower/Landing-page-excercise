import React from 'react';
import styled from 'styled-components';
import { colors, marginStyles } from './GlobalStyles';
import { downArrow } from './OtherModules/DownArrow';
import Timer from './components/Timer';
import FeaturesSection from './components/FeaturesSection';
import Accordion from './components/Accordion';
import Section1 from './components/Section1';
import logo from './images/logo.png';
import logoBig from './images/logobig.png';
import mousless from './images/mousless-cloud.svg';
import keyboard from './images/sec3Keyboard.png';
import videoSec2 from './videos/video-sec2.mp4';
import transitionYellow from './images/transition-yellow.svg';
import blobBubble from './images/blob.svg';
import brain from './images/brain.e35e32e7.svg';
import stars from './images/stars.svg';
import thomaschretien from './images/thomaschretien.jpg';
import macButton from './images/macButton.png';
import setappButton from './images/setappButton.png';
import redBanner from './images/redBanner.png';
import airtable from './images/imagesGrid/airtable.svg';
import adobex from './images/imagesGrid/adobex.svg';
import bear from './images/imagesGrid/bear.svg';
import chrome from './images/imagesGrid/chrome.svg';
import evernote from './images/imagesGrid/evernote.svg';
import finder from './images/imagesGrid/finder.svg';
import firefox from './images/imagesGrid/firefox.svg';
import gmail from './images/imagesGrid/gmail.svg';
import googledocs from './images/imagesGrid/googledocs.svg';
import iawriter from './images/imagesGrid/iawriter.svg';
import macos from './images/imagesGrid/macos.svg';
import transmit from './images/imagesGrid/transmit.svg';
import sec3Video from './videos/sec3Video.mp4';
import videoSection5 from './videos/videoSection5.mp4';

const Header = styled.header`
  background-color: ${colors.yellow};
  height: 116px;
`;

const MarginsWrapper = styled.div`
  ${marginStyles}
`;
const ElementsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 48px;
  align-items: center;

  > a {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 48px;
  }
  .text {
    width: 108px;
    margin-left: 8px;
  }
`;

const Nav = styled.nav`
  font-weight: 510;
  display: flex;
  gap: 5px;
  & a {
    text-decoration: none;
    color: black;
    margin: 0 3px 0 7px;
    font-size: 18.4px;
    line-height: 24px;
    padding: 0.4rem 0.6rem;
    border-radius: 9px;
    transition: all 0.2s;
    &:hover {
      background-color: rgba(18, 18, 18, 0.05);
    }
  }
`;

const Section2 = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  min-height: 608px;
  background: url(${transitionYellow}) no-repeat;
  background-size: contain;
  video {
    width: 600px;
    border-radius: 9px;
  }
`;

const Section3 = styled.section`
  ${marginStyles}
  width: 1056px;
  min-height: 608px;

  img,
  video {
    width: 336px;
    border-radius: 19px;
  }

  > div {
    width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 128px;

    h3 {
      margin-bottom: 16px;
      color: ${colors.white};
    }

    p {
      width: 492px;
      font-size: 21.6px;
      margin-bottom: 16px;
      color: ${colors.whiteLight};
      font-weight: 300;
    }
  }
  .imagesGrid {
    width: 336px;
    height: 238px;
    border-radius: 19px;

    color: black;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    padding: 0;
    gap: 5px;

    div {
      width: 72px;
      height: 72px;
      background: rgba(242, 242, 242, 0.1);
      border-radius: 20%;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 43.33px;
      height: 43.33px;
    }
  }
`;

const BigQuote = styled.section`
  ${marginStyles}
  min-height: 608px;
  text-align: left;
  background: url(${blobBubble}) no-repeat right;
  font-size: 44.8px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding: 64px 0 0;
  margin-bottom: 128px;
  width: 960px;
  p {
    width: 640px;
    margin: 16px 0;
  }
  span {
    color: ${colors.yellow};
  }
  img {
    height: 44.88px;
  }
`;

const SocialProof = styled.section`
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    img {
      width: 96px;
    }
    margin-bottom: 16px;
  }

  & > p {
    color: rgba(242, 242, 242, 0.5);
    font-size: 21.6px;
    font-weight: 200px;
    text-align: center;
  }
`;

const Carrousell = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  height: 292px;
  margin: 100px auto;
  background-color: red;
  border-radius: 20px;
  background-color: rgba(242, 242, 242, 0.06);
  img {
    width: 112px;
    margin-top: -52px;
    border-radius: 50%;
  }
  p {
    width: 384px;
    height: 110px;
    margin-top: 38px;
    font-size: 16px;
    color: ${colors.whiteLight};
  }
  & > span {
    text-align: center;
    margin-top: 18px;
    font-weight: 300;
  }
`;

const YellowBanner = styled.div`
  background: ${colors.yellow};
  color: ${colors.grey};
  font-size: 14.4px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  width: 960px;
  margin: 0 auto;
  padding: 80px;
  border-radius: 24px;
  h2 {
    color: #000;
    margin-bottom: 16px;
  }
  h2 + p {
    font-size: 21.6px;
    font-weight: 300;
  }
  img {
    width: 280px;
    margin-right: -50px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  div div {
    margin-left: 0;
  }
`;

const Faq = styled.section`
  ${marginStyles}
  display: grid;
  padding: 140px 48px;
  grid-template-columns: 1fr 1fr;
  gap: 1em;

  h2 {
    grid-column: span 2;
  }
`;

const Download = styled.section`
  ${marginStyles}
  padding: 0 48px;

  div {
    display: flex;
    align-items: start;
    gap: 15px;
  }
  img {
    width: 127.77px;
  }
`;

const RedBanner = styled.a`
  background-color: rgb(255, 98, 77);
  width: 960px;
  height: 200px;
  display: block;
  margin: 128px auto 0;
  display: flex;
  border-radius: 20px;
  text-decoration: none;
  color: #000;
  overflow: hidden;

  div {
    padding: 40px 32px;
    font-size: 24px;
    h2 {
      font-size: 32px;
      margin-bottom: 9.6px;
    }
  }

  img {
    width: 384px;
    border-radius: 0 20px 20px 0;
    transition: all 0.6s;
  }

  &:hover {
    img {
      transform: scale(1.07);
    }
  }
`;

const LinkParty = styled.section`
  ${marginStyles}
  padding: 32px 48px;
  font-size: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 23px 40px;

  a {
    text-decoration: none;
    color: rgba(242, 242, 242, 0.5);
  }
`;

const HorizonlatLine = styled.div`
  ${marginStyles}
  width: 960px;
  height: 2px;
  background: rgba(242, 242, 242, 0.1);
`;

const Footer = styled.footer`
  ${marginStyles}
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 32px 48px 128px;
  gap: 23px 40px;
  color: rgba(242, 242, 242, 0.5);
  div {
    .linkGrid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      gap: 8px 40px;
      a {
        color: rgba(242, 242, 242, 0.5);
        text-decoration: none;
      }
    }
    p {
      margin: 20px 0;
    }
  }

  .formContainer {
    h3 {
      color: ${colors.white};
    }
  }

  form {
    background: rgba(242, 242, 242, 0.1);
    border-radius: 9px;
    height: 45.5px;
    display: flex;
    padding: 4px;

    input::placeholder {
      color: rgba(242, 242, 242, 0.3);
      font-weight: 500;
      font-size: 16px;
    }

    input {
      flex-grow: 1;
      background-color: rgba(0, 0, 0, 0);
      border: none;
      color: ${colors.white};
    }

    input:focus {
      outline: none;
    }

    button {
      width: 96px;
      height: 33px;
      font-size: 14.4px;
      font-weight: 600;
      border-radius: 6px;
      padding: 6px 12px;
      border: none;
      cursor: pointer;
    }
    border: solid transparent 2px;
    transition: 0.4s;
  }

  form:focus-within {
    border: solid rgba(242, 242, 242, 0.2) 2px;
  }
`;

const Content = () => {
  return (
    <>
      <Header>
        <MarginsWrapper>
          <ElementsWrapper>
            <a href="#a">
              <img className="logo" src={logo} alt="Mousless Logo" />
              <img className="text" src={mousless} alt="" />
            </a>

            <Nav>
              <a href="#a">Features</a>
              <a href="#a">Download</a>
              <a href="#a">Buy</a>
            </Nav>
          </ElementsWrapper>
        </MarginsWrapper>
      </Header>
      <Section1 />
      <Section2>
        <video autoPlay muted loop src={videoSec2}></video>
      </Section2>
      <Section3>
        <div>
          <img src={keyboard} alt="" />
          <p>
            <h3>Interactive Training</h3>A session takes less than 5 minutes and
            covers about 10 shortcuts. Apply your new skills right away to
            reinforce your learning experience.
          </p>
        </div>
        <div>
          <p>
            <h3>Boost your productivity</h3>
            Stop chasing your mouse and save up to 8 days a year. Surely, you’ll
            find something better to do with your time.
          </p>
          <video autoPlay muted loop src={sec3Video}></video>
        </div>
      </Section3>
      <BigQuote>
        <div>
          <p>
            <span>Mouseless</span> caters shortcuts for your favorite apps in
            bite-sized exercises to you.
          </p>
          <p>
            Interactive drills
            <span> train the muscle-memory </span>
            <img src={brain} alt="brain" /> required to have your fingers flying
            across the keyboard.
          </p>
        </div>
      </BigQuote>
      <Section3>
        <div>
          <video autoPlay muted loop src={videoSection5}></video>
          <p>
            <h3>Need to cheat?</h3>
            Look up a shortcut within your current app. Works with every app
            you’ve ever installed.
          </p>
        </div>
        <div>
          <p>
            <h3>All your favorites in one place</h3>
            Cover the basics with shortcuts for macOS or let your fingers fly in
            one of the 28 apps and tools you already love.
          </p>
          <div className="imagesGrid">
            <div>
              <img src={airtable} alt="" />
            </div>
            <div>
              <img src={adobex} alt="" />
            </div>
            <div>
              <img src={transmit} alt="" />
            </div>
            <div>
              <img src={bear} alt="" />
            </div>
            <div>
              <img src={chrome} alt="" />
            </div>
            <div>
              <img src={evernote} alt="" />
            </div>
            <div>
              <img src={finder} alt="" />
            </div>
            <div>
              <img src={firefox} alt="" />
            </div>
            <div>
              <img src={gmail} alt="" />
            </div>
            <div>
              <img src={googledocs} alt="" />
            </div>
            <div>
              <img src={iawriter} alt="" />
            </div>
            <div>
              <img src={macos} alt="" />
            </div>
          </div>
        </div>
      </Section3>
      <FeaturesSection />
      <SocialProof>
        <h2>
          Feedback
          <img src={stars} alt="icon stars" />
        </h2>
        <p>Take our word for it or see what others are saying:</p>
        <Carrousell>
          <img src={thomaschretien} alt="" />
          <p>
            I love everything about your product. The simple problem you’re
            solving so beautifully. The care, with which the assets (the app
            icon{' '}
            <span role="img" aria-label="love">
              🥰
            </span>
            ) as well as the animations and basically everything else is
            designed. Amazing work!!!!!!!!!!!!!!!!!!!!!!!!!!
          </p>
          <span> Ruben Alexander Dreymann</span>
        </Carrousell>
      </SocialProof>
      <YellowBanner>
        <div>
          <h2>Get it done faster</h2>
          <p>
            Master all of the magic keystrokes for your favorite apps & tools.
          </p>
          <Timer />
        </div>
        <img src={logoBig} alt="mousless icon" />
      </YellowBanner>
      <Faq>
        <h2>FAQ</h2>
        <Accordion>
          <div>
            <h3>Is there a list of supported apps?</h3>
            {downArrow}{' '}
          </div>

          <p>
            Mouseless comes with exercises for Xcode, Webflow, Code, Ulysses,
            Trello, Transmit, Todoist, Things, Superhuman, Sublime Text,
            Spotify, Slack, Sketch, Safari, Photoshop, Notion, macOS, iA Writer,
            Google Docs, Gmail, Firefox, Finder, Figma, Evernote, Google Chrome,
            Bear, Airtable, Adobe XD. <br /> However, the menu bar dropdown
            supports every app that is currently open.
          </p>
        </Accordion>
        <Accordion>
          <div>
            <h3>Do you offer a trial? </h3>
            {downArrow}{' '}
          </div>
          <p>
            We didn’t implement a trial yet, but no worries—feel free to
            purchase the app. If you’re not happy send a short message. We’ll
            refund your order.
            <br />
            By the way, we’re part of the SetApp catalogue and they offer a free
            trial for 7 days. They give you access to 170+ apps, including
            Mouseless.
          </p>
        </Accordion>
        <Accordion>
          <div>
            <h3>Can I ditch my mouse for good? </h3>
            {downArrow}{' '}
          </div>
          <p>
            Nooo! Mouseless is not about getting rid of your mouse—you’ll always
            need it! But you’ll spend less time with mouse clicking.
          </p>
        </Accordion>
        <Accordion>
          <div>
            <h3>The menubar app doesn’t work. What can I do? </h3>
            {downArrow}{' '}
          </div>
          <p>
            Mouseless requires the accessibility permission in “System
            Preferences › Security & Privacy › Privacy › Accessibility”.
            <br />
            For macOS 10.15 (Catalina) the screen recording permission in
            “System Preferences › Security & Privacy › Privacy › Screen
            Recording” is required too. Don’t worry—we don’t record your screen.
          </p>
        </Accordion>
        <Accordion>
          <div>
            <h3>How long does it take before I see results? </h3>
            {downArrow}{' '}
          </div>
          <p>
            The amount of keyboard shortcuts for each app or tool varies, so
            there cannot possibly be a general answer to that. Of course,
            individual learning behavior affects the result as well.
            <br />
            Try to establish a daily study routine, put your knowledge into
            practice, and you should see results rather quickly.
          </p>
        </Accordion>
        <Accordion>
          <div>
            <h3>Is there a Windows app? </h3>
            {downArrow}{' '}
          </div>
          <p>
            Nope, not for now. But give us a shout and we’ll consider it.
            <br />
            Something’s wrong. How do I get in touch? Drop us a line, we’ll be
            happy to help!
          </p>
        </Accordion>
        <Accordion>
          <div>
            <h3>My country’s keyboard layout is not supported. Now what?</h3>
            {downArrow}{' '}
          </div>
          <p>
            Send us more details, please. As of now, Mouseless does not support
            every single keyboard layout known to man, but hey: goals!
          </p>
        </Accordion>
        <Accordion>
          <div>
            <h3>Something’s wrong. How do I get in touch? </h3>
            {downArrow}{' '}
          </div>
          <p>Drop us a line, we’ll be happy to help!</p>
        </Accordion>
        <Accordion>
          <div>
            <h3>I can’t find my favorite app. Will you update Mouseless?</h3>{' '}
            {downArrow}{' '}
          </div>
          <p>
            Sure, we have set up a public feedback board to gather app requests.
            Submit all the apps you miss or any other ideas you might have.
          </p>
        </Accordion>
      </Faq>
      <Download>
        <h2>Download</h2>
        <div>
          <a href="#a">
            <img src={macButton} alt="" />
          </a>
          <a href="#a">
            <img src={setappButton} alt="" />
          </a>
        </div>
      </Download>
      <section>
        <RedBanner href="#a">
          <div>
            <h2>Have you seen Glyphfinder?</h2>
            <p>
              Glyphfinder is the missing character search for designers,
              developers and writers →
            </p>
          </div>
          <img src={redBanner} alt="glyphs" />
        </RedBanner>
        <LinkParty>
          <a href="#a"> Xcode Shortcuts</a>
          <a href="#a"> Webflow Shortcuts</a>
          <a href="#a"> Code Shortcuts </a>
          <a href="#a"> Ulysses Shortcuts </a>
          <a href="#a"> Trello Shortcuts </a>
          <a href="#a"> Transmit Shortcuts </a>
          <a href="#a"> Todoist Shortcuts </a>
          <a href="#a"> Things Shortcuts </a>
          <a href="#a"> Superhuman Shortcuts </a>
          <a href="#a"> Sublime Text Shortcuts </a>
          <a href="#a"> Spotify Shortcuts </a>
          <a href="#a"> Slack Shortcuts </a>
          <a href="#a"> Sketch Shortcuts </a>
          <a href="#a"> Safari Shortcuts </a>
          <a href="#a"> Photoshop Shortcuts </a>
          <a href="#a"> Notion Shortcuts </a>
          <a href="#a"> macOS Shortcuts </a>
          <a href="#a"> iA Writer Shortcuts </a>
          <a href="#a"> Google Docs Shortcuts </a>
          <a href="#a"> Gmail Shortcuts </a>
          <a href="#a"> Firefox Shortcuts </a>
          <a href="#a"> Finder Shortcuts </a>
          <a href="#a"> Figma Shortcuts </a>
          <a href="#a"> Evernote Shortcuts </a>
          <a href="#a"> Google Chrome Shortcuts </a>
          <a href="#a"> Bear Shortcuts </a>
          <a href="#a"> Airtable Shortcuts </a>
          <a href="#a"> Adobe XD Shortcuts</a>
        </LinkParty>
      </section>
      <HorizonlatLine />
      <Footer>
        <div>
          <div className="linkGrid">
            <a href="#a"> Feedback</a>
            <a href="#a"> Download</a>
            <a href="#a"> Buy</a>
            <a href="#a"> Support</a>
            <a href="#a"> Open Startup</a>
            <a href="#a"> Press Kit</a>
            <a href="#a"> Privacy Policy</a>
            <a href="#a"> Impressum</a>
          </div>
          <p>
            Made with{' '}
            <span role="img" aria-label="heart">
              💛
            </span>
            by überdosis · Icon designed by Julius Gehrig
          </p>
        </div>
        <div className="formContainer">
          <h3>Be the first to know</h3>
          <p>
            We’ll inform you about new apps and deals. <br /> No spam, we
            promise.
          </p>
          <form action="submit">
            <input placeholder="Your email address" type="text" name="" id="" />
            <button>Subscribe</button>
          </form>
        </div>
      </Footer>
    </>
  );
};

export default Content;
