import { Box, Button, Spinner } from "grommet";
import { useDispatch } from "../../../store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FieldInputText } from "../../FieldInput";
import { showMessage } from "../../Message";
import LoginUser from "../../../actions/LoginUser";
import { id, password } from "../../../store/user";

const formOptions = {
  initialValues: {
    [id]: "",
    [password]: "",
  },
  validationSchema: Yup.object({
    [id]: Yup.string().email("Invalid email address").required("Required"),
    [password]: Yup.string().min(4, "Min 4 characters").required("Required"),
  }),
  onSubmit: LoginUser,
};

const FormInput = ({ loading }) => {
  const formik = useFormik(formOptions);
  const { errors, values, touched } = formik;
  const { handleBlur: onBlur, handleChange: onChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <FieldInputText
        disabled={loading}
        label={"Email"}
        data={[id, values[id], touched[id] && errors[id]]}
        handler={{ onChange, onBlur }}
      />
      <FieldInputText
        disabled={loading}
        label={"Password"}
        data={[
          password,
          values[password],
          touched[password] && errors[password],
        ]}
        handler={{ onChange, onBlur }}
      />
      <Box direction="row" justify="between" margin={{ top: "medium" }}>
        <Button
          type="submit"
          label="Masuk"
          icon={loading ? <Spinner /> : undefined}
          disabled={loading}
          primary={!loading}
        />
      </Box>
    </form>
  );
};

export default FormInput;
