import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import CreateUser from "../Components/AccountPage/CreateUser";
import LoginUser from "../Components/AccountPage/LoginUser";

const Account = () => {
  return (
    <Box
      maxW={["md", "md", "md", "md", "4xl", "4xl"]}
      color="#262626"
      margin="auto"
      marginY="30px"
    >
      <SimpleGrid columns={[1, 1, 1, 1, 2, 2]} gap={5}>
        {/* Create Account1 Form */}
        <CreateUser />

        {/* Login Form */}
        <LoginUser />
      </SimpleGrid>
    </Box>
  );
};

export default Account;
