import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../Context/AuthContext";
const Navbar = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
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
          src={currentUser.currentUser.photoURL}
        ></Image>
        <Text
          fontFamily="revert"
          fontSize="12px"
          ml={1}
          mt={1}
          fontWeight="600"
        >
          {currentUser.currentUser.displayName}
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
