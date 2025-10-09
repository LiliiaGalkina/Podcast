import style from "./button.module.scss";

const Button = ({buttonText, buttonClass}) => {
    return (
        <button className={style.buttongrey}>{buttonText}</button>
    )
}

export default Button;