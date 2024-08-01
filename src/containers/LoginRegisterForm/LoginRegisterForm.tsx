import { ReactElement } from "react";
import logo from "../../assets/img/logo.svg";
import styles from "../../containers/LoginRegisterForm/LoginRegisterForm.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LoginRegisterForm = (): ReactElement => {
  return (
    <form className={cx("login-register-form")}>
      <div className="login-register-form__icon">
        <img src={logo} alt="Logo of the page with app name and food bowl" />
      </div>
      <div className="login-register-form__buttons">
        <a href="#">LOGIN</a>
        <a href="#">REGISTER</a>
      </div>
      <div className="login-register-form__border"></div>
      <h1>Register</h1>
      <p>Join our office foodies today!</p>
      <label>
        <input></input>
      </label>
      <label>
        <input></input>
      </label>
      <label>
        <input></input>
      </label>
      <div>
        <input type="checkbox"></input>
        <p>I have read the Comunity Rules</p>
      </div>
      <button></button>
    </form>
  );
};

export default LoginRegisterForm;