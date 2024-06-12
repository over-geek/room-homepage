import MobileMenu from "./MobileMenu";
import Carousel from "./Carousel";

const Header = () => {
  return (
    <>
      <MobileMenu />
      <div className="header">
        <Carousel />
      </div>
    </>
  );
}

export default Header;