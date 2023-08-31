import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Helmet} from "react-helmet"
import  { Toaster } from 'react-hot-toast';


const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
    <Helmet>
      <meta charset="UTF-8"/>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      <meta name="author" content={author}></meta>
      <title>{title}</title>
    </Helmet>
      <Header />
      <main style={{minHeight:"74vh"}}> 
      <Toaster />
      {children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: " Ecommerce app - shop now",
  description: "MERN STACK PROJECT",
  keywords: "mern, react, javascript,mongodb,nodejs,expressjs",
  author: "MDARIF",

}

export default Layout;
