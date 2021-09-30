import { Anchor, Box, Card, Text } from "grommet";
import { useDispatch, useStore } from "../../../store";
import FormInput from "./FormInput";

const RegisterForm = () => {
  const { loading } = useStore();
  return (
    <Card pad="medium" gap="small">
      <Box direction="column">
        <Text size="xlarge">Daftar</Text>
        <Text size="xsmall">Silahkan isi data dibawah</Text>
      </Box>
      <FormInput loading={loading} />
      <Text size="small">
        {"Sudah punya akun? "}
        <Anchor
          disabled={loading}
          onClick={() => useDispatch()({ needRegister: false })}
        >
          {"Login"}
        </Anchor>
      </Text>
    </Card>
  );
};

export default RegisterForm;
