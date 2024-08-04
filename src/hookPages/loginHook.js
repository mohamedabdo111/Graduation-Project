import { useEffect, useState } from "react";
import { notify } from "../components/fixed/notify";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../redux/actions/AuthAction";

const LoginHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const EmailChange = (e) => {
    setEmail(e.target.value);
  };
  const PasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const checkInputs = () => {
    if (email === "") {
      return notify("Email is required", "error");
    } else if (password === "") {
      return notify("Password is required", "error");
    }
  };

  const submit = async () => {
    checkInputs();

    const formdata = new FormData();
    formdata.append("Email", email);
    formdata.append("Password", password);
    setLoading(true);
    await dispatch(AuthAction(formdata));
    setLoading(false);
  };
  const res = useSelector((item) => item.Auth.login);
  useEffect(() => {
    if (loading === false) {
      console.log(res);
      if (res && res.data && res.data.statusCode === 200) {
        localStorage.setItem("UserInf", JSON.stringify(res.data.data));
        localStorage.setItem("token", res.data.data.token);
        window.location.href = "/";
      }
      if (
        res &&
        res.data &&
        res.data.errors &&
        res.data.errors.Email ==
          "The Email field is not a valid e-mail address."
      ) {
        notify("The Email field is not a valid e-mail address.", "error");
      } else if (
        res &&
        res.data &&
        res.data.errors &&
        res.data.errors.Password ==
          "The field Password must be a string or array type with a minimum length of '6'."
      ) {
        notify("Wrong Password", "error");
      } else if (
        res &&
        res.data &&
        res.data.message === "Name Or Password is invalid..!"
      ) {
        notify("Email or Password is incorrect", "error");
      }
    }
  }, [loading]);

  return [email, password, EmailChange, PasswordChange, submit, loading];
};

export default LoginHook;
