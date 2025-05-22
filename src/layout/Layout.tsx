import Header from '@/shared/components/Header/Header';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
