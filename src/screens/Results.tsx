import { Box, Button, Center, Text } from "native-base";
import React from "react";

const Results = ({ route, navigation }) => {
  const { value } = route.params;

  return (
    <Box
      flex={1}
      alignItems={"center"}
      justifyContent={"center"}
      // bg={"info.500"}
      bg={{
        linearGradient: {
          colors: ["info.600", "info.700"],
          start: [0, 1],
          end: [0, 0],
        },
      }}
    >
      {/* <Center safeArea> */}
      <Text color={"warmGray.100"} fontSize={"md"}>
        You have searched for{" "}
        <Text textTransform={"uppercase"} fontWeight={"bold"}>
          {value}
        </Text>
      </Text>
      <Button mt={2} onPress={() => navigation.navigate("Home")}>
        Voltar
      </Button>
      {/* </Center> */}
    </Box>
  );
};

export default Results;
