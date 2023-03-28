import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import s from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
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
