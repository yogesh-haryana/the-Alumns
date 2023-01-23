import React, { useState, useEffect } from "react";
import axios from "axios";
import useStyles from "../styles/AdminStyles";

function Admin() {
  const classes = useStyles();
  const [fetchedData, setFetchedData] = useState([]);

  const fatchDataToVerify = async () => {
    const response = await axios.get("https://the-alumns.onrender.com/api/admin");
    const { data } = response;
    setFetchedData(data);
  };

  useEffect(() => {
    fatchDataToVerify();
  }, []);

  const deleteProfile = async (ind) => {
    const targetElement = fetchedData[ind];
    const { _id } = targetElement;
    await axios.delete(`https://the-alumns.onrender.com/api/admin/${_id}`);
  };

  const verifyAndDeleteProfile = async (ind) => {
    const targetElement = fetchedData[ind];
    const {
      name, email, programme, batch, company, photoURL
    } = targetElement;
    const dataToBePost = {
      name,
      email,
      programme,
      batch,
      company,
      photoURL
    };
    await fetch("https://the-alumns.onrender.com/api/theAlumns/", {
      method: "post",
      body: JSON.stringify(dataToBePost),
      headers: {
        "Content-Type": "application/json"
      }
    });
    deleteProfile(ind);
  };

  return (
    <div>
      <div>
        <div>
          {fetchedData.map((item, index) => (
            // eslint-disable-next-line no-underscore-dangle
            <div key={item._id}>
              <div className={classes.imgContainer}><img className={classes.profile} src={item?.photoURL} alt="profile" /></div>
              <div className={classes.allDetails}>
                <p>{item?.name}</p>
                <p>{item?.email}</p>
                <p>{item?.programme}</p>
                <p>{item?.batch}</p>
                <h3>company: </h3>
                <p>{item?.company?.name}</p>
                <p>{item?.company?.designation}</p>
                <p>{item?.company?.location}</p>
              </div>
              <button type="button" onClick={() => deleteProfile(index)}>Remove</button>
              <button type="button" onClick={() => verifyAndDeleteProfile(index)}>Verify</button>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
