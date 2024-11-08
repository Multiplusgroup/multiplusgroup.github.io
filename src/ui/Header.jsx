import Navigation from "@/components/Header/Navigation";

const Header = ({ reference }) => {
  return (
    <header ref={reference}>
      <Navigation />
    </header>
  );
};

export default Header;
