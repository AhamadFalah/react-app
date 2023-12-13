import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div>
      Default Layout
      <Outlet/>
    </div>
  );
};

export default DefaultLayout;
