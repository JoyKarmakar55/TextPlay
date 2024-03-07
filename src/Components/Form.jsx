import React, { useState } from "react";

const Form = (props) => {
  const handleSubmit1 = () => {
    console.log("submitted");
    setNum(null);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleSubmit2 = () => {
    console.log("submitted");
    setNum(null);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleSubmit3 = () => {
    setNum(text.charAt(0) === "" ? 0 : text.split(" ").length);
    console.log(setNum);
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const [num, setNum] = useState(null);

  return (
    <>
      <div className="text-center text-white bg-dark m-0 p-0 py-5">
        <h1 style={{ fontFamily: "monospace-italic" }}>Text Converter</h1>
      </div>
      <div className="container my-5">
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              <h3 className="text-white">{props.heading}</h3>
            </label>
            <textarea
              className="form-control text-white"
              id="exampleFormControlTextarea1"
              rows={20}
              value={text}
              onChange={handleChange}
              style={{
                backgroundColor: "#343a40",
                border: "none",
              }}
            />
          </div>
        </form>
        <button
          type="button"
          onClick={handleSubmit1}
          className="btn btn-danger mx-2 my-2 float-right"
        >
          change to uppercase
        </button>
        <button
          type="button"
          onClick={handleSubmit2}
          className="btn btn-danger mx-2 my-2 float-right"
        >
          change to lowercase
        </button>

        <button
          type="button"
          onClick={handleSubmit3}
          className="btn btn-danger mx-2 my-2 float-right"
        >
          count number of words
        </button>
      </div>
      {num !== null && (
        <div className="text-center text-white mt-4 p-0 py-5 my-5">
          <h2>Number of words = {num}</h2>
        </div>
      )}
    </>
  );
};

export default Form;
