import React from "react";
import "../Styles/Projectspage.css";
import Procard from "../Components/Procard";
import Clonecard from "../Components/Clonecard";
import Reactcard from "../Components/Reactcard";
import { motion } from "framer-motion";


const Projectspage = () => {

                                                /* JAVASCRIPT PROJECTS */

  let jsprojects = [
  {
    name: "RESPONSIVE SIDEBAR",
    location: "/Projects/Toggleable_Sidebar.html",
    git: "https://github.com/Justinhemnath/Portofolio-main/blob/master/public/Projects/Toggleable_Sidebar.html"
  },

  {
    name: "SIMPLE COUNTER", 
    location: "/Projects/Counter.html", 
    git: "https://github.com/Justinhemnath/Portofolio-main/blob/master/public/Projects/Counter.html"
  },
  
  {
    name: "MODAL", 
    location: "/Projects/Modal.html", 
    git: "https://github.com/Justinhemnath/Portofolio-main/blob/master/public/Projects/Modal.html"
  },
  
  {
    name: "RESPONSIVE TOGGLEABLE NAVBAR", 
    location: "/Projects/Resp_toggleable_navbar.html", 
    git: "https://github.com/Justinhemnath/Portofolio-main/blob/master/public/Projects/Resp_toggleable_navbar.html"
  },
  
  {
    name: "TABS", 
    location: "/Projects/Tabs.html", 
    git: "https://github.com/Justinhemnath/Portofolio-main/blob/master/public/Projects/Tabs.html"
  },
  
  {
    name: "TODO LIST", 
    location: "/Projects/TODO.html", 
    git: "https://github.com/Justinhemnath/Portofolio-main/blob/master/public/Projects/TODO.html"
  }
];

  



                                                  /* REACT PROJECTS */

  let reactprojects = [
  {
    name: "SIMPLE COUNTER USING useState HOOK ",
    location: "/projectspage/counter",
    git: "https://github.com/Justinhemnath/Portofolio-main/tree/master/src/Components/React_Projects/Counter"
  }
];




  
                                                      /* CLONES */

  const cloneprojects = [
  {
    name: "MSI Motherboards",
    clonelink: "./Clonedsites/MSI_site/Msiwebpage.html",
    mainlink: "https://www.msi.com/Motherboard/B450M-PRO-VDH-PLUS/",
    gitlink:
      "https://github.com/Justinhemnath/Portofolio-main/tree/master/public/Clonedsites/MSI_site"
  }
];




 
                                            /* Map functions to make list */

  let jsprojectsarray = jsprojects.map(

    obj => <Procard key={obj.name} name={obj.name} location={obj.location} gitlink={obj.git} />
     
  );



  let reactjsarray = reactprojects.map(

    obj => <Reactcard key={obj.name} name={obj.name} location={obj.location} gitlink={obj.git} />

  );



  let clonesarray = cloneprojects.map(

    obj => <Clonecard key={obj.name} name={obj.name} clone={obj.clonelink} main={obj.mainlink} git={obj.gitlink} />

  );

  

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

        {jsprojectsarray}

      </div>






      <div className="heading">

        <p>REACT PROJECTS:</p>

        <i className="fa-solid fa-cog fa-spin"></i>

        <p>More projects underway</p>

      </div>



      <div className="projects">

        {reactjsarray}

      </div>












      

      <div className="heading">

        <p>CLONES:</p>

        <i className="fa-solid fa-cog fa-spin"></i>

        <p>More projects underway</p>

      </div>

      <div className="projects">

        {clonesarray}
        
      </div>

    </motion.div>

  );

};

export default Projectspage;
