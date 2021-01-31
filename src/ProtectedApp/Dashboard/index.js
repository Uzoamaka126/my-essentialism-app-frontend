import React from "react";
import { Flex } from "@chakra-ui/core";
import { Content, SideBar } from "./components";

const menuList = [
  { title: "Onboarding", url: "/dashboard/home" },
  {
    title: "My Values",
    url: "/dashboard/values",
  },
  {
    title: "Projects",
    // subItems: [
    //   { title: "Current", url: "/dashboard/projects" },
    // ],
    url: "/dashboard/projects",
  },
  {
    title: "Settings",
    subItems: [
      { title: "Profile", url: "/dashboard/settings/profile" },
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

  return (
    <>
      <Flex>
        <SideBar username={user && user.username} menuList={menuList} user={user} />
        <Content
          logout={logout}
          user={user}
        >
          {children}
        </Content>
      </Flex>
    </>
  );
}
