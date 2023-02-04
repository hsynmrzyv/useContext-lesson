import "./Counter.css";

// Hooks
import { useContext } from "react";

// Context
import Context from "../../context";

const Counter = (props) => {
  const contextData = useContext(Context);

  return (
    <div className="generator__length">
      <h4 className="generator__length-title">Password Length</h4>
      <div className="generator__length-counter">
        <button onClick={contextData.dcrs}>-</button>
        <span>{contextData.ctxCounter}</span>
        <button onClick={contextData.incrs}>+</button>
      </div>
    </div>
  );
};

export default Counter;
