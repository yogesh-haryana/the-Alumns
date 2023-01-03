export default function CreateInput(type, name, placeHolder) {
  return (
    <div>
      <input type={type} name={name} placeholder={placeHolder} />
    </div>
  );
}
