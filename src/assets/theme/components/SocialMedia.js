import React from 'react';
import gitlabImage from '../../images/gitlab.svg';
import facebookImage from '../../images/facebook.svg';
import twitterImage from '../../images/twitter.svg';
import instagramImage from '../../images/instagram.svg';
import linkedinImage from '../../images/linkedin.svg';
import { styles } from '../constants';
import DefaultBox from './DefaultBox';

const onClick = href => window.open(href, `_blank`);

const SocialMedia = () => (
  <DefaultBox
    style={{
      ...styles.defaultBox,
      flexDirection: `column`,
      height: 200,
    }}
  >
    <div style={{ flex: 1, cursor: `pointer` }}>
      <img src={gitlabImage} alt="GitLab" onClick={() => onClick(`https://gitlab.com`)} />
    </div>
    <div style={{ flex: 1, cursor: `pointer` }}>
      <img src={facebookImage} alt="Facebook" onClick={() => onClick(`https://facebook.com`)} />
    </div>
    <div style={{ flex: 1, cursor: `pointer` }}>
      <img src={twitterImage} alt="Twitter" onClick={() => onClick(`https://twitter.com`)} />
    </div>
    <div style={{ flex: 1, cursor: `pointer` }}>
      <img src={instagramImage} alt="Instagram" onClick={() => onClick(`https://instagram.com`)} />
    </div>
    <div style={{ flex: 1, cursor: `pointer` }}>
      <img src={linkedinImage} alt="LinkedIn" onClick={() => onClick(`https://linkedin.com`)} />
    </div>
  </DefaultBox>
);

export default SocialMedia;
