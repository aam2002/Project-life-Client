import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};
Layout.defaultProps = {
  title: "Geeta",
};

export default Layout;
