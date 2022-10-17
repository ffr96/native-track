import { Routes, Route } from 'react-router-native';
import { Login, Register, NotFound } from '../features/';

const Public = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Public;
