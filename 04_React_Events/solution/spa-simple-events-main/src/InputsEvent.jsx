function InputsEvent() {
  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    console.log(`Input field "${fieldName}" changed to: ${fieldValue}`);
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <input
        type="text"
        name="input1"
        onChange={handleInputChange}
        placeholder="Input 1"
      />
      <input
        type="text"
        name="input2"
        onChange={handleInputChange}
        placeholder="Input 2"
      />

      <textarea onChange={handleInputChange} placeholder="Textarea"></textarea>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
}

export default InputsEvent;
