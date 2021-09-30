import { showMessageCritical } from "../component/Message";
import { useDispatch } from "../store";
import { DESTROY_SESSION_USER } from "../store/user";

const LogoutUser = () => {
  const dispatch = useDispatch();
  dispatch({ loading: true })
  DESTROY_SESSION_USER().then(() => {
    window.location.reload()
  });
};

export default LogoutUser;
