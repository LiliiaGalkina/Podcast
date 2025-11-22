import style from "./messageform.module.scss";
import Buttondark from "../../Button/Buttondark";
import { useState } from "react";

const MessageForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
	const [isEmailValidate, setIsEmailValidate] = useState(true);
	const [isPhoneValidate, setIsPhoneValidate] = useState(true);


  const handleChangeEmail = (e) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (emailRegex.test(e.target.value)) {
      setIsEmailValidate(true);
    } else {
      setEmail("");
      setIsEmailValidate(false);
    }
  };

	const handleChangePhone = (e) => {
	   const phoneRegex = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
     if (phoneRegex.test(e.target.value)) {
		 setIsPhoneValidate(true);
		 console.log(true)
     } else {
       setPhone("");
		 setIsPhoneValidate(false);
		 console.log(false);
     }
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={style.fildinput}
            required
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleChangeEmail}
            className={style.fildinput}
            style={{ borderColor: !isEmailValidate ? "#cd4631" : "#000000" }}
            required
            placeholder="johndoe@gmail.com"
          />
          <p className={style.error}>
            {!isEmailValidate ? "Введите корректный Email" : ""}
          </p>
        </div>
        <div className={style.field}>
          <label htmlFor="phone" className={style.fieldlabel}>
            Phone <span>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={handleChangePhone}
            className={style.fildinput}
            required
            placeholder="+0 000-000-00-00"
          />
          <p className={style.error}>
            {!isPhoneValidate ? "Введите корректный номер телефона" : ""}
          </p>
        </div>
        <div className={style.field}>
          <label htmlFor="subject" className={style.fieldlabel}>
            Subject <span>*</span>
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={style.fildinput}
            required
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={style.fieldmessage}
            required
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
          Viverra at port accumsan.{" "}
          <a href="#" className={style.infolink}>
            Orci non
          </a>
        </div>
      </div>
    </form>
  );
};

export default MessageForm;
