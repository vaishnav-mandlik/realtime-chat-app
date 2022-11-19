import { Box, Image, Text } from "@chakra-ui/react";
import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const [chats, setChats] = useState([]);
  useEffect(() => {
    const getUsers = () => {
      const unsub = onSnapshot(doc(db, "userChat", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      console.log(chats);
      return () => {
        unsub();
      };
    };

    currentUser.uid && getUsers();
  }, [currentUser.uid]);

  const onClickHandler = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  console.log(Object.entries(chats));
  return (
    <Box
      h="400px"
      borderRight="2px"
      borderRadius="0px 0px 0px 20px"
      borderColor="gray.200"
    >
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <Box
            key={chat[0]}
            display="flex"
            flexDirection="row"
            alignItems="center"
            p="10px"
            gap="10px"
            cursor="pointer"
            _hover={{ backgroundColor: "gray.200", borderRadius: "10px" }}
            onClick={() => onClickHandler(chat[1].userInfo)}
          >
            <Image
              w="30px"
              h="30px"
              borderRadius="full"
              src={chat[1].userInfo.photoURL}
            ></Image>
            <Box>
              <Text fontFamily="revert" fontSize="14px" fontWeight="600">
                {chat[1].userInfo.displayName}
              </Text>
              <Text fontSize="11px" mt={-1}>
                {chat[1].lastMessage?.text}
              </Text>
            </Box>
          </Box>
        ))}
    </Box>
  );
};

export default Chats;
