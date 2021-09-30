import { showMessageCritical } from "../component/Message";
import { useDispatch } from "../store";
import { VALIDATE_USER } from "../store/user";

const LoginUser = (dataInput) => {
  const dispatch = useDispatch();
  dispatch({ loading: true });

  VALIDATE_USER(dataInput).then(({ done, data }) => {
    console.log({ user: data });
    setTimeout(() => {
      dispatch({
        loading: false,
        authorized: done,
        user: data
      });
    }, 400);
    if (!done)
      showMessageCritical(
        "Yah Gagal",
        "Sepertinya email atau password salah, silahkan coba lagi"
      );
  });
};

export default LoginUser;
