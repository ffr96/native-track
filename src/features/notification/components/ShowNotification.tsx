import { Notification } from './Notification';

import { useAppDispatch, useAppSelector } from '@/hooks/useStoreState';
import { removeNotification } from '../notificationSlice';

const defaultDuration = 3500;

export const ShowNotification = () => {
  const notification = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();

  setTimeout(() => {
    dispatch(removeNotification());
  }, notification.duration ?? defaultDuration);

  if (!notification.message) return null;

  return <Notification {...notification} />;
};
