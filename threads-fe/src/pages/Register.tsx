import { FormRegister } from "@/features/auth";
import { Box } from "@chakra-ui/react";

export default function Register() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={"50px"}
    >
      <FormRegister />
    </Box>
  );
}
