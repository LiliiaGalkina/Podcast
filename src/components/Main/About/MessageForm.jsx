import style from "./messageform.module.scss";
import Buttondark from "../../Button/Buttondark";

const MessageForm = () => {
  return (
    <form action="#" className={style.getintoushform}>
      <div className={style.fields}>
        <div className={style.field}>
          <label htmlFor="name" className={style.fieldlabel}>
            Full name <span>*</span>
          </label>
          <input
            type="text"
            id="name"
            className={style.fildinput} required
            placeholder="Full name"
          />
        </div>
        <div className={style.field}>
          <label htmlFor="email" className={style.fieldlabel}>
            Email <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            className={style.fildinput} required
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className={style.field}>
          <label htmlFor="phone" className={style.fieldlabel}>
            Phone <span>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            className={style.fildinput} required
            placeholder="Phone"
          />
        </div>
        <div className={style.field}>
          <label htmlFor="subject" className={style.fieldlabel}>
            Subject <span>*</span>
          </label>
          <input
            type="text"
            id="subject"
            className={style.fildinput} required
            placeholder="Subject..."
          />
        </div>
        <div className={style.field}>
          <label htmlFor="message" className={style.fieldlabel}>
            Message <span>*</span>
          </label>
          <textarea
            name="message"
            id="message"
            className={style.fieldmessage} required
            placeholder="Your message goes here..."
          ></textarea>
        </div>
      </div>
      <div className={style.buttonblock}>
        <p className={style.text}>
          <span>*</span>required
        </p>
        <Buttondark buttonText="SEND MESSAGE" />
        <div className={style.info}>
          Viverra at port accumsan. <a href="#" className={style.infolink}>Orci non</a>
        </div>
      </div>
    </form>
  );
};

export default MessageForm;