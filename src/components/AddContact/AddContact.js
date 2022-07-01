import { useFormik } from "formik";
import Input from "../../common/Input";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  nationalCode: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("لطفا نام کاربری خود را وارد نمایید."),
  lastName: Yup.string().required("لطفا پسورد خود را وارد نمایید."),
  phoneNumber: Yup.string().required("لطفا پسورد خود را وارد نمایید."),
  nationalCode: Yup.string().required("لطفا پسورد خود را وارد نمایید."),
});
const AddContact = ({ addNewContact }) => {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    addNewContact({
      id: Math.floor(Math.random() * 100),
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      nationalCode: values.nationalCode,
    });
    navigate("/");
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
        <Input formik={formik} name="firstName" label="نام" />
        <Input formik={formik} name="lastName" label="نام خانوادگی" />
        <Input formik={formik} name="phoneNumber" label="شماره تماس" />
        <Input formik={formik} name="nationalCode" label="کد ملی" />
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

export default AddContact;
