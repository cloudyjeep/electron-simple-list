import { useCallback, useEffect, useState } from "preact/compat";
import { Box, Button, Layer, Paragraph, Text } from "grommet";
import {
  FormClose,
  StatusCritical,
  StatusWarning,
  StatusGood,
  StatusUnknown,
  StatusInfo
} from "grommet-icons";

const theme = {
  time: 8000,
  container: {
    // any box props
    pad: { horizontal: "small", vertical: "xsmall" },
    background: {
      color: "background-front",
    },
  },
  toast: {
    container: {
      // any box props
      elevation: "medium",
      round: "xsmall",
      width: "medium",
    },
    layer: {
      position: "top",
      margin: "medium",
    },
  },
  iconContainer: {
    // any box props
    pad: { right: "small" },
  },
  textContainer: {
    // any box props
    gap: "medium",
  },
  title: {
    // any text props
    weight: "bold",
  },
  message: {
    // any text props
    margin: "none",
  },
  close: {
    icon: FormClose,
  },
  critical: {
    icon: StatusCritical,
    color: "status-critical",
  },
  warning: {
    icon: StatusWarning,
    color: "status-warning",
  },
  normal: {
    icon: StatusGood,
    color: "status-ok",
  },
  unknown: {
    icon: StatusUnknown,
    color: "status-unknown",
  },
  undefined: {
    icon: StatusInfo,
    color: "status-unknown",
  },
};

const Notification = ({ message, onClose, status, title, toast }) => {
  const [visible, setVisible] = useState(true);

  const close = useCallback(() => {
    setVisible(false);
    if (onClose) onClose();
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(close, theme.time);

    return () => clearTimeout(timer);
  }, [close, theme.time]);

  const { icon: CloseIcon } = theme.close;
  const { icon: StatusIcon, color } = theme[status];
  const { color: closeIconColor } = theme.close;

  let content = (
    <Box
      {...theme.container}
      {...(toast ? { ...theme.toast.container } : {})}
      direction="row"
    >
      <Box {...theme.iconContainer}>
        <StatusIcon color={color} />
      </Box>
      <Box
        {...theme.textContainer}
        align="start"
        direction="row"
        justify="between"
        flex
      >
        <Box>
          <Text {...theme.title}>{title}</Text>
          {message && <Paragraph {...theme.message}>{message}</Paragraph>}
        </Box>
        {onClose && (
          <Button
            icon={<CloseIcon color={closeIconColor} />}
            onClick={close}
            plain
          />
        )}
      </Box>
    </Box>
  );

  return toast
    ? visible && (
        <Layer
          {...theme.toast.layer}
          role="log"
          modal={false}
          onEsc={onClose}
          responsive
          plain
        >
          {content}
        </Layer>
      )
    : content;
};

export default Notification;
