import React from "react";
import "../Styles/Projectspage.css";
import Procard from "../Components/Procard";
import Clonecard from "../Components/Clonecard";
import Reactcard from "../Components/Reactcard";
import { motion } from "framer-motion";


const Projectspage = () => {

                    /* JAVASCRIPT PROJECTS */

  const sidebar = {
    name: "RESPONSIVE SIDEBAR",
    location: "/Projects/Toggleable_Sidebar.html",
    git: "https://github.com/Justinhemnath/Portofolio-main/blob/master/public/Projects/Toggleable_Sidebar.html"
  };

  const simple_counter_js = {
    name: "SIMPLE COUNTER", 
    location: "/Projects/Counter.html", 
    git: "https://github.com/Justinhemnath/Portofolio-main/blob/master/public/Projects/Counter.html"
  };

  const modal = {
    name: "MODAL", 
    location: "/Projects/Modal.html", 
    git: "https://github.com/Justinhemnath/Portofolio-main/blob/master/public/Projects/Modal.html"
  };

  const navbar = {
    name: "RESPONSIVE TOGGLEABLE NAVBAR", 
    location: "/Projects/Resp_toggleable_navbar.html", 
    git: "https://github.com/Justinhemnath/Portofolio-main/blob/master/public/Projects/Resp_toggleable_navbar.html"
  };

  const tabs = {
    name: "TABS", 
    location: "/Projects/Tabs.html", 
    git: "https://github.com/Justinhemnath/Portofolio-main/blob/master/public/Projects/Tabs.html"
  };

  const todo = {
    name: "TODO LIST", 
    location: "/Projects/TODO.html", 
    git: "https://github.com/Justinhemnath/Portofolio-main/blob/master/public/Projects/TODO.html"
  };

                        /* const = {
                          name: "", location: "", git: ""
                        }; */

                     /* REACT PROJECTS */

  const simple_counter_rjs = {
    name: "SIMPLE COUNTER USING useState HOOK ",
    location: "/projectspage/counter",
    git: "https://github.com/Justinhemnath/Portofolio-main/tree/master/src/Components/React_Projects/Counter"
  };
                        /* CLONES */

  const msi = {
    name: "MSI Motherboards",
    clonelink: "./Clonedsites/MSI_site/Msiwebpage.html",
    mainlink: "https://www.msi.com/Motherboard/B450M-PRO-VDH-PLUS/",
    gitlink:
      "https://github.com/Justinhemnath/Portofolio-main/tree/master/public/Clonedsites/MSI_site"
  };

                        /* const = {
                            name: "",
                            clonelink: "", 
                            mainlink: "", 
                            gitlink: ""
                          }; */

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="projects-page"
    >



      <div className="heading">

        <p>RESPONSIVE HTML/JAVASCRIPT PROJECTS:</p>

        <i className="fa-solid fa-cog fa-spin"></i>

        <p>More projects underway</p>

      </div>



      <div className="projects">

        <Procard name={sidebar.name} location={sidebar.location} gitlink={sidebar.git} />
        <Procard name={simple_counter_js.name} location={simple_counter_js.location} gitlink={simple_counter_js.git} />
        <Procard name={modal.name} location={modal.location} gitlink={modal.git} />
        <Procard name={navbar.name} location={navbar.location} gitlink={navbar.git} />
        <Procard name={tabs.name} location={tabs.location} gitlink={tabs.git} />
        <Procard name={todo.name} location={todo.location} gitlink={todo.git} />

      </div>










      <div className="heading">

        <p>REACT PROJECTS:</p>

        <i className="fa-solid fa-cog fa-spin"></i>

        <p>More projects underway</p>

      </div>



      <div className="projects">

        <Reactcard name={simple_counter_rjs.name} location={simple_counter_rjs.location} gitlink={simple_counter_rjs.git} />

      </div>












      

      <div className="heading">

        <p>CLONES:</p>

        <i className="fa-solid fa-cog fa-spin"></i>

        <p>More projects underway</p>

      </div>

      <div className="projects">

        <Clonecard
          name={msi.name}
          clone={msi.clonelink}
          main={msi.mainlink}
          git={msi.gitlink}
        />
        
      </div>

    </motion.div>

  );

};

export default Projectspage;
