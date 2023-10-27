import { FormLogin } from "@/features/auth";
import { Box } from "@chakra-ui/react";

export default function Login() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={"50px"}
    >
      <FormLogin />
    </Box>
  );
}
