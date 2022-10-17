import axios from 'axios';
import { TrainingLog } from '@/types/logs';

import { User } from '@/types/user';
import { baseUrl } from '@/utils/constants';
import { ValidateErrors } from '@/utils/functions';

type QueryProps = {
  page?: number;
};

/**
 * Do a fetch request using
 * @param user Containing **id** of the user we want to fetch
 * logs from and a valid *bearer* **token**
 * **page** for pagination query
 */

export const getLogs = async ({
  id,
  token,
  page,
}: Omit<User, 'username'> & QueryProps) => {
  let queryPage = '';
  if (page) {
    queryPage = `page=${page}`;
  }
  try {
    const { data: logs, status } = await axios.get<TrainingLog[]>(
      `${baseUrl}/users/${id}/logs?${queryPage}`,
      {
        timeout: 5000,
        headers: {
          authorization: `bearer ${token}`,
        },
        validateStatus: ValidateErrors,
      }
    );

    if (status === 200) {
      return logs;
    }
    if (status === 404 || status === 400) {
      return 'error while fetching logs';
    }
  } catch (e) {
    console.log(e);
  }
  return 'unexpected error';
};
