import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Homepage from "./Homepage";
import Projectspage from "./Projectspage";
import Contact from "./Contact";
import Counter from "../Components/React_Projects/Counter/Counter.js";
import Menu from "../Components/React_Projects/Food-Menu/Menu.js";



const Animated = () => {
  const location = useLocation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Homepage} />
        <Route exact path="/projectspage" component={Projectspage} />
        <Route path="/contact" component={Contact} />
        <Route path="/projectspage/counter" component={Counter} />
        <Route path="/projectspage/foodmenu" component={Menu} />
      </Switch>
    </motion.div>
  );
};

export default Animated;
