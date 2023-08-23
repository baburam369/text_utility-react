import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Alert from "./component/Alert";
import TextForm from "./component/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, alertType) => {
    setAlert({
      msg: message,
      type: alertType,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#242536";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      // document.title = "TextUtils - light"
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          about="About"
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter Your Text Below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />

            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
