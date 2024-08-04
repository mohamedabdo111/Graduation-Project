import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CodePasswordAction } from "../redux/actions/AuthAction";
import { notify } from "../components/fixed/notify";
import { useNavigate } from "react-router-dom";

const CodeForgetPassHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);
  //   const [ispress , setIspress] = useState(false)
  const email = localStorage.getItem("email");
  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const submit = async () => {
    setLoading(true);
    await dispatch(
      CodePasswordAction({
        code,
        email,
      })
    );
    setLoading(false);
  };
  const res = useSelector((item) => item.Auth.code);
  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.message === "Not Same Code!") {
        // window.location.href = "/code-confirm";
        notify("This code is wrong , try again", "warn");
      } else if (res && res.data && res.data.statusCode === 200) {
        notify("Please wait ", "success");
        navigate("/forget-password");
      }
    }
  }, [loading]);

  return [code, onChangeCode, submit];
};

export default CodeForgetPassHook;
