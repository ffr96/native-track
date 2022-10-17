import { useNavigate } from 'react-router-native';
import { useEffect } from 'react';

export const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  });
  return <></>;
};
