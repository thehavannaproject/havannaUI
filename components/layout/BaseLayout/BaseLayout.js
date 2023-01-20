import Footer from "../Footer";
import Header from "../Header/Header";

const BaseLayout = ({ children }) => {
  return (
    <div className="relative" >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
