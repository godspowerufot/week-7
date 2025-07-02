import { FC } from 'react';
import { Props } from '../models';
import Header from './Header';

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className={'flex min-h-screen w-full min-w-[640px] flex-col justify-center'}>
        <Header />
        <main className={'mx-auto flex min-h-full w-full flex-col p-2'}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
