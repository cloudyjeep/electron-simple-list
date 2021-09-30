import { Anchor, Card, Text } from "grommet";
import { useDispatch, useStore } from "../../../store";
import FormInput from "./FormInput";

const LoginForm = () => {
  const { loading } = useStore();
  return (
    <Card pad="medium" gap="small">
      <Text size="xlarge">Masuk</Text>
      <FormInput loading={loading} />
      <Text size="small">
        {"Belum punya akun? "}
        <Anchor
          disabled={loading}
          onClick={() => useDispatch()({ needRegister: true })}
        >
          {"Daftar"}
        </Anchor>
      </Text>
    </Card>
  );
};

export default LoginForm;
