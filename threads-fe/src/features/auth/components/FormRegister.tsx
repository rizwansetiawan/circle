import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRegister } from "../hooks/useRegister";
import { EditIcon, EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import {CgPassword} from "react-icons/cg"
export function FormRegister() {
  const { handleChange, handleRegister } = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Flex
      h={"100vh"}
      justifyContent={"center"}
      margin={"-100px"}
    >
      <Stack
        align={"center"}
        w={"100vw"}
        justifyContent={"center"}
        display={"flex"}
      >
        <Stack align={"center"}>
          <Heading fontSize={["7xl","8xl"]} fontFamily={"cursive"} color={"cyan.400"}>
            circLe
          </Heading>
          <Text fontSize={"lg"} mt={"-5"} color={"gray.600"}>
            create account circle
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={4}
          w={["350px","400px"]}
        >
          <Stack spacing={4} >
            <FormControl id="fullname">
              <FormLabel></FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <EditIcon color="gray.300" />
                </InputLeftElement>
                <Input type="text" name="full_name" onChange={handleChange} placeholder="full name" />
              </InputGroup>
            </FormControl>
            <FormControl id="username">
              <FormLabel></FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="@"
                />
                <Input
                  type="text"
                  placeholder="username"
                  name="username"
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="email">
              <FormLabel></FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="gray.300" />
                </InputLeftElement>
                <Input type="text" name="email" onChange={handleChange} placeholder="email" />
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <FormLabel></FormLabel>
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
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleRegister}
                loadingText="Submitting"
                size="lg"
                bg={"cyan.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Create Account
              </Button>
            </Stack>
            <Stack>
              <Text align={"left"}>
                Already have account?{" "}
                <Link to={"/auth/login"}>
                  <Text display={"inline"} fontWeight={"bold"} color={"blue.600"}>
                    {" "}
                    Sign in
                  </Text>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
