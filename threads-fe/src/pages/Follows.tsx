// import { FollowCard } from "@/features/follow";
// import { API } from "@/libs/api";
// import { GET_FOLLOW, SETFOLLOW_STATE } from "@/stores/rootReducer";
// import { RootState } from "@/stores/types/rootState";
// import {
//   Avatar,
//   Box,
//   Button,
//   Flex,
//   Heading,
//   Tab,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Tabs,
//   Text,
// } from "@chakra-ui/react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// export default function Follows() {

//   const dispatch = useDispatch();

//   const followState = useSelector((state: RootState) => state.follow.followState);
//   const dataMe = useSelector((state:RootState)=>state.dataKuCombine.name)

//   const follows = useSelector((state: RootState) => state.follow.follows);

//   async function getFollowData() {
//     const response = await API.get(`/follows?type=${followState}`);
//     dispatch(GET_FOLLOW(response.data));
//   }

//   useEffect(() => {
//     getFollowData();
//   }, [followState]);

//   return (
//     <>
//       <Box display={"flex"} justifyContent={"center"}>
//         <Tabs isFitted variant="enclosed" width="600px" marginTop={"20px"}>
//           <TabList mb="1em">
//             <Tab onClick={() => dispatch(GET_FOLLOW("followers"))}>
//               Followers
//             </Tab>
//             <Tab onClick={() => dispatch(SETFOLLOW_STATE("followings"))}>
//               Followings
//             </Tab>
//           </TabList>

//           <TabPanels>
//             <TabPanel>
//               {/* 1 */}
//               <Flex
//                 mt={"10px"}
//                 flex="1"
//                 gap="4"
//                 alignItems="center"
//                 flexWrap="wrap"
//               >
//                 <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
//                   <Avatar
//                     objectFit={"cover"}
//                     name="Segun Adebayo"
//                     src="https://images.unsplash.com/photo-1687360441205-807780a8e5db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
//                   />
//                   <Box>
//                     <Heading fontSize={"sm"}>Amelia Smith</Heading>
//                     <Text fontSize={"sm"} color={"grey"}>
//                       @Amelia Smith
//                     </Text>
//                   </Box>
//                 </Flex>
//                 <Button
//                   colorScheme="#5272F2"
//                   type="submit"
//                   borderRadius={"20px"}
//                   bg={"cyan.400"}
//                   color={"white"}
//                 >
//                   Follow
//                 </Button>
//               </Flex>
//               {/* 2 */}
//               <Flex
//                 mt={"20px"}
//                 flex="1"
//                 gap="4"
//                 alignItems="center"
//                 flexWrap="wrap"
//               >
//                 <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
//                   <Avatar
//                     objectFit={"cover"}
//                     name="Segun Adebayo"
//                     src="https://images.unsplash.com/photo-1682695794947-17061dc284dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
//                   />
//                   <Box>
//                     <Heading fontSize={"sm"}>Ethan Johnson</Heading>
//                     <Text fontSize={"sm"} color={"grey"}>
//                       @Ethan Johnson
//                     </Text>
//                   </Box>
//                 </Flex>
//                 <Button
//                   colorScheme="#5272F2"
//                   type="submit"
//                   borderRadius={"20px"}
//                   bg={"cyan.400"}
//                   color={"white"}
//                 >
//                   Follow
//                 </Button>
//               </Flex>
//               {/* 3 */}
//               <Flex
//                 mt={"20px"}
//                 flex="1"
//                 gap="4"
//                 alignItems="center"
//                 flexWrap="wrap"
//               >
//                 <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
//                   <Avatar
//                     objectFit={"cover"}
//                     name="Segun Adebayo"
//                     src="https://images.unsplash.com/photo-1687360440102-78d15c3e5045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
//                   />
//                   <Box>
//                     <Heading fontSize={"sm"}>Olivia Brown</Heading>
//                     <Text fontSize={"sm"} color={"grey"}>
//                       @Olivia Brown
//                     </Text>
//                   </Box>
//                 </Flex>
//                 <Button
//                   colorScheme="#5272F2"
//                   type="submit"
//                   borderRadius={"20px"}
//                   bg={"cyan.400"}
//                   color={"white"}
//                 >
//                   Follow
//                 </Button>
//               </Flex>
//               <Flex
//                 mt={"20px"}
//                 flex="1"
//                 gap="4"
//                 alignItems="center"
//                 flexWrap="wrap"
//               >
//                 <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
//                   <Avatar
//                     objectFit={"cover"}
//                     name="Segun Adebayo"
//                     src="https://c4.wallpaperflare.com/wallpaper/12/1008/45/earth-4k-best-desktop-download-wallpaper-thumb.jpg"
//                   />
//                   <Box>
//                     <Heading fontSize={"sm"}>Olivia Brown</Heading>
//                     <Text fontSize={"sm"} color={"grey"}>
//                       @Olivia Brown
//                     </Text>
//                   </Box>
//                 </Flex>
//                 <Button
//                   colorScheme="#5272F2"
//                   type="submit"
//                   borderRadius={"20px"}
//                   bg={"cyan.400"}
//                   color={"white"}
//                 >
//                   Follow
//                 </Button>
//               </Flex>
//               <Flex
//                 mt={"20px"}
//                 flex="1"
//                 gap="4"
//                 alignItems="center"
//                 flexWrap="wrap"
//               >
//                 <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
//                   <Avatar
//                     objectFit={"cover"}
//                     name="Segun Adebayo"
//                     src="https://c4.wallpaperflare.com/wallpaper/224/829/129/digital-digital-art-artwork-illustration-simple-hd-wallpaper-thumb.jpg"
//                   />
//                   <Box>
//                     <Heading fontSize={"sm"}>Olivia Brown</Heading>
//                     <Text fontSize={"sm"} color={"grey"}>
//                       @Olivia Brown
//                     </Text>
//                   </Box>
//                 </Flex>
//                 <Button
//                   colorScheme="#5272F2"
//                   type="submit"
//                   borderRadius={"20px"}
//                   bg={"cyan.400"}
//                   color={"white"}
//                 >
//                   Follow
//                 </Button>
//               </Flex>
//               <Flex
//                 mt={"20px"}
//                 flex="1"
//                 gap="4"
//                 alignItems="center"
//                 flexWrap="wrap"
//               >
//                 <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
//                   <Avatar
//                     objectFit={"cover"}
//                     name="Segun Adebayo"
//                     src="https://c4.wallpaperflare.com/wallpaper/135/692/935/astronaut-space-black-background-artwork-hd-wallpaper-thumb.jpg"
//                   />
//                   <Box>
//                     <Heading fontSize={"sm"}>Olivia Brown</Heading>
//                     <Text fontSize={"sm"} color={"grey"}>
//                       @Olivia Brown
//                     </Text>
//                   </Box>
//                 </Flex>
//                 <Button
//                   colorScheme="#5272F2"
//                   type="submit"
//                   borderRadius={"20px"}
//                   bg={"cyan.400"}
//                   color={"white"}
//                 >
//                   Follow
//                 </Button>
//               </Flex>
//             </TabPanel>
//             <TabPanel>
//               {follows.map((follow, index) => (
//                 <FollowCard
//                   key={index}
//                   id={follow.id}
//                   user_id={follow.user_id}
//                   full_name={follow.full_name}
//                   username={follow.username}
//                   email={follow.email}
//                   picture={follow.picture}
//                   description={follow.description}
//                   is_followed={follow.is_followed}
//                 />
//               ))}
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </Box>
//     </>
//   );
// }
import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
// import Layoute from "./Layoute";
// import LayouteRight from "./LayoutRight";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import { API } from "../lib/Api";
import { useDispatch, useSelector } from "react-redux";
// import { GET_FOLLOW, SETFOLLOW_STATE, SET_FOLLOWERS } from "../store/rootReduc";
// import { RootState } from "../store/types/rootState";
import { useCallback, useEffect, useState } from "react";
import { API } from "@/libs/api";
import { IUser } from "@/interfaces/user";
import { RootState } from "@/stores/types/rootState";
import {
  GET_FOLLOW,
  SETFOLLOW_STATE,
  SET_FOLLOWERS,
} from "@/stores/rootReducer";
import { IFollow } from "@/interfaces/follow";
import FollowersTab from "@/components/followComponent";
// import { User } from "../interface/Thread";
const Followers = () => {
  const dispatch = useDispatch();

  const followstate = useSelector(
    (state: RootState) => state.follow.followState
  );
  const folows = useSelector((state: RootState) => state.follow.follows);
  const [followrandom, setFollowRandom] = useState<IFollow[] | undefined>(
    undefined
  );

  const followss = async () => {
    try {
      SetAuthToken(localStorage.token);
      const response = await API.get(`/followes`);
      setFollowRandom(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    followss();
  }, []);

  const getFollowing = useCallback(async () => {
    try {
      const response = await API.get(`/follow?type=${followstate}`);
      console.log(response.data);
      dispatch(GET_FOLLOW(response.data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, followstate]);

  useEffect(() => {
    getFollowing();
  }, [getFollowing, followstate]);

  const handleFollower = async (
    id: number,
    followeduserId: number,
    isFollowed: boolean
  ) => {
    try {
      if (!isFollowed) {
        const response = await API.post(`/follow`, {
          followed_user_id: followeduserId,
        });
        dispatch(SET_FOLLOWERS({ id: id, isFollowed: isFollowed }));
        console.log("berhasil follow!", response.data);
      } else {
        const response = await API.delete(`/follow/${followeduserId}`);
        dispatch(SET_FOLLOWERS({ id: id, isFollowed: isFollowed }));
        console.log("berhasil unfollow!", response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("folows", folows);
  console.log("followstate  :", followstate);
  console.log("followrandom followrandom :", followrandom);

  return (
    <Container maxW="container" display={"flex"}justifyContent={"center"}>
      <Box display={"flex"} width={"100%"} justifyContent={"space-between"}>
        <Box color={"black"} flex={"0,5"}>
          {/* <Layoute /> */}
        </Box>
        <Box color={"black"} flex={"1"}>
          <Box
            justifyContent={"space-between"}
            gap={"5px"}
            padding={"10px"}
            marginTop={"20px"}
          >
            <Heading>Followers</Heading>
            <Tabs marginTop={"20px"} w={"500px"} >
              <TabList display={"flex"} justifyContent={"space-evenly"}>
                <Tab onClick={() => dispatch(SETFOLLOW_STATE("followers"))}>
                  Followers
                </Tab>
                <Tab onClick={() => dispatch(SETFOLLOW_STATE("followings"))}>
                  Followings
                </Tab>
                <Tab
                  onClick={() =>
                    dispatch(
                      SETFOLLOW_STATE("followers")
                        ? dispatch(SETFOLLOW_STATE("followings"))
                        : dispatch(SETFOLLOW_STATE("followers"))
                    )
                  }
                >
                  Mungkin anda suka
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {/* {folows && folows.map((foll, i) =>
                                        <Box display={'flex'} justifyContent={'space-between'} marginTop={"20px"} key={i}>
                                            <Box display={'flex'} padding={"10px"}>
                                                <Avatar
                                                    width={'40px'}
                                                    height={'40px'}
                                                    src="#"
                                                    css={{
                                                        border: '2px solid white',
                                                    }}
                                                    name={foll.name}
                                                />
                                                <Box marginX={'10px'}>
                                                    <Text fontSize={'15px'}>{foll.name}</Text>
                                                    <Text fontSize={'12px'} color={'gray.500'}>@{foll.username}</Text>
                                                </Box>

                                            </Box>
                                            <Box marginRight={'5px'} marginTop={"15px"}>
                                                <Button fontSize={'10px'} border={'2px'} borderColor={'gray.400'} height={'25px'} color={'dark'} onClick={() => handleFollower(foll.id, foll.user_id, foll.is_followed)} borderRadius={'20px'} py={'3px'} background={'back'} > {foll.is_followed ? 'Unfollow' : 'Follow'}</Button>
                                            </Box>
                                        </Box>
                                    )} */}
                  <FollowersTab />
                </TabPanel>

                <TabPanel>
                  {folows &&
                    folows.map((foll, i) => (
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        marginTop={"20px"}
                        key={i}
                      >
                        <Box display={"flex"} padding={"10px"}>
                          <Avatar
                            width={"40px"}
                            height={"40px"}
                            src={`${foll.picture}`}
                            css={{
                              border: "2px solid white",
                            }}
                            name={foll.full_name}
                          />
                          <Box marginX={"10px"}>
                            <Text fontSize={"15px"}>{foll.full_name}</Text>
                            <Text fontSize={"12px"} color={"gray.500"}>
                              @{foll.username}
                            </Text>
                          </Box>
                        </Box>
                        <Box marginRight={"5px"} marginTop={"15px"}>
                          <Button
                            fontSize={"10px"}
                            border={"2px"}
                            borderColor={"gray.400"}
                            height={"25px"}
                            color={"dark"}
                            onClick={() =>
                              handleFollower(
                                foll.id,
                                foll.user_id,
                                foll.is_followed
                              )
                            }
                            borderRadius={"20px"}
                            py={"3px"}
                            background={"back"}
                          >
                            {" "}
                            {foll.is_followed ? "Unfollow" : "Follow"}
                          </Button>
                        </Box>
                      </Box>
                    ))}
                </TabPanel>
                <TabPanel>
                  {/* {folows && folows.map((foll, i) => */}
                  {/* <Box key={i}> */}
                  {followrandom &&
                    followrandom.map((usr, i) => (
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        marginTop={"20px"}
                        key={i}
                      >
                        <Box display={"flex"} padding={"10px"}>
                          <Avatar
                            width={"40px"}
                            height={"40px"}
                            src={`${usr.picture}`}
                            css={{
                              border: "2px solid white",
                            }}
                            name={usr.full_name}
                          />
                          <Box marginX={"10px"}>
                            <Text fontSize={"15px"}>{usr.full_name}</Text>
                            <Text fontSize={"12px"} color={"gray.500"}>
                              @{usr.username}
                            </Text>
                          </Box>
                        </Box>
                        {/* {folows && folows.map((foll, i) => */}
                        <Box marginRight={"5px"} marginTop={"15px"} key={i}>
                          <Button
                            fontSize={"10px"}
                            border={"2px"}
                            borderColor={"gray.400"}
                            height={"25px"}
                            color={"dark"}
                            onClick={() =>
                              handleFollower(
                                usr.id,
                                usr.user_id,
                                usr.is_followed
                              )
                            }
                            borderRadius={"20px"}
                            py={"3px"}
                            background={"back"}
                          >
                            {usr.is_followed ? "Unfollow" : "Follow"}
                          </Button>
                        </Box>
                        {/* )} */}
                      </Box>
                    ))}
                  {/* </Box> */}
                  {/* )} */}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
        <Box flex={"0.5"}>{/* <LayouteRight /> */}</Box>
      </Box>
    </Container>
  );
};

export default Followers;
function SetAuthToken(token: any) {
  throw new Error("Function not implemented.");
}
