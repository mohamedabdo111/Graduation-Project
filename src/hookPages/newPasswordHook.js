import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewPasswordAction } from "../redux/actions/AuthAction";
import { notify } from "../components/fixed/notify";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPasswordpassword, setconfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const email = localStorage.getItem("email");

  const onChangepass = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirm = (e) => {
    setconfirmPassword(e.target.value);
  };

  const validation = () => {
    if (password !== confirmPasswordpassword) {
      return notify("Password not match !", "warn");
    } else if (password.length < 8) {
      return notify(
        "Passwords must have at least one non alphanumeric character. ,Passwords must have at least one lowercase ('a'-'z'). ,Passwords must have at least one uppercase ('A'-'Z'). ,",
        "warn"
      );
    }
  };
  const submit = async () => {
    validation();
    setLoading(true);
    await dispatch(
      NewPasswordAction({
        email,
        newPassword: password,
        confirmPassword: confirmPasswordpassword,
      })
    );
    setLoading(false);
  };
  const res = useSelector((item) => item.Auth.password);
  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.statusCode === 200) {
        navigate("/login");
      }
    }
  }, [loading]);

  return [
    password,
    confirmPasswordpassword,
    onChangepass,
    submit,
    onChangeConfirm,
  ];
};

export default NewPassword;
