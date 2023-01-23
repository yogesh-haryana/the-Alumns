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
