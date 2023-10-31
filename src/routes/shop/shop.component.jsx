import { Routes, Route } from 'react-router-dom';
import './shop.style.scss';
import CategoriesPreview from '../categories-preview/categories-preview.components';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
