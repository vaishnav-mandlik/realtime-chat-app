import { Box, Image, Input, Text } from "@chakra-ui/react";
import React from "react";

const Search = () => {
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
        ></Input>
      </Box>
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
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
        ></Image>
        <Text fontFamily="revert" fontSize="14px">
          Shweta
        </Text>
      </Box>
    </Box>
  );
};

export default Search;
