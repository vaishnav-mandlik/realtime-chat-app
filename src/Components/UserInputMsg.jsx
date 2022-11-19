import { Box, Button, Image, Img, Input, Text } from "@chakra-ui/react";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const UserInputMsg = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const handleSend = async () => {
    if (file) {
      const storageRef = ref(storage, uuid());
      // const uploadTask = uploadBytesResumable(storageRef, file);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                data: Timestamp.now(),
                file: downloadURL,
              }),
            });
          } catch (err) {
            console.log(err);
          }
        });
      });
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          data: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChat", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChat", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setFile(null);
    setText("");
  };
  return (
    <Box h="40px" display="flex" alignItems="center" mt={1} ml={2}>
      <Input
        placeholder="Message"
        w="80%"
        h="30px"
        fontSize="13px"
        variant="unstyled"
        pl="10px"
        py={1}
        border="1px"
        value={text}
        onChange={(e) => setText(e.target.value)}
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
          onChange={(event) => setFile(event.target.files[0])}
        ></Input>
        <Image
          w="20 px"
          h="20px"
          ml={3}
          src="https://cdn-icons-png.flaticon.com/512/385/385487.png"
        ></Image>
      </Box>
      <Button w="50px" h="30px" ml={2} fontSize="14px" onClick={handleSend}>
        Send
      </Button>
    </Box>
  );
};

export default UserInputMsg;
