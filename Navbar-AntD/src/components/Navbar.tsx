import React from "react";
import { Menu, Input } from "antd";
import Logo from "./Logo";
const { Search } = Input;

const Navbar: React.FC = () => {
  return (
    <div className=" w-full h-[70px] border">
      <div className=" flex justify-between items-center h-full max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Navigation Buttons */}
        <Menu
          theme="light"
          mode="horizontal"
          itemType="link"
          className=" bg-transparent border-none"
        >
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
        </Menu>

        {/* Search Input and Button */}
        <div className="flex items-center">
          <Search placeholder="Search" className="" />
          {/* <Button type="primary">Search</Button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
