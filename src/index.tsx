import { AppRoutes } from './routes';
import { ShowNotification } from './features/notification/components/ShowNotification';

export const Index = () => {
  return (
    <>
      <AppRoutes />
      <ShowNotification />
    </>
  );
};
