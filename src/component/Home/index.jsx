import { Box } from "grommet";
import ListOfOders from "../ListOfOrders";
import Pagination from "./Pagination";

const Home = () => {
  return (
    <Fragment>
      <Box pad="large">
        <ListOfOders />
      </Box>
      <Pagination/>
    </Fragment>
  );
};

export default Home;
