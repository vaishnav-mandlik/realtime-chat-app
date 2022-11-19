import React, { useState } from "react";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";

import ChatSvg from "../Icons/ChatSvg.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log("object");
      navigate("/");
      console.log("first");
      // .then((userCredential) => {
      //   // Signed in
      //   const user = userCredential.user;
      //   console.log(user);
      //   // ...
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  const onChangeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

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
                name="email"
                value={data.email}
                placeholder="Email"
                onChange={onChangeHandler}
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
                name="password"
                value={data.password}
                onChange={onChangeHandler}
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
                onClick={submitHandler}
              >
                Login
              </Button>
            </Box>
            <Flex mt={3}>
              <Text color="black" mr={2}>
                Create Account
              </Text>
              <Link to="/signup" fontStyle="italic" color="#6B62FF">
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
