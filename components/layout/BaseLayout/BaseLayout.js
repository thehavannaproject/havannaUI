import Footer from "@components/layout/footer";
import Header from "@components/layout/Header/Header";

const BaseLayout = ({ children }) => {


  return (
    <div className="relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
