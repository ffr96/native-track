import { User } from '@/types/user';
import { ValidateErrors } from '@/utils/functions';
import { baseUrl } from '@/utils/constants';
import axios from 'axios';

export type LoginProps = {
  username: string;
  password: string;
};

export const userLogin = async ({ username, password }: LoginProps) => {
  try {
    const { data: user, status } = await axios.post<User>(
      `${baseUrl}/login`,
      {
        username,
        password,
      },
      {
        validateStatus: ValidateErrors,
      }
    );

    if (status === 200) {
      return user;
    }
    if (status === 404) {
      return 'not found';
    }
    if (status === 400) {
      return 'invalid input';
    }
  } catch (e) {
    console.log(e);
  }
  return 'unexpected error';
};
