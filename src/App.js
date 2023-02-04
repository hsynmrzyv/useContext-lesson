import "./App.css";

// Hooks
import { useState } from "react";

// Components
import Modal from "./Components/Modal/Modal";
import Form from "./Components/Form/Form";

// Context
import Context from "./context";

// Data
import { upperCaseLetters, lowerCaseLetters, numbers, special } from "./data";

const App = () => {
  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(6);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isLowercase, setIsLowercase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [modal, setModal] = useState({
    title: "",
    message: "",
    show: false,
  });

  console.log(isUppercase, isLowercase, isNumber, isSymbol);

  const increaseCounter = (e) => {
    e.preventDefault();

    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const decreaseCounter = (e) => {
    e.preventDefault();

    if (counter > 6) {
      setCounter(counter - 1);
    }
  };

  return (
    <Context.Provider
      value={{
        ctxCounter: counter,
        incrs: increaseCounter,
        dcrs: decreaseCounter,
        isUppercase: isUppercase,
        setIsUppercase: setIsUppercase,
        isLowercase: isLowercase,
        setIsLowercase: setIsLowercase,
        isNumber: isNumber,
        setIsNumber: setIsNumber,
        isSymbol: isSymbol,
        setIsSymbol: setIsSymbol,
      }}
    >
      <div className="App">
        <div className="generator">
          <h2 className="generator__title">Password Generator</h2>
          <h4 className="password">{password}</h4>
          {modal.show && <Modal />}
          <Form />
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
