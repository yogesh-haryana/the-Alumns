import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  alumnsContainer: {
    display: "flex",
    flexWrap: "wrap"

  },
  alumni: {
    width: "33.33%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  imgContainer: {
    height: "30%"

  },
  profile: {
    height: "150px",
    width: "150px",
    borderRaduis: "45%"
  },
  allDetails: {
    height: "70%",
    textAlign: "left",
    padding: "10px"
  }

});

export default useStyles;
