import { Box, Button, Card, Text, Spinner } from "grommet";
import { useFormik } from "formik";
import * as Yup from "yup";
import { id, password, name, gender } from "../../../store/user";
import { genderOptions } from "../../../store/user";
import { FieldInputSelect, FieldInputText } from "../../FieldInput";
import RegisterUser from "../../../actions/RegisterUser";

const dataGender = genderOptions.map((k) => ({
  value: k,
  label: {
    M: "Pria",
    F: "Wanita",
    O: "Lainnya",
  }[k],
}));

const formOptions = {
  initialValues: {
    [id]: "",
    [password]: "",
    [name]: "",
    [gender]: { value: "" },
  },
  validationSchema: Yup.object().shape({
    [id]: Yup.string().email("Invalid email address").required("Required"),
    [password]: Yup.string().min(4, "Min 4 characters").required("Required"),
    [name]: Yup.string().min(2, "characters too less").required("Required"),
    [gender]: Yup.object().shape({
      value: Yup.string().required("Required"),
    }),
  }),
  onSubmit: RegisterUser,
};

const FormInput = ({ loading }) => {
  const formik = useFormik(formOptions);
  const { errors, values, touched, setFieldValue, isValid } = formik;
  const { handleBlur: onBlur, handleChange: onChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit}>
      {[
        [name, "Nama Lengkap"],
        [id, "Email"],
        [password, "Password"],
      ].map(([field, label], index) => (
        <FieldInputText
          disabled={loading}
          key={index}
          label={label}
          data={[field, values[field], touched[field] && errors[field]]}
          handler={{ onChange, onBlur }}
        />
      ))}
      <FieldInputSelect
        disabled={loading}
        label={"Jenis Kelamin"}
        options={dataGender}
        data={[
          gender,
          values[gender],
          touched[gender]?.value && errors[gender]?.value,
        ]}
        handler={{
          onChange: ({ option }) => {
            console.log(option);
            setFieldValue(gender, option);
          },
        }}
      />

      <Box direction="row" justify="between" margin={{ top: "medium" }}>
        <Button
          type="submit"
          label="Daftar"
          icon={loading ? <Spinner /> : undefined}
          disabled={loading}
          primary={!loading}
        />
      </Box>
    </form>
  );
};

export default FormInput;
