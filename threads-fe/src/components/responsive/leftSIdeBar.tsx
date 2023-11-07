"use client";

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Button,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { BiSolidSearch } from "react-icons/bi";

import {
  BsHeart,
  BsHouseDoor,
  BsSearch,
  BsHouseDoorFill,
} from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdPersonOutline } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AUTH_LOGOUT } from "@/stores/rootReducer";

export default function LeftSIdeBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(AUTH_LOGOUT());
    navigate("/auth/login");
    console.log("Logout berhasil");
  };
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")} // not
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")} // not
      w={{ base: "full", md: "xs" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="6xl"
          fontFamily="poppins"
          color={"cyan.400"}
          fontWeight="bold"
        >
          circle
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box ms={5}>
        <Button
          pl={0}
          onClick={() => navigate("/")}
          variant={"none"}
          display={"flex"}
          flexDirection={"row"}
          gap={"3"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"grey.900"}
          mb={"20px"}
          mt={"20px"}
        >
          {location.pathname === "/" ? (
            <BsHouseDoorFill color="#40C8FF" />
          ) : (
            <BsHouseDoor color="#40C8FF" />
          )}{" "}
          Home
        </Button>
        <Button
          pl={0}
          variant={"none"}
          onClick={() => navigate("/search")}
          display={"flex"}
          flexDirection={"row"}
          gap={"3"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"grey.900"}
          mb={"20px"}
        >
          {location.pathname === "/search" ? (
            <BiSolidSearch style={{ fontSize: "26px" }} color="#40C8FF" />
          ) : (
            <BsSearch color="#40C8FF" />
          )}
          Search
        </Button>

        <Button
          pl={0}
          variant={"none"}
          onClick={() => navigate("/follows")}
          display={"flex"}
          flexDirection={"row"}
          gap={"3"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"grey.900"}
          mb={"20px"}
        >
          {location.pathname === "/follows" ? (
            <FaHeart color="#40C8FF" />
          ) : (
            <BsHeart color="#40C8FF" />
          )}
          follows
        </Button>

        <Button
          pl={0}
          variant={"none"}
          onClick={() => navigate("/profile")}
          display={"flex"}
          flexDirection={"row"}
          gap={"3"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"grey.900"}
          mb={"20px"}
        >
          {location.pathname === "/profile" ? (
            <CgProfile color={"#40C8FF"} />
          ) : (
            <MdPersonOutline color="#40C8FF" />
          )}
          Profile
        </Button>
        <Button
          mt={"20px"}
          colorScheme="#5272F2"
          borderStyle={"none"}
          color={"white"}
          bg={"#40C8FF"}
          w={"96%"}
          borderRadius={"20px"}
        >
          Create Post
        </Button>
        <Text
          onClick={Logout}
          cursor={"pointer"}
          mt={"200px"}
          display={"flex"}
          flexDirection={"row"}
          gap={"3"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"grey.900"}
          mb={"20px"}
        >
          <CiLogout color="#40C8FF" /> Logout
        </Text>
      </Box>
    </Box>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};
