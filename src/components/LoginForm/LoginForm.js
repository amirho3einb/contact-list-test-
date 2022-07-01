import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { loginUser } from "../../services/loginServices";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("لطفا نام کاربری خود را وارد نمایید."),
  password: Yup.string().required("لطفا پسورد خود را وارد نمایید."),
});

const LoginForm = () => {
  const setAuth = useAuthActions();
  const { stateAuth } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  // useEffect(() => {
  //   if (auth) navigate(state?.path || "/dashboard");
  // }, [auth]);

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      //setError("");
      setAuth(data.Value);
      navigate(state?.path || "/dashboard/tourlist");
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="w-11/12 md:w-1/2 mx-auto shadow-md border border-stone-100 my-10 p-6 rounded-md bg-white">
      <h3 className="inline-block border-b-2 border-orangeKite font-bold text-lg mb-5">
        ورود
      </h3>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="username" label="نام کاربری" />
        <Input
          formik={formik}
          name="password"
          label="رمز عبور"
          type="password"
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className="bg-orangeKite disabled:bg-stone-400 py-2 rounded text-white"
          style={{ width: "100%" }}
        >
          ورود به کایت
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* <Link to={`/signup?redirect=${redirect}`} className="calltoLogin">
          <p>Not signup yet?</p>
        </Link> */}
      </form>
    </div>
  );
};

export default LoginForm;
