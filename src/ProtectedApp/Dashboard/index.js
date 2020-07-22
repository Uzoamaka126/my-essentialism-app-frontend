import React from "react";
import { Flex } from "@chakra-ui/core";
import { Content, SideBar } from "./components";

const menuList = [
  { title: "Onboarding", url: "/dashboard/home" },
  {
    title: "My Values",
    subItems: [
      { title: "Current", url: "/dashboard/values" },
      { title: "Top Three", url: "/dashboard/values/top-three" },
    ],
    url: "/dashboard/values/me",
  },
  {
    title: "Projects",
    subItems: [
      { title: "Current", url: "/dashboard/projects" },
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

export function Dashboard({
  children,
  user,
  history,
  logout,
  userInfo,
}) {

const username = "Amaka"
  return (
    <>
      <Flex>
        <SideBar username={username} menuList={menuList} user={user} />
        <Content
          width="100%"
          height="calc(100vh -60px)"
          overflow="auto"
          position="fixed"
          paddingLeft="215px"
          backgroundColor="#fff"
          logout={logout}
          user={user}
        >
          {children}
        </Content>
      </Flex>
    </>
  );
}
