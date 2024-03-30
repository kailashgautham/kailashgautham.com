import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./navitem";
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <>
        <Image
          priority
          src="/profile.jpg"
          className={utilStyles.borderCircle}
          height={100}
          width={100}
          alt=""
        />
      </>
      <nav className={`nav`}>
        <Link href={"/"}>
          <p className="logo">Kailash Gautham</p>
        </Link>
        <p>Welcome to my website :)</p>
        <br></br>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;