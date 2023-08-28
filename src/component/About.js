import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //     color: 'black',
  //     backgroundColor: 'white'
  // })

  // const [btnTxt, setBtnTxt] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //     if(myStyle.color ==='black'){
  //         setMyStyle({
  //             color: 'white',
  //             backgroundColor: 'black'
  //         })
  //         setBtnTxt("Enable Light Mode");
  //     } else {
  //         setMyStyle({
  //             color: 'black',
  //             backgroundColor: 'white'
  //         })
  //         setBtnTxt("Enable Dark Mode");
  //     }
  // }
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor : props.mode === "dark" ? "#242536" : "#aeb0b3"
  }
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black",}}
      >
       
        <h2>About Us</h2>
        <div className="accordion"  id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Text analysing features</strong>
              </button>
            </h2>
            <div  style={myStyle}
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
               Textutils gives you the ability to perform various function with your text. 
               Be it word count, converting text to same case, etc.
              </div>
            </div>
          </div>
          <div  style={myStyle} className="accordion-item" >
            <h2 className="accordion-header" >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
              <strong>Free and easy to use</strong> 
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" >
                Textutils is a free character count tool that provides instant character count and word count
                for a given text. Also, it is packed with many other features like conversion of text to
                UPPERCASE, lowercase, Title Case, etc. It is mostly suitable for writing text with word/character
                limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
               <strong>Browser Compatibility</strong> 
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Textutils works for most of the desktop/PC browser and all mobile browser. 
                Although some mobile browsers does not support some of the features.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
