import React from 'react';
import { Layout } from '../layout/Layout';
import { NewSection, SectionDivider, SectionTitle } from '../styles/GlobalComponents';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../components/Projects/ProjectsStyles';
import { projects } from '../constants/constants';

const Projects = () => (
    <Layout>
    <NewSection id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />

            <HeaderThree title={p.title}>{p.title}</HeaderThree>
            <TitleContent>{p.title_content}</TitleContent>
            <Hr />

            <CardInfo className="card-info">{p.description}</CardInfo>

            <UtilityList>
              <ExternalLinks target="_blank" href={p.visit} rel="noopener noreferrer">Learn more</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </NewSection>
  </Layout>
);

export default Projects;