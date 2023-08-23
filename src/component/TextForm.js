import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#242536" : "white",
    borderColor: props.mode === "dark" ? "White" : "black",
  };

  function handleOnChange(e) {
    setText(e.target.value);
  }

  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE", "success");
  }

  function handleClearClick() {
    let newText = "";
    setText(newText);
  }

  function handleLoClick() {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }
  function handleTitleCaseClick() {
    let newText = (text) => {
      text = text.toLowerCase().split(" ");
      for (let i = 0; i < text.length; i++) {
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
      }
      return text.join(" ");
    };

    setText(newText);
    props.showAlert("Converted to Titlecase", "success");
  }
  let splitText = text.split(/\s+/).filter((st) => st !== "").length; //split words on whitespace

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => {
          props.showAlert("Copied to clipboard", "success");
          console.log("Success");
        })
        .catch(error => {
          props.showAlert("Unable to copy to clipboard", "warning");
          console.error("Error copying:", error);
        });
    } else {
        props.showAlert("Unable to copy to clipboard", "danger");
    }
  };
  
  const handleExtraSpaces = () => {
    let newText = text.split(/ +/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h5>{props.heading}</h5>
        <div className="mb-3 mt-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            style={myStyle}
            className="form-control"
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleTitleCaseClick}
        >
          Convert to TitleCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Trim Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3 className="text text-success">Your Text Summary</h3>
        <p>
          You have entered {splitText} words and {text.length} characters
        </p>
        <p>
          <b>~{(1 / 125) * splitText} </b>minutes read
        </p>
        <h3 className="text text-warning">Preview</h3>
        <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
      </div>
    </>
  );
}
