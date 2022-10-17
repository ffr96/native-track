import axios from 'axios';
import { TrainingLog } from '@/types/logs';

import { User } from '@/types/user';
import { baseUrl } from '@/utils/constants';
import { ValidateErrors } from '@/utils/functions';

interface LogProps extends Omit<User, 'username'> {
  logid: string;
}

/**
 * Get a single training log by logid
 * @params id, token, logid
 * @returns Traininglog
 */

export const getLog = async ({ id, token, logid }: LogProps) => {
  try {
    const { data: log, status } = await axios.get<TrainingLog>(
      `${baseUrl}/users/${id}/logs/${logid}`,
      {
        headers: {
          authorization: `bearer ${token}`,
        },
        validateStatus: ValidateErrors,
      }
    );

    if (status === 200) {
      return log;
    }
    if (status === 404 || status === 400) {
      return 'error while fetching log';
    }
  } catch (e) {
    console.log(e);
  }
  return 'unexpected error';
};
