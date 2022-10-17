import { useEffect } from 'react';
import { storage } from '../../../utils/storage';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStoreState';
import { setUser } from '../userSlice';

/**
 * Hook for handling (and dispatching from storage) user state
 * on startup. Should only be used on a parent component since it loads up the user state
 * once the app starts up.
 * @returns User
 */

export const useAuth = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getAuth = async () => {
      const user = await storage.getItem();
      if (user) {
        dispatch(setUser(user));
      }
    };
    if (!user) void getAuth();
  }, []);

  return user;
};
