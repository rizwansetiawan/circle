import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useLogin } from "../hooks/useLogin";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {Link} from "react-router-dom"
import { CgPassword } from "react-icons/cg";
export function FormLogin() {
  const { handleChange, handleLogin } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  return (
      <Flex
        minH={"100vh"}
        mt={5}
        justify={"center"}
      >
        <Stack maxW={"lg"}>
          <Stack align={"left"} textAlign={"center"}>
            <Heading fontSize={"8xl"} fontFamily={"cursive"} color={"cyan.400"}>
              circLe
            </Heading>
            <Text fontSize={"lg"} mt={"-5"} color={"gray.600"}>
              login to circle
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            w={["350px","400px"]}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={4}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel></FormLabel>
                <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="gray.300" />
                </InputLeftElement>
                <Input type="text" name="email" onChange={handleChange} placeholder="email address" />
              </InputGroup>
              </FormControl>
              <FormControl id="password">
              <InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <CgPassword color="gray.300" />
                </InputLeftElement>
                <Input type={showPassword?"text":"password"} name="password" onChange={handleChange} placeholder="password" />
              </InputGroup>
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  onClick={handleLogin}
                  bg={"cyan.600"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
                <Box display={"flex"} mt={"-5"} gap={2}>
                  <Text textAlign={"center"}>Not have ready account ? </Text>
                  <Link to={"/auth/register"}>
                    {" "}
                    <Text
                      display={"flex"}
                      textAlign={"center"}
                      color={"blue.400"}
                      cursor={"pointer"}
                    >
                      {" "}
                      Sign up
                    </Text>
                  </Link>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
}
