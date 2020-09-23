import React from 'react';
import { feature1 } from '../OtherModules/FeatureIcon1';
import { feature2 } from '../OtherModules/FeatureIcon2';
import { feature3 } from '../OtherModules/FeatureIcon3';
import styled from 'styled-components';
import { colors, marginStyles } from '../GlobalStyles';

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
    background-color: ${colors.yellow}33;
    border-radius: 50%;
  }

  .iconSvg {
    fill: ${colors.yellow};
    transform: translate(11px, 10px) scale(0.8);
  }
`;

const FeaturesSection = () => {
  return (
    <>
      <Features>
        <div className="container">
          <div>
            <h3>
              {feature1}
              1.000+ Shortcuts
            </h3>
            <p>
              With our database you’ve got more than 1.000 keyboard commands at
              your fingertips, subdivided by app and category.
            </p>
          </div>
          <div>
            <h3>
              {feature2}
              Keyboard Optimization
            </h3>{' '}
            <p>
              Mouseless translates shortcuts to the language requirements of
              your keyboard.
            </p>
          </div>
          <div>
            <h3>
              {feature3}
              Offline Support
            </h3>{' '}
            <p>
              No Wi-fi – no problem. Mouseless runs just as smoothly in a rustic
              cabin as on a plane.
            </p>
          </div>
        </div>
      </Features>
    </>
  );
};

export default FeaturesSection;
