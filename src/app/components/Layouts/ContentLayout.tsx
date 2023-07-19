// import React from 'react';
import FooterLayout from './Footer';
import HeaderLayout from './Header';
import mainStyles from '@styles/layouts/main.module.scss';
import ContentStyles from '@styles/layouts/Content.module.scss';

export default function ContentLayout({ children }: {children: React.ReactNode}){
  return(
    <main className={mainStyles.main}>
      <HeaderLayout />
      <div className={ContentStyles.contents}>{children}</div>
      <FooterLayout />
    </main>
  )
}