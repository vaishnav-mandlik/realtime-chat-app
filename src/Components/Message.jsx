import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Message = () => {
  const [owner, setOwner] = useState(false);

  return (
    <Box
      display="flex"
      mt={3}
      ml={3}
      style={{
        flexDirection: owner === true ? "row-reverse" : "",
        marginRight: "15px",
      }}
    >
      <Box>
        <Image
          w="30px"
          h="30px"
          borderRadius="full"
          src="https://image1.masterfile.com/getImage/NjAwLTAyNzAwNzExZW4uMDAwMDAwMDA=AKe56J/600-02700711en_Masterfile.jpg"
        ></Image>
        <Text fontSize="8px" mt={1}>
          Just Now
        </Text>
      </Box>
      <Box ml={1} maxW="60%">
        <Text
          fontSize="14px"
          backgroundColor="black"
          color="white"
          px={3}
          py={1}
          borderRadius="0px 8px 8px 8px"
          style={{
            backgroundColor: owner === true ? "orange" : "",
            marginRight: "5px",
          }}
        >
          Hello
        </Text>
        <Image
          w="100px"
          h="130px"
          mt={2}
          borderRadius="10px"
          src="https://img.freepik.com/free-vector/illustration-business-agreement-concept_53876-43716.jpg?w=2000"
        ></Image>
      </Box>
    </Box>
  );
};

export default Message;
