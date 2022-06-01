import React from "react";
import "../Styles/Projectspage.css";
import { jsprojects, reactprojects, cloneprojects } from '../Components/ProjectsArray';
import Procard from "../Components/Procard";
import Clonecard from "../Components/Clonecard";
import Reactcard from "../Components/Reactcard";
import { motion } from "framer-motion";


const Projectspage = () => {
 
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

                                  {/* RESPONSIVE HTML/JAVASCRIPT PROJECTS */}

      <div className="heading">

        <p>RESPONSIVE HTML/JAVASCRIPT PROJECTS:</p>

        <i className="fa-solid fa-cog fa-spin"></i>

        <p>More projects underway</p>

      </div>





      <div className="projects">

        {jsprojectsarray}

      </div>




                                            {/* REACT PROJECTS */}

      <div className="heading">

        <p>REACT PROJECTS:</p>

        <i className="fa-solid fa-cog fa-spin"></i>

        <p>More projects underway</p>

      </div>



      <div className="projects">

        {reactjsarray}

      </div>







                                                      {/* CLONES */}
      

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
