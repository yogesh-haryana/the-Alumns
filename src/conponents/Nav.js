import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "../styles/NavStyles";

function Nav() {
  const classes = useStyles();
  return (
    <div className={classes.navBar}>
      <div className={classes.navListContainer}>
        <ul className={classes.navList} type="none">
          <li><NavLink className={classes.navLink} to="/">Home</NavLink></li>
          <li><NavLink className={classes.navLink} to="/ourAlumns">Our Alumns</NavLink></li>
          <li><NavLink className={classes.navLink} to="/AreYouAnAlumni">Are You an Alumni ?</NavLink></li>
        </ul>
      </div>

    </div>
  );
}

export default Nav;
