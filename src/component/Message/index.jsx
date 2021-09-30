import { createRef } from "preact";
import { useReducer, useState } from "preact/compat";
import Notification from "./Notification";

const component = createRef();
const toast = createRef();

const openMessage = (status) => (title, message) => {
  component.current = { status, title, message };
  toast.current[1](true);
};

export const showMessage = openMessage('normal')
export const showMessageInfo = openMessage()
export const showMessageWarning = openMessage('warning')
export const showMessageCritical = openMessage('critical')
export const showMessageUnknown = openMessage('unknown')


const MessageContainer = () => {
  toast.current = useReducer((s, d) => d, false);
  const [visible, setVisible] = toast.current;
  const onClose = setTimeout.bind( null, () => {
    setVisible(false);
    component.current = {};
  },0);

  return (
    visible && <Notification toast onClose={onClose} {...component.current} />
  );
};

export default MessageContainer;
