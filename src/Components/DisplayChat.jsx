import { Box, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ChatContext } from "../Context/ChatContext";
import Messages from "./Messages";
import UserInputMsg from "./UserInputMsg";

const DisplayChat = () => {
  const { data } = useContext(ChatContext);
  console.log(data);
  return (
    <Box flex={2}>
      <Box
        display="flex"
        bgColor="gray.200"
        borderRadius="0px 20px 0px 0px"
        h="50px"
        alignItems="center"
        justifyContent="space-between"
        px={5}
      >
        <Text>{data.user.displayName}</Text>
        <Box display="flex" gap="10px" w="80px" alignItems="center">
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
