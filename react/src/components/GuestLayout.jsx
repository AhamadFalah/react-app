import React from 'react';
import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
  return (
    <div>
        For Guest Users Only
      <Outlet />
    </div>
  );
};

export default GuestLayout;
