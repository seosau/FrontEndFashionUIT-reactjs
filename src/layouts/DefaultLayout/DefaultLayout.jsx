import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Backtop from "../../components/Backtop/Backtop";
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Backtop />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
