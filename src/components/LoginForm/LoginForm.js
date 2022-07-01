import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthActions } from "../../Providers/AuthProvider";

const DUMMY_DATA = {
  userName: "testNasiba",
  password: "test123",
};

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
  const navigate = useNavigate();
  const { state } = useLocation();

  const onSubmit = async (values) => {
    if (
      values.username === DUMMY_DATA.userName &&
      values.password === DUMMY_DATA.password
    ) {
      setAuth(true);
      navigate(state?.path || "/");
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است.");
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
    <div className="">
      <h3 className="">ورود</h3>
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
          className=""
          style={{ width: "100%" }}
        >
          ورود به کایت
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
