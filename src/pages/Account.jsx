import React from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import CreateUser from "../Components/AccountPage/CreateUser";
import LoginUser from "../Components/AccountPage/LoginUser";

const Account = () => {
  return (
    <Box maxW="md" color="#262626" margin="auto" marginY="30px" px="20px">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Sign In</Tab>
          <Tab>Create Account</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <LoginUser />
          </TabPanel>
          <TabPanel p="0">
            <CreateUser />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Account;
