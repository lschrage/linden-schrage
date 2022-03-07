import React from 'react';
import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img } from './HeroStyles';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Linden Schrage
        </SectionTitle>
        <SectionText>
         Welcome to my portfolio! I'm a sophomore at Harvard College studying Applied Mathematics. In my free time, I like to build cool things.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.open('/files/resume_web_short.pdf')
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
