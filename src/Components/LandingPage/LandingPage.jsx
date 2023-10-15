import React from "react";
import Hero from "../Hero/Hero";
import Content from "../Content/Content";
import OurPurpose from "../Our-purpose/OurPurpose";
import OurTeam from "../Ourteam/OurTeam";
import Layout from "../Layout/Layout";
const LandingPage = () => {
  return (
    <>
      <Layout>
        {/* <Hero /> */}
        <Content />
        <OurPurpose />
        <OurTeam />
      </Layout>
    </>
  );
};

export default LandingPage;
