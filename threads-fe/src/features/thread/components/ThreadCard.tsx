import { IThreadCard } from "@/interfaces/thread";
import { Avatar, Box, Button, Image, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useThreadCard } from "../hooks/useThreadCard";
import { AiFillHeart, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import moment from "moment";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";

export function ThreadCard(props: IThreadCard) {
  const navigate = useNavigate();
  const { handlePostLike } = useThreadCard();
  const [showImage, setImage] = useState<boolean>(true);
  return (
    <>
      <Box
        display={"flex"}
        width="100%"
        // borderBottom={"1px solid grey"}
        padding={"20px"}
      >
        <Avatar
          src={props.user?.picture}
          width={"50px"}
          height={"50px"}
          objectFit={"cover"}
          marginRight={"20px"}
        />

        <Box display={"flex"} flexDirection={"column"}>
          <Box
          // cursor={"pointer"}
          >
            <Box display={"flex"} flexDirection={"column"} gap={2}>
              <Box display={"flex"} gap={5}>
                <Text>{props.user?.full_name}</Text>
                <Text color="brand.grey" display={"flex"}>
                  @{props.user?.username}{" "}
                  <RxDotFilled style={{ marginTop: "5px" }} />
                  {moment(props.posted_at).startOf("minute").fromNow()}
                </Text>
              </Box>
              <Text>{props.content}</Text>
              {showImage && (
                <Image
                  src={props.image}
                  cursor={"pointer"}
                  alt="user"
                  onClick={() => navigate(`/detail/${props.id}`)}
                  onError={() => setImage(false)}
                />
              )}
            </Box>
          </Box>

          <Box
            display={"flex"}
            gap={5}
            marginTop={"10px"}
            justifyContent={"space-between"}
            // bg="red"
          >
            <Button
              pl={0}
              gap={"2"}
              variant="none"
              onClick={() => handlePostLike(props.id, props.is_liked)}
            >
              {props.is_liked ? (
                <AiFillHeart style={{ fontSize: "1.5em", color: "red" }} />
              ) : (
                <AiOutlineHeart style={{ fontSize: "1.5em", color: "white" }} />
              )}
              <Text color="brand.grey" ml={"5px"}>
                {props.likes_count} Like
              </Text>
            </Button>
            <Link to={`/detail/${props.id}`}>
            <Button pl={0} variant="none" gap={"2"}  >
              <AiOutlineComment style={{ fontSize: "1.5em" }} />
              <Text color="brand.grey">{props.replies_count} Replies</Text>
            </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
