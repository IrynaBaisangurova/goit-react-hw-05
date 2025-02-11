import s from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={s.text}>Sorry, something went wrong... Please try again!</p>
  );
}

