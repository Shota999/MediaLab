import "./subscribe.scss";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe_container">
        <div className="container">
          <div className="subscribe">
            <h2>Subscribe</h2>
            <div className="join">
              <form>
                <label>
                  Email
                  <input placeholder="example@email.com" type="email" />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
