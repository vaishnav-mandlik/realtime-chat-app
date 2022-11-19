import { Box } from "@chakra-ui/react";
import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../Context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    console.log(unSub);
    return () => {
      unSub();
    };
  }, [data.chatId]);
  console.log(messages);
  return (
    <Box h="375px" overflow="scroll">
      {messages?.map(
        (msg) => (
          <Message message={msg} key={msg.id} />
        )
        // console.log(msg)
      )}
    </Box>
  );
};

export default Messages;
