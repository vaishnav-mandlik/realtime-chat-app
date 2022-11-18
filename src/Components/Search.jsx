import { Box, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { async } from "@firebase/util";
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const serchUser = async () => {
    // Create a query against the collection.
    console.log(username);

    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    console.log(q);
    try {
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(doc, "doc");
      });
      console.log(querySnapshot);
    } catch (error) {
      setErr(true);
      console.log("error at 27");
    }
  };
  const KeyDonHandler = (e) => {
    e.code === "Enter" && serchUser();
  };
  return (
    <Box>
      <Box>
        <Input
          placeholder="Search User Name"
          w="full"
          h="30px"
          fontSize="13px"
          variant="unstyled"
          pl="10px"
          py={1}
          onChange={(event) => setUsername(event.target.value)}
          onKeyDown={KeyDonHandler}
        ></Input>
      </Box>
      {err && <Text>User Not Found </Text>}
      {user && (
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          p="10px"
          gap="10px"
          cursor="pointer"
        >
          <Image
            w="30px"
            h="30px"
            borderRadius="full"
            src={user.photoURL}
          ></Image>
          <Text fontFamily="revert" fontSize="14px">
            {user.displayName}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Search;
