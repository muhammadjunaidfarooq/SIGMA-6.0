function handleClick(event) {
  console.log("Hello!");
  console.log(event);
}
function handleMouseOver() {
  console.log("Bye!");
}
function handleDblClick() {
  console.log("You double click the button");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>This para is for event demo</p>
      <button onDoubleClick={handleDblClick}>Double Click</button>
    </div>
  );
}
