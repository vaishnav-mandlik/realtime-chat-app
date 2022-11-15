import React from "react";
import { Box, Button, Flex, Image, Input, Link, Text } from "@chakra-ui/react";

import ChatSvg from "../Icons/ChatSvg.svg";
const Login = () => {
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
        h="auto"
        borderRadius="30px"
        boxShadow="2xl"
        py="50px"
        display="flex"
        flexDirection="row"
      >
        <Box w="440px" p={10}>
          <Box textAlign="center">
            <Text
              fontSize="3xl"
              fontWeight="900"
              fontFamily="cursive"
              mb={7}
              color="#6B62FF"
            >
              Chat App
            </Text>
          </Box>
          <Box mt={3}>
            <Text fontSize="25px" fontFamily="monospace">
              Welcome Back
            </Text>

            <Box mt={3}>
              <Input
                w="full"
                h="40px"
                variant="flushed"
                type="email"
                placeholder="Email"
                borderColor="#CCCCCC"
                focusBorderColor="blackAlpha.900"
              ></Input>
            </Box>
            <Box mt={3}>
              <Input
                w="full"
                h="40px"
                variant="flushed"
                type="password"
                placeholder="Password"
                borderColor="#CCCCCC"
                focusBorderColor="blackAlpha.900"
              ></Input>
            </Box>

            <Box mt={7}>
              <Button
                w="full"
                backgroundColor="#6B62FF"
                color="white"
                borderRadius={10}
                _hover={{ bg: "#6B62FF" }}
              >
                Login
              </Button>
            </Box>
            <Flex mt={3}>
              <Text color="black" mr={2}>
                Create Account
              </Text>
              <Link fontStyle="italic" color="#6B62FF">
                Sign Up
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box p={5} w="440px">
          <Image src={ChatSvg} mt="30px"></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
