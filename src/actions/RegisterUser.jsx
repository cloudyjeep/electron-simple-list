import { showMessage, showMessageWarning } from "../component/Message";
import { useDispatch } from "../store";
import { gender, CREATE_USER } from "../store/user";

const RegisterUser = (dataInput) => {
  const dispatch = useDispatch();
  const user = { ...dataInput, [gender]: dataInput[gender].value };

  dispatch({ loading: true });

  CREATE_USER(user).then(({ done, data }) => {
    console.log({ user: data });
    dispatch({
      loading: false,
      needRegister: !done,
    });
    done
      ? showMessage(
          "Berhasil",
          "Selamat, kamu telah terdaftar \nSilahkan login"
        )
      : showMessageWarning(
          "Maaf",
          "Email sudah terdaftar, silahkan coba yang lain!"
        );
  });
};

export default RegisterUser;
