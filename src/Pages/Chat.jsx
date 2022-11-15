import { Box } from "@chakra-ui/react";
import React from "react";

import DisplayChat from "../Components/DisplayChat";
import Sidebar from "../Components/Sidebar";

const Chat = () => {
  return (
    <Box
      display="flex"
      w="full"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="880px"
        h="500px"
        borderRadius="30px"
        boxShadow="2xl"
        py="20px"
        display="flex"
        flexDirection="row"
      >
        <Sidebar />
        <DisplayChat />
      </Box>
    </Box>
  );
};

export default Chat;
