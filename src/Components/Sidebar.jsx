import { Box } from "@chakra-ui/react";
import React from "react";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

const Sidebar = () => {
  return (
    <>
      <Box flex={1}>
        <Navbar></Navbar>
        <Search />
        <Chats />
      </Box>
    </>
  );
};

export default Sidebar;
