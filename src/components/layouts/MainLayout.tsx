import { ReactNode } from 'react';

import Sidebar from './Sidebar';

type MainLayoutProps = {
  children: ReactNode;
  className?: string;
};
const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <div className={`flex gap-4 max-w-[1440px] w-full ${className}`}>
      <Sidebar />
      <main className="flex-grow ml-[300px] float-right">{children}</main>
    </div>
  );
};

export default MainLayout;
