import "../../App.scss";
import "./contact.scss";

const Write = () => {
  return (
    <>
      <div className="container">
        <div className="title">
          <h2>write to us</h2>
        </div>
      </div>
      <form className="write">
        <div className="input">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
        </div>
        <textarea placeholder="Add your text here"></textarea>
        <div className="submit">
          <button>Send</button>
        </div>
      </form>
    </>
  );
};

export default Write;
