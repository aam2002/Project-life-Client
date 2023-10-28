import React from "react";
import Hero from "../Hero/Hero";
import Content from "../Content/Content";
import OurPurpose from "../Our-purpose/OurPurpose";
// import OurTeam from "../Ourteam/OurTeam";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";
import Team from "../Team/Team";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


const LandingPage = () => {
  return (
    <>
    {/* <BrowserRouter>
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Content" element={ <Content />} />
        <Route path="/Our-purpose" element={<OurPurpose />} />
        <Route path="/Our-team" element={ <OurTeam />} />
        <Routes/>
      </BrowserRouter> */}
      <Layout>
        <Hero />
        <Content />
        <OurPurpose />
        {/* <OurTeam /> */}
        <Team/>
      </Layout>
    </>
  );
};

export default LandingPage;