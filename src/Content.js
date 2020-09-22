import React from 'react';
import logo from './images/logo.png';
import logoBig from './images/logobig.png';
import mousless from './images/mousless-cloud.svg';
import keyboard from './images/sec3Keyboard.png';
import videoSec2 from './videos/video-sec2.mp4';
import sec3Video from './videos/sec3Video.mp4';
import videoSection5 from './videos/videoSection5.mp4';
import styled, { css } from 'styled-components';
import transitionYellow from './images/transition-yellow.svg';
import blobBubble from './images/blob.svg';
import brain from './images/brain.e35e32e7.svg';
import stars from './images/stars.svg';
import thomaschretien from './images/thomaschretien.jpg';
import macButton from './images/macButton.png';
import setappButton from './images/setappButton.png';
import redBanner from './images/redBanner.png';

const ScrollRight = styled.div`
  background: transparent;
  position: fixed;
  width: 12px;
  height: 100vh;
  min-height: 608px;
  right: 0;
  top: 0;
`;

const marginStyles = css`
  width: 1056px;
  margin: 0 auto;
`;

const Header = styled.header`
  background-color: #fdd231;
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

const Section1 = styled.section`
  background-color: #fdd231;
  color: rgba(18, 18, 18, 0.5);
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.4;
  height: calc(100vh - 112px);
  min-height: 608px;
  h1 {
    color: black;
    font-size: 2rem;
    line-height: 1.2;
    max-width: 1056px;
    text-align: center;
    font-size: 64px;
    padding-top: 76px;
  }

  h1 + p {
    max-width: 1056px;
    text-align: center;
    font-size: 21.6px;
    max-width: 768px;
    margin: 16px auto;
  }
`;

const Timer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  background-color: rgba(18, 18, 18, 0.05);
  width: 416px;
  height: 70.19px;
  font-size: 12.8px;
  margin: 50px auto 0;
  border-radius: 19px;
  padding: 9.6px;

  div {
    text-align: center;
    font-weight: 700;

    span {
      display: block;
      color: black;
      font-size: 19.2px;
      font-weight: 600;
    }
  }
`;

const TimerButton = styled.button`
  height: 51px;
  font-size: 19.2px;
  font-weight: 700;
  padding: 16px 1em;
  border-radius: 12px;
  border: solid transparent 3px;
  transition: all 0.2s;
  line-height: 18px;

  &:hover {
    border: solid black 3px;
  }

  span {
    display: inline;
  }
`;

const SpanPromo = styled.span`
  ${(props) => (props.cheap ? 'color: #28c941' : '')}
  ${(props) => (props.expensive ? 'text-decoration: line-through;' : '')}
`;

const ItalicP = styled.p`
  font-style: italic;
  font-size: 14.8px;
  text-align: center;
  font-weight: 600;
  line-height: 20.16px;
  margin-top: 12px;
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

  div {
    width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 128px;

    h3 {
      font-size: 44.8px;
      margin-bottom: 16px;
      color: #f2f2f2;
    }

    p {
      width: 492px;
      font-size: 21.6px;
      margin-bottom: 16px;
      color: #f2f2f280;
      font-weight: 300;
    }
  }
  .imagesGrid {
    width: 336px;
    height: 238px;
    border-radius: 19px;
    display: block;
    background: #f2f2f250;
    text-align: center;
    color: black;
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
    color: #fdd231;
  }
  img {
    height: 44.88px;
  }
`;

const Features = styled.section`
  ${marginStyles}
  padding: 0 48px 128px 12px;

  height: 288px;

  .container {
    height: 200px;
    display: flex;
    justify-content: space-between;
    width: 1000px;

    div {
      padding: 0 0 40px 40px;
      width: 333px;
    }
  }

  h3 {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    height: 40px;
    font-size: 20.8px;
  }

  p {
    color: rgba(242, 242, 242, 0.5);
    font-size: 16px;
    font-weight: 200px;
  }

  svg {
    display: inline;
    margin-right: 10px;
    background-color: #fdd23133;
    border-radius: 50%;
  }

  .iconSvg {
    fill: #fdd231;
    transform: translate(11px, 10px) scale(0.8);
  }
`;

const SocialProof = styled.section`
  h2 {
    font-size: 44.8px;
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
    color: #f2f2f280;
  }
  & > span {
    text-align: center;
    margin-top: 18px;
    font-weight: 300;
  }
`;

const YellowBanner = styled.div`
  background: #fdd231;
  color: #12121280;
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
    font-size: 44.8px;
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

  .onBanner {
    margin: 50px 0 0;
  }
`;

const Faq = styled.section`
  ${marginStyles}
  display: grid;
  padding: 140px 48px;
  grid-template-columns: 1fr 1fr;
  gap: 2em;

  h2 {
    grid-column: span 2;
    font-size: 44.8px;
  }

  h3 {
    font-size: 20.8px;
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
  h2 {
    font-size: 44.8px;
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
      color: #f2f2f2;
    }
  }

  form {
    background: rgba(242, 242, 242, 0.1);
    border-radius: 9px;
    height: 45.5px;
    display: flex;
    padding: 6.4px;

    input::placeholder {
      color: rgba(242, 242, 242, 0.3);
      font-weight: 500;
      font-size: 16px;
    }

    input {
      flex-grow: 1;
      background-color: rgba(0, 0, 0, 0);
      border: none;
    }
    button {
      width: 96px;
      font-size: 14.4px;
      font-weight: 600;
      border-radius: 9px;
      border: solid transparent 2px;
    }
  }
`;

const Content = () => {
  return (
    <>
      <ScrollRight></ScrollRight>
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
      <Section1>
        <MarginsWrapper>
          <h1>Unleash your keyboard’s superpower</h1>
          <p>
            Wading through shortcuts, and it’s too hard to remember any? Get
            those keystrokes ingrained in your muscle memory for good.
          </p>
          <Timer>
            <div>
              <span>00</span> Days
            </div>
            <div>
              <span>08</span> Hrs
            </div>
            <div>
              <span>58</span> Mins
            </div>
            <div>
              <span>28</span> Secs
            </div>
            <TimerButton>
              Buy for
              <SpanPromo expensive> $20 </SpanPromo>
              <SpanPromo cheap> $15 </SpanPromo>
            </TimerButton>
          </Timer>
          <ItalicP>25% off today · 30-Day Money-Back Guarantee</ItalicP>
        </MarginsWrapper>
      </Section1>
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
          <div className="imagesGrid">THIS IS A GRID WITH IMAGES</div>
        </div>
      </Section3>
      <Features>
        <div className="container">
          <div>
            <h3>
              <svg height="40px" width="40px">
                <path
                  className="iconSvg"
                  d="M12 0.628006C6.916 0.628006 1.513 2.37601 1.5 5.61801V5.62801V18.378C1.5 21.626 6.909 23.378 12 23.378C17.091 23.378 22.5 21.626 22.5 18.378V5.62801C22.5 2.38001 17.091 0.628006 12 0.628006ZM20.5 18.378C20.5 19.601 17.188 21.378 12 21.378C6.812 21.378 3.5 19.601 3.5 18.378V17.589C3.49991 17.5454 3.51128 17.5025 3.53296 17.4647C3.55464 17.4269 3.58587 17.3954 3.62354 17.3734C3.6612 17.3515 3.70397 17.3398 3.74758 17.3395C3.79118 17.3393 3.83409 17.3505 3.872 17.372C6.40201 18.5986 9.18925 19.2008 12 19.128C14.8104 19.2007 17.5973 18.5986 20.127 17.372C20.1649 17.3502 20.2078 17.3386 20.2515 17.3386C20.2952 17.3386 20.3381 17.3502 20.376 17.372C20.4135 17.3941 20.4446 17.4255 20.4663 17.4632C20.488 17.5009 20.4996 17.5435 20.5 17.587V18.378ZM20.5 14.128C20.5 15.351 17.188 17.128 12 17.128C6.812 17.128 3.5 15.351 3.5 14.128V13.339C3.49991 13.2954 3.51128 13.2525 3.53296 13.2147C3.55464 13.1769 3.58587 13.1454 3.62354 13.1234C3.6612 13.1015 3.70397 13.0898 3.74758 13.0895C3.79118 13.0893 3.83409 13.1005 3.872 13.122C6.40201 14.3486 9.18925 14.9508 12 14.878C14.8104 14.9507 17.5973 14.3486 20.127 13.122C20.1649 13.1002 20.2078 13.0886 20.2515 13.0886C20.2952 13.0886 20.3381 13.1002 20.376 13.122C20.4135 13.1441 20.4446 13.1755 20.4663 13.2132C20.488 13.2509 20.4996 13.2935 20.5 13.337V14.128ZM20.5 9.87801C20.5 11.101 17.188 12.878 12 12.878C6.812 12.878 3.5 11.101 3.5 9.87801V9.08901C3.49974 9.04532 3.51097 9.00233 3.53258 8.96435C3.55419 8.92638 3.58541 8.89476 3.6231 8.87267C3.6608 8.85058 3.70364 8.8388 3.74733 8.83851C3.79102 8.83822 3.83401 8.84942 3.872 8.87101C6.40176 10.0985 9.18912 10.701 12 10.628C14.8104 10.7008 17.5974 10.0987 20.127 8.87201C20.1651 8.8505 20.2081 8.83934 20.2518 8.83966C20.2955 8.83998 20.3384 8.85175 20.3761 8.87381C20.4139 8.89587 20.4452 8.92745 20.4669 8.96538C20.4887 9.00332 20.5001 9.04629 20.5 9.09001V9.87801ZM20.5 5.62801C20.489 6.85201 17.181 8.62801 12 8.62801C6.819 8.62801 3.5 6.85101 3.5 5.62801C3.5 4.40501 6.812 2.62801 12 2.62801C17.188 2.62801 20.5 4.40101 20.5 5.62801Z"
                />
              </svg>
              1.000+ Shortcuts
            </h3>
            <p>
              With our database you’ve got more than 1.000 keyboard commands at
              your fingertips, subdivided by app and category.
            </p>
          </div>
          <div>
            <h3>
              <svg height="40px" width="40px">
                <path
                  className="iconSvg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.72571 3.28983C6.16881 4.21597 3.46801 7.26324 3.05493 11H7.05009C7.2743 8.23681 8.1991 5.58442 9.72571 3.28983ZM14.2743 3.28983C15.8009 5.58442 16.7257 8.23681 16.9499 11H20.9451C20.532 7.26324 17.8312 4.21597 14.2743 3.28983ZM14.9424 11C14.6912 8.28683 13.6697 5.70193 12 3.5508C10.3303 5.70193 9.30879 8.28683 9.05759 11H14.9424ZM9.05759 13H14.9424C14.6912 15.7132 13.6697 18.2981 12 20.4492C10.3303 18.2981 9.30879 15.7132 9.05759 13ZM7.05009 13H3.05493C3.46801 16.7368 6.16881 19.784 9.72571 20.7102C8.1991 18.4156 7.2743 15.7632 7.05009 13ZM14.2743 20.7102C15.8009 18.4156 16.7257 15.7632 16.9499 13H20.9451C20.532 16.7368 17.8312 19.784 14.2743 20.7102ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                ></path>
              </svg>
              Keyboard Optimization
            </h3>{' '}
            <p>
              Mouseless translates shortcuts to the language requirements of
              your keyboard.
            </p>
          </div>
          <div>
            <h3>
              <svg height="40px" width="40px">
                <path
                  className="iconSvg"
                  d="M9.37002 13.6L10.91 15.15C10.27 15.33 9.67002 15.67 9.17002 16.17C9.08037 16.2747 8.97006 16.3597 8.84599 16.4197C8.72193 16.4798 8.58679 16.5135 8.44908 16.5188C8.31136 16.5241 8.17402 16.5009 8.0457 16.4506C7.91737 16.4004 7.80083 16.3241 7.70337 16.2267C7.60592 16.1292 7.52966 16.0127 7.47938 15.8843C7.42911 15.756 7.4059 15.6187 7.41122 15.4809C7.41654 15.3432 7.45027 15.2081 7.5103 15.084C7.57032 14.96 7.65534 14.8497 7.76002 14.76C8.22634 14.2911 8.76696 13.9025 9.36002 13.61L9.37002 13.6ZM6.44002 10.68L7.89002 12.13C7.34002 12.46 6.82002 12.87 6.34002 13.34C6.14872 13.5038 5.90264 13.5894 5.65097 13.5797C5.39929 13.57 5.16055 13.4657 4.98246 13.2876C4.80436 13.1095 4.70003 12.8707 4.69031 12.6191C4.68059 12.3674 4.7662 12.1213 4.93002 11.93C5.40002 11.46 5.91002 11.04 6.44002 10.68ZM13.34 9.08C15.5115 9.37381 17.5255 10.3755 19.07 11.93C19.2338 12.1213 19.3195 12.3674 19.3097 12.6191C19.3 12.8707 19.1957 13.1095 19.0176 13.2876C18.8395 13.4657 18.6008 13.57 18.3491 13.5797C18.0974 13.5894 17.8513 13.5038 17.66 13.34C17.4448 13.1274 17.2177 12.9271 16.98 12.74L13.33 9.1L13.34 9.08ZM3.56002 7.83L5.00002 9.25C4.48002 9.62 3.98002 10.05 3.51002 10.51C3.42406 10.6246 3.31447 10.7194 3.18868 10.788C3.06288 10.8566 2.92382 10.8973 2.78091 10.9075C2.638 10.9176 2.49457 10.897 2.36035 10.8469C2.22612 10.7968 2.10422 10.7184 2.00292 10.6171C1.90161 10.5158 1.82325 10.3939 1.77315 10.2597C1.72305 10.1255 1.70238 9.98203 1.71254 9.83911C1.72269 9.6962 1.76344 9.55714 1.83202 9.43135C1.9006 9.30555 1.9954 9.19597 2.11002 9.11C2.57002 8.63 3.06002 8.21 3.57002 7.81L3.56002 7.83ZM9.46002 5.23C13.83 4.44 18.51 5.73 21.89 9.11C21.9947 9.19965 22.0797 9.30997 22.1397 9.43403C22.1998 9.5581 22.2335 9.69323 22.2388 9.83095C22.2441 9.96867 22.2209 10.106 22.1707 10.2343C22.1204 10.3627 22.0441 10.4792 21.9467 10.5767C21.8492 10.6741 21.7327 10.7504 21.6043 10.8006C21.476 10.8509 21.3387 10.8741 21.201 10.8688C21.0633 10.8635 20.9281 10.8298 20.8041 10.7697C20.68 10.7097 20.5697 10.6247 20.48 10.52C19.2791 9.31697 17.8358 8.38351 16.246 7.78175C14.6562 7.17998 12.9565 6.92372 11.26 7.03L9.46002 5.23V5.23Z"
                ></path>
                <path
                  className="iconSvg"
                  d="M12 20.5C11.6022 20.5 11.2206 20.342 10.9393 20.0607C10.658 19.7794 10.5 19.3978 10.5 19C10.5 18.6022 10.658 18.2207 10.9393 17.9393C11.2206 17.658 11.6022 17.5 12 17.5C12.3978 17.5 12.7793 17.658 13.0606 17.9393C13.3419 18.2207 13.5 18.6022 13.5 19C13.5 19.3978 13.3419 19.7794 13.0606 20.0607C12.7793 20.342 12.3978 20.5 12 20.5ZM3.29998 4.70001C3.15555 4.50744 3.08543 4.26923 3.10249 4.02912C3.11956 3.78901 3.22266 3.56311 3.39287 3.3929C3.56308 3.22269 3.78898 3.11959 4.02909 3.10252C4.2692 3.08546 4.5074 3.15558 4.69998 3.30001L20.7 19.3C20.8444 19.4926 20.9145 19.7308 20.8975 19.9709C20.8804 20.211 20.7773 20.4369 20.6071 20.6071C20.4369 20.7773 20.211 20.8804 19.9709 20.8975C19.7308 20.9146 19.4925 20.8444 19.3 20.7L3.29998 4.70001V4.70001Z"
                ></path>
              </svg>
              Offline Support
            </h3>{' '}
            <p>
              No Wi-fi – no problem. Mouseless runs just as smoothly in a rustic
              cabin as on a plane.
            </p>
          </div>
        </div>
      </Features>
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
          <Timer className="onBanner">
            <div>
              <span>00</span> Days
            </div>
            <div>
              <span>08</span> Hrs
            </div>
            <div>
              <span>58</span> Mins
            </div>
            <div>
              <span>28</span> Secs
            </div>
            <TimerButton>
              Buy for
              <SpanPromo expensive> $20 </SpanPromo>
              <SpanPromo cheap> $15 </SpanPromo>
            </TimerButton>
          </Timer>
          <ItalicP>25% off today · 30-Day Money-Back Guarantee</ItalicP>
        </div>
        <img src={logoBig} alt="mousless icon" />
      </YellowBanner>
      <Faq>
        <h2>FAQ</h2>
        <h3>Is there a list of supported apps?&nbsp; &nbsp; &nabla;</h3>
        <h3>Is there a list of supported apps?&nbsp; &nbsp; &nabla;</h3>
        <h3>Is there a list of supported apps?&nbsp; &nbsp; &nabla;</h3>
        <h3>Is there a list of supported apps?&nbsp; &nbsp; &nabla;</h3>
        <h3>Is there a list of supported apps?&nbsp; &nbsp; &nabla;</h3>
        <h3>Is there a list of supported apps?&nbsp; &nbsp; &nabla;</h3>
        <h3>Is there a list of supported apps?&nbsp; &nbsp; &nabla;</h3>
        <h3>Is there a list of supported apps?&nbsp; &nbsp; &nabla;</h3>
        <h3>Is there a list of supported apps?&nbsp; &nbsp; &nabla;</h3>
        <h3>Is there a list of supported apps?&nbsp; &nbsp; &nabla;</h3>
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
