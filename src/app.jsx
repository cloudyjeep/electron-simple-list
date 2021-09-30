import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { hpe } from "grommet-theme-hpe";
import Authentication from "./component/Authentication";
import Home from "./component/Home";
import { useCreateStore } from "./store";
import MessageContainer from "./component/Message";
import Navbar from "./component/Navbar";
import CheckSession from "./actions/CheckSession";
import LoadingCenter from "./component/Loading/LoadingCenter";
import { useEffect } from "preact/compat";

const background = {
  light: "linear-gradient(100deg, #fffdbf -10%, #ffafaf 210%)",
};

export const App = () => {
  const [{ authorized, loading, hasInit }] = useCreateStore();

  useEffect(() => {
    CheckSession();
  }, []);

  return (
    <Grommet full theme={hpe} themeMode="dark" background={background}>
      {authorized ? (
        <Fragment>
          <Navbar />
          <Home />
        </Fragment>
      ) : (
        hasInit && <Authentication />
      )}
      {((authorized && loading) || !hasInit) && (
        <LoadingCenter backdrop={authorized} />
      )}
      <MessageContainer />
    </Grommet>
  );
};
