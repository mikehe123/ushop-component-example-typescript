import * as S from "./S.LayoutGlobal";
import Footer from "@components/layout/footer/Footer";
import Head from "next/head";
interface LayoutGloablProps {
  children: React.ReactNode;
}

const LayoutGloabl: React.FC<LayoutGloablProps> = ({ children }) => {
  return (
    <S.Container>
      <Head>
        <title>UShop</title>
      </Head>
      {children}
      <Footer />
    </S.Container>
  );
};

export default LayoutGloabl;
