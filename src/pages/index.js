import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/About';
import ServiceSection from '../sections/Erfahrung';
import Feature from '../sections/Berufsausbildung';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/Contact';
import TestimonialCard from '../sections/testimonial';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Salahuddin Hissam" />
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <TeamSection />  
      </Layout>
      layout end
    </ThemeProvider>
  );
}
