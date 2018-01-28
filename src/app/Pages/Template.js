import React from "react";

//import { NavBar } from "./NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Template = (props) => {
    return(
        <div className="main">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Template;