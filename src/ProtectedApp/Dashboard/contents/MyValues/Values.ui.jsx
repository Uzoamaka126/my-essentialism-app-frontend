import React from "react";
import { Box, Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/core";
import { TopThreeValues } from "./TopThreeValues";
import { AllValues } from "./AllValues";

export function ValuesComp({
  values,
  topThreeValues,
  createTopValues,
  fetchAllValuesState,
}) {
  return (
    <Box background="#fff">
      <Tabs>
        <TabList paddingLeft="2rem">
          <Tab
            _active={{ outline: "none" }}
            _hover={{ outline: "none" }}
            _focus={{ outline: "none" }}
            marginRight="1.5rem"
          >
            All Values
          </Tab>
          <Tab
            _active={{ outline: "none" }}
            _hover={{ outline: "none" }}
            _focus={{ outline: "none" }}
          >
            My Top Three Values
          </Tab>
        </TabList>
        <TabPanels paddingTop="2rem">
          <TabPanel>
            <AllValues />
          </TabPanel>
          <TabPanel>
            <TopThreeValues
              topThreeValues={topThreeValues}
              values={values}
              createTopValues={createTopValues}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
