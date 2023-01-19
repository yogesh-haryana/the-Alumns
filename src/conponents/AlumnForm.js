import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import CreateInput from "./helper";
import useStyles from "../styles/AlumnsFormStyles";

const inititalState = {
  name: "",
  email: "",
  programme: "",
  batch: "",
  company: {
    name: "",
    designation: "",
    location: ""
  },
  photoURL: ""
};

function AlumnForm() {
  const [formDetails, setFormDetails] = useState(inititalState);
  const selectRef = useRef("");
  const classes = useStyles();

  const onSelect = () => {
    const { value } = selectRef.current;
    setFormDetails((prevState) => ({
      ...prevState,
      programme: value
    }));
  };

  const uploadImage = (e) => {
    if (e.target.files[0]) {
      const img = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setFormDetails((prevState) => ({
          ...prevState,
          photoURL: reader.result
        }));
      });
      reader.readAsDataURL(img);
    }
  };
  const onChangeHandler = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setFormDetails((prevState) => ({
      ...prevState,
      [inputName]: inputValue
    }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/api/admin", {
      method: "post",
      body: JSON.stringify(formDetails),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  return (
    <div className={classes.formContainer}>
      <p className={classes.formHeading}>Are You An Alumni? Fill the form to got Published.</p>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <div className={classes.alumnForm}>
          {CreateInput("text", "name", "Enter Your Name", onChangeHandler)}
          {CreateInput("text", "email", "Enter Your Email Address", onChangeHandler)}
          <div>
            <select ref={selectRef} onChange={onSelect}>
              <option value="">Select</option>
              <option value="B. Tech">B. Tech</option>
              <option value="BCA">BCA</option>
              <option value="B. Sc">B. Sc</option>
              <option value="B. Com">B. Com</option>
              <option value="BA">BA</option>
            </select>
          </div>
          {CreateInput("text", "batch", "Enter Your Btach Year", onChangeHandler)}
          {CreateInput("text", "company.name", "Company Name", onChangeHandler)}
          {CreateInput("text", "company.designation", "Designation", onChangeHandler)}
          {CreateInput("text", "company.location", "Company Location", onChangeHandler)}
          <div>
            <input type="file" accept="image/*" onChange={(e) => uploadImage(e)} />
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
