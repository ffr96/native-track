import { Routes, Route } from 'react-router-native';
import { Overview, Logs, Weight, NotFound, WeightForm } from '../features';

const Private = () => {
  return (
    <Routes>
      <Route path='/' element={<Overview />} />
      <Route path='log' element={<Logs />} />
      <Route path='weight' element={<Weight />} />
      <Route path='wform' element={<WeightForm />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Private;
