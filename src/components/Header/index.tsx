import "./style.css";

import ModalNavigation from "../ModalNavigation";
import { IHeaderProps } from "../../assets/interfaces";

const Header = ({ isOpen, onClose }: IHeaderProps) => {

  return (
    <header className="header">
      <img className="logo" src="src/assets/logo.png" />
      <h2 className="menu-hamburger" onClick={onClose}>
        ☰
      </h2>
      <ModalNavigation isOpen={isOpen} onClose={onClose}/>
    </header>
  );
};

export default Header;