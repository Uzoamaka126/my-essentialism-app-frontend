import React from "react";
import { getToken } from "../../../Utilities/authenticationChecker";
import { Flex } from "@chakra-ui/core";
import { Header, Content, SideBar} from './components';

const menuList = [
  { title: "Onboarding", url: "/dashboard/home" },
  { title: "Values", url: "/dashboard/values" },
  {
    title: "My Values",
    subItems: [
      { title: "Current", url: "/dashboard/values/me/current" },
      { title: "Top Three", url: "/dashboard/values/me/top-three" },
    ],
    url: "/dashboard/values/me",
  },
  {
    title: "Projects",
    subItems: [
      { title: "Current", url: "/dashboard/projects/current" },
      { title: "All", url: "/dashboard/projects/all" },
    ],
    url: "/dashboard/projects",
  },
  {
    title: "Settings",
    subItems: [
      { title: "Profile", url: "/dashboard/settings/profile" },
      { title: "Change Password", url: "/dashboard/settings/password" },
    ],
    url: "/dashboard/settings",
  }
];

export function Dashboard({ children }) {
  const token = getToken();
  console.log(token);

  return (
    <>
      <Header />
      <Flex>
        <SideBar menuList={menuList} />
        <Content 
          width="100%"
          height="100vh"
          overflow="auto"
          position="fixed"
          paddingLeft="208px"
          backgroundColor="#fff"
        >
          {children}
        </Content>
      </Flex>
    </>
  );
}
