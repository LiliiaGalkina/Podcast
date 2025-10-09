import style from "./button.module.scss";

const Buttondark = ({buttonText, buttonClass}) => {
    return (
        <button className={style.buttondark}>{buttonText}</button>
    )
}

export default Buttondark;