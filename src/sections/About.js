/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fahigkeiten',
    title: 'Fähigkeiten',
    text:
      'Lernbereitschaft, Kreativ, Effektiv, Flexibel, Kompromissbereitschaft, Aufgeschlossen, Internationalität, Teamplayer',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Technische Kenntnisse',
    text:
      'HTML, CSS, JavaScript, CMS (Content-Management-System), Git, Canva, Figma, Chrome developer tools, Hosting und Domainverwaltung, Ms Office (Word, Powerpoint).',
  },
  {
    id: 3,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Sprachen',
    text:
      'Deutsch (fließend), Englisch (fließend), Türkisch (fließend), Persich, Hindi (Fließend) (fließend), Usbekisch (Muttersprache)',
  },
  {
    id: 4,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Interessen',
    text:
      'Künstliche Intelligenz, Neue Technologien, Wirtschaft, International Reisen.',
  },
];

export default function KeyFeature() {
  return (

    <section sx={{variant: 'section.keyFeature'}} id='about'>
      <Container>
        <SectionHeader
          slogan='Ich bin leidenschaftlicher Webdesigner mit Schwerpunkt Digitales Marketing. "Respond to Change" ist meine Lebensphilosophie.
          '
          title='👨🏽‍💻' />
        <Grid
          sx={styles.grid}
        >
          {data.map(item => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid >
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
