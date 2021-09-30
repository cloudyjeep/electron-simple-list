import { Box, Grommet, Pagination as P } from "grommet";
import { useCallback, useEffect, useState } from "preact/compat";
import styled from "styled-components";
import { useDispatch, useStore } from "../../store";

const theme = {
  pagination: {
    button: {
      fontWeight: 500,
      color: "text-strong",
      borderRadius: "4px",
      active: {
        background: {
          color: "status-warning",
        },
        color: "backgrond-back",
      },
      hover: {
        background: {
          color: "",
        },
      },
    },
  },
};

const BoxOut = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const BoxIn = styled(Box)`
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 44%);
`;

const Pagination = () => {
  const { pageSize, pageLength, pagePos, orderListFilter } = useStore();
  const [pos, setPos] = useState(1);

  useEffect(() => {
    setPos(2);
    setTimeout(() => setPos(pagePos));
  }, [orderListFilter]);

  const handleChange = useCallback((opt) => {
    console.log(opt);
    const { page, startIndex, endIndex } = opt
    const dispatch = useDispatch();
    dispatch({ pagePos, page: { startIndex, endIndex } });
  }, []);

  return (
    <Grommet theme={theme}>
      {/* <Box animation={{ type: "fadeIn" }} ></Box> */}
      <BoxOut align="center" pad={{ bottom: "medium" }}>
        <BoxIn pad="small" round="small" elevation="large">
          <P
            animation={{ type: "fadeIn" }}
            onChange={handleChange}
            numberItems={pageLength}
            step={pageSize}
            page={pos}
          />
        </BoxIn>
      </BoxOut>
    </Grommet>
  );
};

export default Pagination;
