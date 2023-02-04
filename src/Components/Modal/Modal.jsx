import "./Modal.css";

const Modal = () => {
  return (
    <>
      <div className="backdrop"></div>
      <div className="modal">
        <h2>Title</h2>
        <p>Message</p>
        <button>Okay</button>
      </div>
    </>
  );
};

export default Modal;
