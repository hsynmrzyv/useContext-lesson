// Components
import Counter from "../Counter/Counter";

// Styles
import "./Form.css";

// Hooks
import { useContext } from "react";

// Context
import Context from "../../context";

const Form = () => {
  const contextData = useContext(Context);

  return (
    <form className="generator__form">
      <div className="generator__form-controls">
        <div className="generator__form-control">
          <label htmlFor="uppercase">Uppercase</label>
          <input
            checked={contextData.isUppercase}
            onChange={(e) => contextData.setIsUppercase(e.target.checked)}
            type="checkbox"
            id="uppercase"
            name="uppercase"
          />
        </div>

        <div className="generator__form-control">
          <label htmlFor="lowercase">Lowercase</label>
          <input
            checked={contextData.isLowerCase}
            onChange={(e) => contextData.setIsLowercase(e.target.checked)}
            type="checkbox"
            id="lowercase"
            name="lowercase"
          />
        </div>

        <div className="generator__form-control">
          <label htmlFor="numbers">Numbers</label>
          <input
            checked={contextData.isNumber}
            onChange={(e) => contextData.setIsNumber(e.target.checked)}
            type="checkbox"
            id="numbers"
            name="numbers"
          />
        </div>

        <div className="generator__form-control">
          <label htmlFor="symbols">Symbols</label>
          <input
            checked={contextData.isSymbol}
            onChange={(e) => contextData.setIsSymbol(e.target.checked)}
            type="checkbox"
            id="symbols"
            name="symbols"
          />
        </div>
        <Counter />
        <div className="generator__form-actions">
          <button className="btn generate-btn">Generate Password</button>
          <button className="btn copy-btn">Copy Password</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
