import React from "react";
import { Flex } from "@chakra-ui/core";
import { Content, SideBar } from "./components";

const menuList = [
  { title: "Onboarding", url: "/get-started" },
  {
    title: "My Values",
    url: "/values",
  },
  {
    title: "Projects",
    // subItems: [
    //   { title: "Current", url: "/dashboard/projects" },
    // ],
    url: "/projects",
  },
  {
    title: "Settings",
    subItems: [
      { title: "Profile", url: "/settings/profile" },
    ],
    url: "/settings",
  },
];

export function Dashboard({
  children,
  user,
  logout,
}) {

  return (
    <>
      <Flex>
        <SideBar user={user} menuList={menuList} />
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
