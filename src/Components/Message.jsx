import { Box, Image, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";

const Message = ({ message }) => {
  const [owner, setOwner] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <Box
      display="flex"
      mt={3}
      ml={3}
      style={{
        flexDirection:
          message.senderId === currentUser.uid ? "row-reverse" : "",
        marginRight: "15px",
      }}
    >
      <Box>
        <Image
          w="30px"
          h="30px"
          borderRadius="full"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
        ></Image>
      </Box>
      <Box ml={1} maxW="60%">
        <Text
          fontSize="14px"
          backgroundColor="black"
          color="white"
          px={3}
          py={1}
          borderRadius="0px 8px 8px 8px"
          style={{
            backgroundColor: owner === true ? "orange" : "",
            marginRight: "5px",
          }}
        >
          {message.text}
        </Text>
        {message.file && (
          <Image
            w="100px"
            h="130px"
            mt={2}
            borderRadius="10px"
            src={message?.file}
          ></Image>
        )}
      </Box>
    </Box>
  );
};

export default Message;
