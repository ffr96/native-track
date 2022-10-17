import { Form } from '@/components/Form/Form';
import { FormTextInput } from '@/components/Form/FormTextInput';
import { Box } from '@/components/Layout/Box';

import { useAppDispatch } from '@/hooks/useStoreState';
import { RegisterProps, userRegister } from '../api/userRegister';

/**
 * ADD A NOTIFICATION DISPATCH WHEN NOTIFICATIONS ARE IMPLEMENTED
 */

export const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async ({ username, password, email }: RegisterProps) => {
    const user = await userRegister({ username, password, email });
    if (typeof user === 'string') console.log('error: ', user);
    else console.log('successfuly registered!: ', user);
  };

  return (
    <Box>
      <Form<RegisterProps> onSubmit={onSubmit} title='Register'>
        <FormTextInput name='email' placeholder='email' />
        <FormTextInput name='username' placeholder='username' />
        <FormTextInput
          name='password'
          secureTextEntry={true}
          placeholder='password'
        />
      </Form>
    </Box>
  );
};
