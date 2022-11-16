import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      px={2}
      h="50px"
      border="1px"
      alignItems="center"
    >
      <Box>
        <Text
          fontSize="x"
          fontWeight="900"
          fontFamily="cursive"
          color="#6B62FF"
        >
          Chat App
        </Text>
      </Box>
      <Box display="flex">
        <Image
          w="25px"
          h="25px"
          borderRadius="full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
        ></Image>
        <Text
          fontFamily="revert"
          fontSize="12px"
          ml={1}
          mt={1}
          fontWeight="600"
        >
          Name
        </Text>
        <Button
          borderRadius={30}
          h="25px"
          w="50px"
          fontSize="12px"
          ml={2}
          fontWeight="400"
          onClick={() => signOut(auth)}
        >
          LogOut
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
