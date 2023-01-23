import axios from "axios";
import React, { useState, useEffect } from "react";
import useStyles from "../styles/AlumnsPageStyles";

function AlumnsPage() {
  const classes = useStyles();
  const [alumnsData, setAlumnsData] = useState([]);

  useEffect(() => {
    axios.get("https://the-alumns.onrender.com/api/theAlumns")
      .then((resp) => setAlumnsData(resp.data))
      .catch((resp) => console.warn(resp));
  }, []);

  return (
    <div className={classes.alumnsContainer}>
      {alumnsData.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={classes.alumni} key={i}>
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
        </div>
      ))}
    </div>
  );
}

export default AlumnsPage;
