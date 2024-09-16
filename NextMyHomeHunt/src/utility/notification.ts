import { notifications } from "@mantine/notifications";

interface NotificationShowProps {
  title?: string;
  message?: string;
  type?: "error" | "warning" | "success";
  icon?: string;
  loading?: boolean;
  autoClose?: number | boolean;
  withCloseButton?: boolean;
}

interface NotificationUpdateProps extends NotificationShowProps {
  id: any;
}

export function notificationShow(props: NotificationShowProps) {
  const color =
    props.type == "error" ? "red" : props.type == "warning" ? "orange" : "teal";
  return notifications.show({
    color: color,
    title: props.title,
    message: props.message,
    loading: props.loading ? props.loading : false,
    autoClose: props.autoClose ? props.autoClose : true,
    withCloseButton: props.withCloseButton ? props.withCloseButton : true,
  });
}

export function notificationUpdate(props: NotificationUpdateProps) {
  const color =
    props.type == "error"
      ? "red"
      : props.type == "warning"
      ? "orange"
      : "green";
  return notifications.update({
    id: props.id,
    color: color,
    title: props.title,
    message: props.message,
    loading: props.loading ? props.loading : false,
    autoClose: props.autoClose ? props.autoClose : true,
    withCloseButton: props.withCloseButton ? props.withCloseButton : true,
  });
}
