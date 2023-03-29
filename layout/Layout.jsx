import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import HeaderPatternIcon from '@/assets/images/svg/patterns/header-pattern.svg';

import s from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderPatternIcon className={s.headerPatterIcon} />
      <Header className={s.header} />
      <main className={s.body}>{children}</main>
      <Footer className={s.footer} />
    </>
  );
};

export const widthLayout = (Component) => {
  return function widthLayoutComponent(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
