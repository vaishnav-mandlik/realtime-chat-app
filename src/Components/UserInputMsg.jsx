import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React from "react";

const UserInputMsg = () => {
  return (
    <Box h="40px" border="1px" display="flex" alignItems="center">
      <Input
        placeholder="Message"
        w="80%"
        h="30px"
        fontSize="13px"
        variant="unstyled"
        pl="10px"
        py={1}
        border="1px"
      ></Input>
      <Box display="flex">
        <Input
          // border="1px"
          type="file"
          accept="image/*"
          position="absolute"
          ml={2}
          w="5px"
          aria-hidden="true"
          opacity="0"
          cursor="pointer"
        ></Input>
        <Image
          w="20 px"
          h="20px"
          ml={3}
          src="https://cdn-icons-png.flaticon.com/512/385/385487.png"
        ></Image>
      </Box>
      <Button w="50px" h="30px" ml={2} fontSize="14px">
        Send
      </Button>
    </Box>
  );
};

export default UserInputMsg;
