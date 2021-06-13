/**
 * @format
 * @jsx jsx
 */

import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Subscription,
    altText: "FOM Hochschule",
    title: "MSc. Business Consulting & Digital Management",
    text:
      "FOM Hochschule Bremen (DE), Schwerpunkte: E-Business und Digitalisierung von Unternehmen, Voraussichtlicher Abschluss im Juli 2022 ",
  },
  {
    id: 2,
    imgSrc: Subscription,
    altText: "BSc. Internationale Beziehungen",
    title: "BSc. Internationale Beziehungen",
    text:
      "Inönü Universität (TR) Schwerpunkte: internationale Wirtschaft, Marketing und Recht, 2012 - 2016",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Studentenaustauschprogramm",
    title: "Auslandsstudium",
    text:
      "Università degli Studi di Foggia, Foggia (IT), Nachhaltiges Wirtschaften, 2013",
  },
  {
    id: 4,
    imgSrc: Subscription,
    altText: "Customer Support",
    title: "Audit, Controlling, Grundlagen der Dokumentation",
    text: "Türkisches Normungsinstitut, Malatya (TR), 2015",
  },
];

export default function Feature() {
  return (
    <section id="education" sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="I am forever learning, I can never say I know all..."
          title="Berufsausbildung"
        />
      </Container>
      <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCard
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}
      </Grid>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
