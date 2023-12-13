import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="BenIsmail E-Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/*<ArticlesSection sectionId="articles" heading="Latest Project" sources={['Medium']} />*/}
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="Skills" heading="Skills" />
        <ProjectsSection sectionId="features" heading="The Best Free Project" />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}
