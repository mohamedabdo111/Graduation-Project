import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ForgetPasswordAction } from "../redux/actions/AuthAction";
import { useNavigate } from "react-router-dom";

const FotgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  //   const [ispress , setIspress] = useState(false)
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const submit = async () => {
    setLoading(true);
    await dispatch(
      ForgetPasswordAction({
        email,
      })
    );
    setLoading(false);
  };
  const res = useSelector((item) => item.Auth.forget_pass);
  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.statusCode === 200) {
        localStorage.setItem("email", email);
        navigate("/code-confirm");
      }
    }
  }, [loading]);

  return [email, onChangeEmail, submit];
};

export default FotgetPassword;
