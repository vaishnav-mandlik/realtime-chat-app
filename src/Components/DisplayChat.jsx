import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Messages from "./Messages";
import UserInputMsg from "./UserInputMsg";

const DisplayChat = () => {
  return (
    <Box flex={2} border="1px">
      <Box
        display="flex"
        border="1px"
        h="50px"
        alignItems="center"
        justifyContent="space-between"
        px={5}
      >
        <Text border="1px">Shweta</Text>
        <Box
          border="1px"
          display="flex"
          gap="10px"
          w="80px"
          alignItems="center"
        >
          <Image
            w="18px"
            h="18px"
            cursor="pointer"
            src="https://img.icons8.com/external-anggara-glyph-anggara-putra/64/null/external-videocall-social-media-interface-anggara-glyph-anggara-putra.png"
          />
          <Image
            w="20px"
            h="20px"
            cursor="pointer"
            src="https://img.icons8.com/sf-black-filled/64/null/add-user-group-man-man.png"
          />
          <Image
            w="20px"
            h="20px"
            cursor="pointer"
            src="https://img.icons8.com/material-outlined/64/null/more.png"
          />
        </Box>
      </Box>
      <Messages />
      <UserInputMsg />
    </Box>
  );
};

export default DisplayChat;
