import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

import logo from "../../images/logo.png";

const NavBarItem = ({ title, subitems, classprops }) => (
  <li className={`mx-4 cursor-pointer group relative ${classprops}`}>
    <a href={title.link} className="text-white">{title}</a>
    <ul className="absolute top-full right-0 white-glassmorphism w-[120px] text-left shadow-md py-2 rounded-md hidden group-hover:block">
      {subitems.map((subitem, index) => (
        <li key={index}>
          <a href={subitem.link} className="block px-4 py-2 text-white-700 hover:bg-[#1b2c4460]">
            {subitem.name}
          </a>
        </li>
      ))}
    </ul>
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center md:fixed justify-between items-center p-2 z-10 bg-[#0000002a] opacity-8">
      <div className="w-[48%]  flex-initial justify-center  items-center">
        <img src={logo} alt="logo" className="w-33 cursor-pointer lgo" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <a href="https://photoaid.com/ru/ru/tools/darken">
          <li className="mx-4 cursor-pointer group relative">Discuzz Network</li>
        </a>
        {[
          {
            title: "Socials",
            subitems: [
              { name: "Twitter", link: "https://twitter.com" },
              { name: "Instagram", link: "https://instagram.com" },
              { name: "Facebook", link: "https://facebook.com" },
            ],
          },
          {
            title: "Token",
            subitems: [
              { name: "Tokenomics", link: "https://tokenomics.com" },
              { name: "Sale", link: "https://tokensale.com" },
              { name: "Discuzz Network", link: "https://tokenwallet.com" },
            ],
          },
          {
            title: "Docx",
            subitems: [
              { name: "Roadmap", link: "https://whitepaper.com" },
              { name: "Tutorial", link: "https://technicaldocument.com" },
              { name: "FAQ", link: "https://faq.com" },
            ],
          },
          {
            title: "Wallets",
            subitems: [
              { name: "MetaMask", link: "https://metamask.com" },
              { name: "Trust Wallet", link: "https://trustwallet.com" },
              { name: "Ledger Live", link: "https://ledgerlive.com" },
            ],
          },
        ].map((item, index) => (
          <NavBarItem key={item.title + index} title={item.title} subitems={item.subitems} />
        ))}
        <li className="mx-4 py-2 px-4 rounded-full cursor-pointer group relative undefined">
          <SignedOut >
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </li>

      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2 flex justify-between items-center"><AiOutlineClose onClick={() => setToggleMenu(false)} />
              <div className="mr-2 mx-4 cursor-pointer group relative undefined">
                <SignedOut >
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div></li>

            {[
              {
                title: "Socials",
                subitems: [
                  { name: "Twitter", link: "https://twitter.com" },
                  { name: "Instagram", link: "https://instagram.com" },
                  { name: "Facebook", link: "https://facebook.com" },
                ],
              },
              {
                title: "Token",
                subitems: [
                  { name: "Tokenomics", link: "https://twitter.com" },
                  { name: "Sale", link: "https://instagram.com" },
                  { name: "Discuzz Network", link: "https://facebook.com" },
                ],
              },
              {
                title: "Docx",
                subitems: [
                  { name: "Roadmap", link: "https://whitepaper.com" },
                  { name: "Tutorial", link: "https://technicaldocument.com" },
                  { name: "FAQ", link: "https://faq.com" },
                ],
              },
              {
                title: "Wallets",
                subitems: [
                  { name: "MetaMask", link: "https://metamask.com" },
                  { name: "Trust Wallet", link: "https://trustwallet.com" },
                  { name: "Ledger Live", link: "https://ledgerlive.com" },
                ],
              },
            ].map((item, index) => (
              <NavBarItem key={item.title + index} title={item.title} subitems={item.subitems} classprops="my-2 text-lg" />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;