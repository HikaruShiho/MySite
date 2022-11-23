import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
