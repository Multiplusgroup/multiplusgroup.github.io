import { NavLink as BaseNavLink } from "react-router-dom";

const NavigationLink = ({ to, className = "", target, children }) => {
  return (
    <BaseNavLink to={to} className={className} target={target}>
      {children}
    </BaseNavLink>
  );
};

export default NavigationLink;
