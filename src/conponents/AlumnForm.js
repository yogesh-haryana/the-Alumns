import React from "react";
import { Button } from "@mui/material";
import CreateInput from "./helper";
import useStyles from "../styles/AlumnsFormStyles";

function AlumnForm() {
  const classes = useStyles();
  const onSelect = () => {

  };
  return (
    <div className={classes.formContainer}>
      <p className={classes.formHeading}>Are You An Alumni? Fill the form to got Published.</p>
      <form>
        <div className={classes.alumnForm}>
          {CreateInput("text", "name", "Enter Your Name")}
          {CreateInput("text", "email", "Enter Your Email Address")}
          <div>
            <select value={onSelect}>
              <option value="">Select</option>
              <option value="B. Tech">B. Tech</option>
              <option value="BCA">BCA</option>
              <option value="B. Sc">B. Sc</option>
              <option value="B. Com">B. Com</option>
              <option value="BA">BA</option>
            </select>
          </div>
          {CreateInput("text", "batch", "Enter Your Btach Year")}
          {CreateInput("text", "company.name", "Company Name")}
          {CreateInput("text", "company.designation", "Designation")}
          {CreateInput("text", "company.location", "Company Location")}
          <div>
            <input type="file" accept="image/*" />
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Button type="reset" variant="outlined">Reset</Button>
          <Button type="submit" variant="contained">Submit</Button>
        </div>

      </form>
    </div>
  );
}

export default AlumnForm;
