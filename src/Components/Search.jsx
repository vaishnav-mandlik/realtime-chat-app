import { Box, Image, Input, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context/AuthContext";
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);
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

  const handleSelect = async () => {
    // console.log("49");
    const combineId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combineId));
      console.log(res);
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combineId), { messages: [] });
        await updateDoc(doc(db, "userChat", currentUser.uid), {
          [combineId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChat", user.uid), {
          [combineId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }
    setUser(null);
    setUsername("");
  };

  return (
    <Box borderRight="2px" borderColor="gray.200">
      <Box>
        <Input
          placeholder="Search User Name"
          w="full"
          h="30px"
          fontSize="13px"
          variant="unstyled"
          pl="10px"
          py={1}
          value={username}
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
          onClick={handleSelect}
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
