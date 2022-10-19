import { Form } from '@/components/Form/Form';
import { FormTextInput } from '@/components/Form/FormTextInput';
import { Box } from '@/components/Layout/Box';
import { setNotification } from '@/features/notification/notificationSlice';

import { useAppDispatch } from '@/hooks/useStoreState';
import { storage } from '@/utils/storage';
import { LoginProps, userLogin } from '../api/userLogin';
import { setUser } from '../userSlice';

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async ({ username, password }: LoginProps) => {
    const user = await userLogin({ username, password });
    if (typeof user === 'string')
      dispatch(setNotification({ message: 'Error logging in', type: 'error' }));
    else {
      await storage.setItem(user);
      dispatch(
        setNotification({ message: 'Successfuly logged in', type: 'success' })
      );
      dispatch(setUser(user));
    }
  };

  return (
    <Box>
      <Form<LoginProps> onSubmit={onSubmit} title='Login'>
        <FormTextInput required name='username' placeholder='username' />
        <FormTextInput
          required
          name='password'
          secureTextEntry={true}
          placeholder='password'
        />
      </Form>
    </Box>
  );
};
