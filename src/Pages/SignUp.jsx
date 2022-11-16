import React, { useState } from "react";
import { Box, Button, Flex, Image, Input, Link, Text } from "@chakra-ui/react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import ChatSvg from "../Icons/ChatSvg.svg";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [file, setFile] = useState();
  const handleFile = (event) => {
    setFile(event.target.files[0]);
    // console.log(event.target.files[0]);
  };
  const [error, setError] = useState(false);
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const storageRef = ref(storage, data.username);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName: data.username,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              displayName: data.username,
              uid: res.user.uid,
              email: data.email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChat", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
          }
        });
      });
    } catch (err) {
      setError(true);
      console.log(err);
    }

    // console.log(data);
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
              Create New Account
            </Text>
            <Box mt={3}>
              <Input
                w="full"
                h="40px"
                variant="flushed"
                type="text"
                name="username"
                value={data.username}
                onChange={onChangeHandler}
                placeholder="UserName"
                borderColor="#CCCCCC"
                focusBorderColor="blackAlpha.900"
              ></Input>
            </Box>
            <Box mt={3}>
              {" "}
              <Input
                w="full"
                h="40px"
                variant="flushed"
                type="email"
                name="email"
                value={data.email}
                onChange={onChangeHandler}
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
                name="password"
                value={data.password}
                onChange={onChangeHandler}
                placeholder="Password"
                borderColor="#CCCCCC"
                focusBorderColor="blackAlpha.900"
              ></Input>
            </Box>
            <Box mt={5} display="flex">
              <Text fontSize="16px" fontFamily="monospace">
                Upload Avatar
              </Text>

              <Input
                // border="1px"
                type="file"
                accept="image/*"
                position="absolute"
                ml={36}
                w="20px"
                aria-hidden="true"
                onChange={handleFile}
                opacity="0"
                cursor="pointer"
              ></Input>
              <Image
                w="30px"
                h="30px"
                ml={5}
                src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png"
              ></Image>
            </Box>

            <Box mt={7}>
              <Button
                w="full"
                backgroundColor="#6B62FF"
                color="white"
                borderRadius={10}
                _hover={{ bg: "#6B62FF" }}
                type="submit"
                onClick={submitHandler}
              >
                Submit
              </Button>
            </Box>
            {error && <Text>Somthing Went Wrong</Text>}
            <Flex mt={3}>
              <Text color="black" mr={2}>
                Alredy Have Account
              </Text>
              <Link fontStyle="italic" color="#6B62FF">
                Login
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box p={5} w="440px">
          <Image src={ChatSvg} mt="80px"></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
