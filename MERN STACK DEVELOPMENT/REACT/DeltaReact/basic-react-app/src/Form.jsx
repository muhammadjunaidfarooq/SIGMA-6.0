function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Form was submitted");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input />
      <button>Submit</button>
    </form>
  );
}
