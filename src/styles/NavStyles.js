import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navBar: {
    width: "100%",
    height: "50px"

  },
  navListContainer: {
    width: "50%",
    height: "50px"
  },
  navList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    "& li": {
      "& a": {
        textDecoration: "none"
      }
    }
  }

});

export default useStyles;
