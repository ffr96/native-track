import axios from 'axios';
import type { Weight } from '@/types/weights';

import { User } from '@/types/user';
import { baseUrl } from '@/utils/constants';
import { ValidateErrors } from '@/utils/functions';

type QueryProps = {
  page?: number;
  to?: string;
  from?: string;
};

/**
 * Do a fetch request using
 * @param user Containing **id** of the user we want to fetch
 * weights from and a valid *bearer* **token**
 *
 * TODO: Implement query object; to, from and page
 */

export const getWeights = async ({
  id,
  token,
  page,
}: Omit<User, 'username'> & QueryProps) => {
  let queryPage = '';
  if (page !== undefined) {
    queryPage = `page=${page}`;
  }
  try {
    const { data: weight, status } = await axios.get<Weight[]>(
      `${baseUrl}/users/${id}/weight?${queryPage}`,
      {
        headers: {
          authorization: `bearer ${token}`,
        },
        timeout: 5000,
        validateStatus: ValidateErrors,
      }
    );

    if (status === 200) {
      return weight;
    }
    if (status === 404 || status === 400) {
      return 'error while fetching weight';
    }
  } catch (e) {
    console.log(e);
  }
  return 'unexpected error';
};
