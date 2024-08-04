import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterAction } from "../redux/actions/AuthAction";
import { notify } from "../components/fixed/notify";
import { useNavigate } from "react-router-dom";

const RegisterHook = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [gender, setGender] = useState("");
  const [userType, setUseType] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIspress] = useState(false);
  const dispatch = useDispatch();

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfrimPass = (e) => {
    setConfirmPass(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangeUserType = (e) => {
    setUseType(e.target.value);
  };

  //   validation for empty inputs
  const validation = () => {
    if (username === "") {
      return notify("UserName is empty", "error");
    } else if (email === "") {
      return notify("Email is empty", "error");
    } else if (Phone === "") {
      return notify("phone is empty", "error");
    } else if (Phone.length < 11) {
      return notify("Phone number must be 11 numbers", "error");
    } else if (password === "") {
      return notify("Password is empty", "error");
    } else if (confirmPass === "") {
      return notify("Confirm password is empty", "error");
    } else if (gender === "") {
      return notify("Select your gender", "error");
    } else if (userType === "none") {
      return notify("Select your type", "error");
    } else if (userType === "") {
      return notify("Select your type", "error");
    } else if (password !== confirmPass) {
      return notify("Password not match !", "error");
    } else if (password.length < 8) {
      return notify(
        "The password must be 8 letters , numbers and symbols",
        "error"
      );
    }
  };
  const submit = async (e) => {
    validation();
    setLoading(true);
    setIspress(true);
    const formdata = new FormData();
    formdata.append("UserName", username);
    formdata.append("Phone", Phone);
    formdata.append("Email", email);
    formdata.append("Gender", gender);
    formdata.append("UserType", userType);
    formdata.append("Password", password);
    formdata.append("ConfirmPassword", confirmPass);
    await dispatch(RegisterAction(formdata));
    setLoading(false);
  };

  const res = useSelector((item) => item.Auth.register);
  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      setTimeout(() => {
        setIspress(false);
      }, 2000);

      if (res) {
        if (
          res &&
          res.data &&
          res.data.message === "Email Or Name is Already Registered"
        ) {
          return notify("Email Or Name is Already Registered", "warn");
        } else if (res && res.data && res.data.statusCode === 200) {
          notify("Confirm this email before login", "warn");
          setTimeout(() => {
            navigate("/login");
          }, 3000);

          return;
        } else if (
          res &&
          res.data &&
          res.data.message ===
            "Passwords must have at least one non alphanumeric character. ,Passwords must have at least one lowercase ('a'-'z'). ,Passwords must have at least one uppercase ('A'-'Z'). ,"
        ) {
          return notify(
            "Passwords must have at least one non alphanumeric character. ,Passwords must have at least one lowercase ('a'-'z'). ,Passwords must have at least one uppercase ('A'-'Z'). ,",
            "warn"
          );
        } else if (
          res &&
          res.data &&
          res.data.errors &&
          res.data.errors.Email &&
          res.data.errors.Email[0] ===
            "The Email field is not a valid e-mail address."
        ) {
          return notify(
            "The Email field is not a valid e-mail address.",
            "warn"
          );
        } else if (
          res &&
          res.data &&
          res.data.message ===
            `Username '${username}' is invalid, can only contain letters or digits. ,`
        ) {
          return notify(
            ` Username '${username}' is invalid, can only contain letters or digits.`,
            "warn"
          );
        }
      }
    }

    console.log(res);
  }, [loading]);
  return [
    onChangeUserName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfrimPass,
    onChangeGender,
    onChangeUserType,
    username,
    email,
    Phone,
    password,
    confirmPass,
    gender,
    userType,
    submit,
    isPress,
    loading,
  ];
};

export default RegisterHook;
