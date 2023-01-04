// import axios from "axios";

export default function CreateInput(type, name, placeHolder, onChangeHandler) {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        onChange={onChangeHandler}
      />
    </div>
  );
}

// export async function httpHelper(httpObj) {
//   const { method, url, data } = httpObj;
//   const response = await axios({
//     method: method || "post",
//     url,
//     data
//     // headers: { "Content-Type": "multipart/form-data" }
//   });
//   console.log(response);

//     .then((response) => {
//       // handle success
//       console.log(response);
//     })
//     .catch((response) => {
//       // handle error
//       console.log(response);
//     });
// }
