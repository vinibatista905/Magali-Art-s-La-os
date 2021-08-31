import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  LogoSpan,
} from "./NavbarElements";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#fff" }}> */}
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu} >
              <NavIcon />
              Magali <LogoSpan>Art's</LogoSpan> Laços
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/about">Sobre</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/products">Produtos</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/contact">
                    <Button primary>Contato</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/contato">
                    <Button fontBig primary>
                      Contato
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default Navbar;
