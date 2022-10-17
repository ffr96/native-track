import { ValidateErrors } from '@/utils/functions';
import { baseUrl } from '@/utils/constants';
import axios from 'axios';

export type RegisterProps = {
  username: string;
  password: string;
  email: string;
};

export const userRegister = async ({
  username,
  password,
  email,
}: RegisterProps) => {
  try {
    const { data: user, status } = await axios.post<RegisterProps>(
      `${baseUrl}/users`,
      {
        username,
        password,
        email,
      },
      {
        validateStatus: ValidateErrors,
      }
    );

    if (status === 200) {
      return user;
    }
    if (status === 400) {
      return 'invalid input or username already in use';
    }
  } catch (e) {
    console.log(e);
  }
  return 'unexpected error';
};
