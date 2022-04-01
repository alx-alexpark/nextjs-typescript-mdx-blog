import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
// import Navigation from './Navigation';
// import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://parkalex.tech';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            {/* <Navigation />
            <ThemeSwitch /> */}
          </div>
        </div>
      </header>
      <main>
        <div className="mx-auto">{children}</div>
      </main>
    </>
  );
};

export default Layout;
