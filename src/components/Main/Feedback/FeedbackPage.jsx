import style from "./feedbackpage.module.scss";
import allstyle from "../allstyles.module.scss";
import { useState } from "react";
import { feedback } from "../newsitems";
import DownloadApp from "../DownloadApp/DownloadApp";

const FeedbackPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackItems, setFeedbackItems] = useState(feedback);

  const getId = () => {
    const sourceId =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let idCur = "";
    for (let i = 0; i < 10; i++) {
      idCur += sourceId[Math.floor(Math.random() * sourceId.length)];
    }
    return idCur;
	};
	
	const handleAdFeedback = (e) => {
		e.preventDefault();
		const newFeedback = {
		id: getId(),
		name: name,
		email: email,
		text: message
		};
		setFeedbackItems([newFeedback, ...feedbackItems]);
		setName("");
		setEmail("");
		setMessage("");
	}

  return (
    <main>
      <section className={style.herofeedback}>
        <h2 className={allstyle.herotitle}>Feedback</h2>
        <p className={allstyle.sectiontext}>
          Add exclusive feedback, merch and more
        </p>
        <div className={allstyle.herodecorleft}>
          <img
            src="/Podcast/image/homepage/hero-decor1.png"
            alt="черная кривая с оранжевой звездочкой на конце"
          />
        </div>
        <div className={allstyle.herodecorright}>
          <img
            src="/Podcast/image/homepage/hero-decor2.png"
            alt="несколько разноцветных звездочек"
          />
        </div>
        <div className={allstyle.sectiondecordown}>
          <img src="/Podcast/image/reddecorsection.png" alt="красная кривая" />
        </div>
      </section>
      <section className={style.addfeedback}>
        <div className="container">
          <h2 className={allstyle.sectiontitle}>Add your feedback</h2>
          <form action="#" className={style.form}>
            <div className={style.blockinput}>
              <label htmlFor="name" className={style.inputText}>
                Your name:
              </label>
              <input
                type="text"
                id="name"
                className={style.feedbackInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="your name"
              />
            </div>
            <div className={style.blockinput}>
              <label htmlFor="name" className={style.inputText}>
                Your email:
              </label>
              <input
                type="email"
                id="email"
                className={style.feedbackInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your email"
              />
            </div>
            <label htmlFor="message" className={style.inputText}>
              Your message:
            </label>
            <textarea
              type="text"
              id="message"
              className={style.feedbackMessage}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="your message"
            ></textarea>
            <button className={style.button} onClick={handleAdFeedback}>
              Add feedback
            </button>
          </form>
        </div>
        <div className={allstyle.sectiondecordown}>
          <img src="/Podcast/image/blackdecorsection.png" alt="черная кривая" />
        </div>
      </section>
      <section className={style.feedbackall}>
        <div className="container">
          <h2 className={allstyle.sectiontitle}>Feedback</h2>
          <div className={style.items}>
            {feedbackItems.map((feedbackItem) => (
              <div className={style.item} key={feedbackItem.id}>
                <div className={style.name}>{feedbackItem.name}</div>
                <div className={style.message}>{feedbackItem.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={allstyle.sectiondecordown}>
          <img src="/Podcast/image/reddecorsection.png" alt="красная кривая" />
        </div>
      </section>
      <DownloadApp />
    </main>
  );
};

export default FeedbackPage;
