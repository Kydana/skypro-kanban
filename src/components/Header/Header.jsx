import PopUser from "../PopUser/PopUser";
import { useState } from "react";

function Header({addCard}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header class="header">
      <div class="container">
        <div class="header__block">
          <div class="header__logo _show _light">
            <a href="" target="_self">
              <img src=".assets/images/logo.png" alt="logo"/>
            </a>
          </div>
          <div class="header__logo _dark">
            <a href="" target="_self">
              <img src=".assets/images/logo_dark.png" alt="logo"/>
            </a>
          </div>
          <nav class="header__nav">
            <button class="header__btn-main-new _hover01" onClick={addCard}>
                Создать новую задачу
            </button>
            <span onClick={() => setIsOpen((prev) => !prev)} class="header__user _hover02">
              Ivan Ivanov
            </span>
            {isOpen && <PopUser/>}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
