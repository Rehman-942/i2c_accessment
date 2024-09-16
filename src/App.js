import "./App.css";
import Navbar from "./Navbar";

function App() {
  const feedback = [
    {
      title: "Andrew Schultz",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
      img: "images/pic_1.png",
    },
    {
      title: "Andrew Schultz",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
      img: "images/pic_2.png",
    },
    {
      title: "Andrew Schultz",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
      img: "images/pic_3.png",
    },
  ];
  const support = [
    {
      title: "24/7 Support",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      img: "images/lock.png",
    },
    {
      title: "1000+ of reviews",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "images/graph.png",
    },
    {
      title: "And more!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "images/cup.png",
    },
  ];
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <div className="section-1">
          <div className="text-section">
            <p className="title">Lorem ipsum dolor sit amet yo 👋</p>
            <div className="feedback-section">
              {feedback.map((f) => {
                return (
                  <div className="feedback feedback-shadow">
                    <div className="img-wraper">
                      <img src={f.img} alt=""></img>
                    </div>
                    <div className="detail-wraper">
                      <h3>{f.title}</h3>
                      <p>{f.text}</p>
                    </div>
                  </div>
                );
              })}
              <div className="feedback feedback-gradient"></div>
            </div>
          </div>
          <div className="phone-image">
            <img src="/images/main.png" alt=""></img>
          </div>
        </div>
        <div className="support-section">
          {support.map((s) => {
            return (
              <div className="support-box">
                <div className="support-img-wraper">
                  <img src={s.img} alt=""></img>
                </div>
                <div className="support-text">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="registration-section">
          <div className="reg-img-wraper">
            <img src="images/main_2.png" alt=""></img>
          </div>
          <div className="reg-box">
            <form className="reg-form">
              <h3 className="title">Registration</h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae,
                in tristique senectus dui pharetra sit.
              </p>
              <div className="name">
                <label>
                  Name <span>*</span>
                </label>
                <input
                  placeholder="Enter your name"
                  required
                  type="text"
                ></input>
              </div>
              <div className="company">
                <label>Company</label>
                <input
                  placeholder="Enter your company name"
                  type="text"
                ></input>
              </div>
              <div className="email">
                <label>
                  Email address <span>*</span>
                </label>
                <input
                  placeholder="Enter your email address"
                  required
                  type="email"
                ></input>
              </div>
              <button>Register</button>
            </form>
            <div className="reg-complete">
              <h3>Registration</h3>
              <p>
                Hi (Xyz), thanks for registering. Somebody will contact you
                soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
