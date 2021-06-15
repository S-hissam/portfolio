/**
 * @format
 * @jsx jsx
 */

import { jsx } from "theme-ui";
import { Box, Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFacebookF,
   FaWhatsappSquare,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-scroll";

import Member1 from "assets/team/member-1.png";

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: "Salahuddin Hissam",
    title: "Salahuddin Hissam",
    designation: "",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "https://www.facebook.com/salahuddin.hi",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "github",
        path: "https://github.com/S-hissam",
        icon: <FaGithub />,
      },
      {
        id: 3,
        name: "instagram",
        path: "https://www.instagram.com/hi_sselahatin/",
        icon: <FaInstagram />,
      },
      {
        id: 4,
        name: "linkedin",
        path: "https://www.linkedin.com/in/salahuddin-hissam-7bbb90b3/",
        icon: <FaLinkedin />,
      },
    ],
  },
];

const socialm = [
  {
    id: 1,
    name: "facebook",
    path: "https://www.facebook.com/salahuddin.hi",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    name: "github",
    path: "https://github.com/S-hissam",
    icon: <FaGithub />,
  },
  {
    id: 3,
    name: "instagram",
    path: "https://www.instagram.com/hi_sselahatin/",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    name: "linkedin",
    path: "https://www.linkedin.com/in/salahuddin-hissam-7bbb90b3/",
    icon: <FaLinkedin />,
  },
];

export default function TeamSection() {
  return (
    <section id="contact">
      <Container>
        <SectionHeader
          slogan="If you want me, Please let me know 🙋🏻‍♂️"
          title="Contact me"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            ></TeamCard>
          ))}

          {/* <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {socialm.map((socialItem, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <Link key={socialItem.id} to={socialItem.path}>{socialItem.icon}</Link>
                </Box>
              ))}
            </Box>
          </Box> */}
          <Box sx={styles.social}>
            <Box><FaEnvelope /> info@sa-hi.de | gokencm@gmail.com</Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: 34,
      mr: "15px",
      transition: "all 0.25s",
      cursor: "pointer",
      ":last-child": {
        mr: "0",
      },
      "&:hover": {
        color: "secondary",
      },
    },
  },
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["100px 100px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "1fr",
      null,
    ],
  },
};
