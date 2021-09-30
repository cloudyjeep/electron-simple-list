import { Box, Button, Drop, Heading, Layer, List, Text, Tip } from "grommet";
import { useEffect, useRef, useState } from "preact/hooks";
import styled from "styled-components";
import ProcessOrderItem from "../../actions/ProcessOrderItem";
import { useStore } from "../../store";
import { diantarkan, dibuat, diterima } from "../../store/orderList";

const colorGradient = {
  [diterima]: ["rgb(255 65 65)", "rgb(117 84 177 / 76%)"],
  [dibuat]: ["rgb(255 190 14)", "rgb(199 61 61 / 99%)"],
  [diantarkan]: ["rgb(0 209 53)", "rgb(61 149 199 / 75%)"],
};

const StatusLabel = styled(Text)`
  text-transform: uppercase;
  padding: 5px 8px 3px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 6px;
  color: white;
  background-image: ${(props) =>
    `linear-gradient(136deg, rgb(255,234,212), ${props.bg[0]} 20%, ${props.bg[1]} 130%);`};
`;

const StatusLabelSide = styled(StatusLabel)`
  align-self: flex-end;
  margin-top: 20px;
  padding: 2px 13px 0px 16px;
  border-radius: 0;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  cursor: pointer;
`;

const TextClockLabel = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: white;
  background: #58789b;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 20px;
  padding: 2px 15px 2px 16px;
  align-self: flex-end;
`;

const PopupStatusInfo = ({ confirm, isDone, newStatus }) => (
  <Box pad="small">
    <Text weight="bold">
      {isDone ? "Pesanan telah selesai" : "Proses ke "}
      {!isDone && (
        <StatusLabel bg={colorGradient[newStatus]}>{newStatus}</StatusLabel>
      )}
      {confirm && " ?"}
    </Text>
  </Box>
);

const StatusInfoLabel = (props) => {
  const [clicked, setClicked] = useState();
  const { id, status } = props.item;
  const isDone = status == diantarkan;
  const newStatus = status == diterima ? dibuat : diantarkan;

  const onOpen = isDone ? undefined : () => setClicked(true);
  const onClose = !clicked ? undefined : () => setClicked(false);

  return (
    <Tip
      dropProps={{ align: { right: "right", top: "bottom" } }}
      content={<PopupStatusInfo {...{ isDone, newStatus }} />}
    >
      <StatusLabelSide onClick={onOpen} color="text" bg={colorGradient[status]}>
        {status}
        {clicked && (
          <Layer position="center" onEsc={onClose} onClickOutside={onClose}>
            <Box pad="medium" width="medium">
              <Heading level={4} margin="none">
                Konfirmasi
              </Heading>
              <PopupStatusInfo {...{ isDone, newStatus}} confirm />
              <Box direction="row" justify="end">
                <Button
                  onClick={() => (onClose(), ProcessOrderItem(props.item, newStatus))}
                  label="OK"
                  color="status-ok"
                />
                <Button
                  onClick={onClose}
                  label="Batal"
                  color="status-critical"
                />
              </Box>
            </Box>
          </Layer>
        )}
      </StatusLabelSide>
    </Tip>
  );
};

const OrderLabel = ({ item }) => (
  <Box flex={{ grow: 1, shrink: 1 }} justify="between">
    <StatusInfoLabel item={item} />
    <TextClockLabel>{item.hour}</TextClockLabel>
  </Box>
);

export default OrderLabel;
