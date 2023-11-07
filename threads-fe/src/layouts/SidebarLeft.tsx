import LeftSIdeBar from "@/components/responsive/leftSIdeBar";

export default function SidebarLeftNew() {


  return (
    <>
    <LeftSIdeBar/>
      {/* <Box position={"fixed"} h={"1vh"} w={"22%"} pt={"10px"} px={"50px"}>
        <Text fontWeight={"bold"} fontSize={"40px"} color={"cyan.400"}>
          Circle
        </Text>
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
          {location.pathname === "/search" ? <BiSolidSearch style={{fontSize:"26px"}} color="#40C8FF"/> : <BsSearch color="#40C8FF" /> }
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
          ) : 
          (<BsHeart color="#40C8FF" /> )}
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
          {location.pathname==="/profile" ? (
            <CgProfile color={"#40C8FF"}/>
          ) :(
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
          w={"100%"}
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
      </Box> */}
    </>
  );
}
