import { Box } from "@chakra-ui/react";
import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <Box border="1px" h="368px">
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
    </Box>
  );
};

export default Messages;
