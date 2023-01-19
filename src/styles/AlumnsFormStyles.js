import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  formContainer: {
    width: "100%",
    alignItems: "center"
  },
  formHeading: {
    fontSize: "1rem",
    fontWeight: 600
  },
  alumnForm: {
    margin: "0 auto",
    display: "flex",
    width: "75%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    "& div": {
      width: "50%",
      margin: "0 0 1rem 0",
      "& input": {
        width: "60%",
        height: "30px",
        border: "1px solid black",
        lineHeight: "30px"
      },
      "& select": {
        width: "60%",
        border: "1px solid black",
        height: "30px"
      }
    }
  },
  buttonContainer: {
    textAlign: "right",
    margin: "1rem 7rem 0 0",
    "& button": {
      margin: "0 10px"
    }
  }
});

export default useStyles;
