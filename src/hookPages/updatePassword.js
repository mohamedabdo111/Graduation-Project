import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePasswordAction } from "../redux/actions/ownerAction";
import { notify } from "../components/fixed/notify";

const UpdatePasswordHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const onChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    var email = JSON.parse(localStorage.getItem("UserInf")).email;
  } else {
    email = "";
  }

  //   validation
  const validation = () => {
    if (password === "") {
      return notify("Password is required", "warn");
    } else if (newpassword === "") {
      return notify("New Password is required", "warn");
    } else if (confirmPassword === "") {
      return notify("Confirm Password is required", "warn");
    } else if (newpassword !== confirmPassword) {
      return notify(" Password not match ", "warn");
    }
  };

  const onSubmit = async () => {
    validation();
    setLoading(true);
    await dispatch(
      UpdatePasswordAction({
        email,
        password,
        newPassword: newpassword,
        confirmPassword,
      })
    );
    setLoading(false);
  };

  const res = useSelector((item) => item.AdminReducer.updataPassword);
  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.message === "invalid password") {
        notify("Old Password is wrong ", "warn");
      } else if (res && res.data && res.data.statusCode === 200) {
        notify("Your Password updated ", "success");
        setPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else if (
        res &&
        res.data &&
        res.data.message ===
          " 'Passwords must have at least one non alphanumeric character.',  'Passwords must have at least one lowercase ('a'-'z').',  'Passwords must have at least one uppercase ('A'-'Z').', "
      ) {
        notify(
          "The password must be composed of numbers, symbols, capital letters and small letters ",
          "warn"
        );
      }
    }
  }, [loading]);

  return [
    password,
    confirmPassword,
    onChangeConfirmPassword,
    onChangePassword,
    onSubmit,
    onChangeNewPassword,
    newpassword,
  ];
};

export default UpdatePasswordHook;
