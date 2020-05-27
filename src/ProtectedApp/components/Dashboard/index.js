import React from "react";
import { getToken } from "../../../Utilities/authenticationChecker";
import { Flex } from "@chakra-ui/core";
import { Content, SideBar, Header } from "./components";

const menuList = [
  { title: "Onboarding", url: "/dashboard/home" },
  { title: "Values", url: "/dashboard/values" },
  {
    title: "My Values",
    subItems: [
      { title: "Current", url: "/dashboard/values/current" },
      { title: "Top Three", url: "/dashboard/values/me/top-three" },
    ],
    url: "/dashboard/values/me",
  },
  {
    title: "Projects",
    subItems: [
      { title: "Current", url: "/dashboard/projects" },
      // { title: "All", url: "/dashboard/projects/all" },
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
  },
];

export function Dashboard({ children, onLogout, user, profile }) {
  return (
    <>
      <Flex>
        <SideBar menuList={menuList} user={user} />
        <Content
          width="100%"
          height="calc(100vh -60px)"
          overflow="auto"
          position="fixed"
          paddingLeft="215px"
          backgroundColor="#fff"
          logout={onLogout}
          user={user}
          profile={profile}
        >
          {children}
        </Content>
      </Flex>
    </>
  );
}
