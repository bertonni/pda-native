import React, { useState } from "react";
import {
  Box,
  Fab,
  Heading,
  Icon,
  Input,
  InputGroup,
  Pressable,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "native-base";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const LandingPage = ({ navigation }) => {
  const [searchedValue, setSearchedValue] = useState<string>("");
  const { toggleColorMode } = useColorMode();

  const handlePress = () => {
    navigation.navigate("Results", { value: searchedValue });
  };
  const handleChange = (text: string) => setSearchedValue(text);

  return (
    <Box
      flex={1}
      alignItems="center"
      _dark={{ bg: "dark.200", color: "light.200" }}
      _light={{ bg: "light.200", color: "dark.200" }}
    >
      <Heading
        color={"amber.400"}
        size={"3xl"}
        textAlign="center"
        mt={20}
        _dark={{ color: "light.200" }}
        _light={{ color: "dark.200" }}
      >
        Joga{" "}
        <Text _dark={{ color: "light.400" }} _light={{ color: "dark.400" }}>
          Fácil
        </Text>
      </Heading>
      <Text fontSize={"lg"} textAlign={"center"} mt={10} mx={2}>
        Gerencie sua{" "}
        <Text
          fontWeight={"medium"}
          _dark={{ color: "light.100" }}
          _light={{ color: "dark.100" }}
        >
          Pelada
        </Text>{" "}
        e seus{" "}
        <Text
          fontWeight={"medium"}
          _dark={{ color: "light.100" }}
          _light={{ color: "dark.100" }}
        >
          Campeonatos
        </Text>{" "}
        de maneira prática e simples
      </Text>
      <Stack px={8} width="100%" mt={40} alignItems="center">
        <InputGroup w={{ base: "100%", md: "285" }}>
          <Input
            value={searchedValue}
            onChangeText={handleChange}
            size={"md"}
            placeholder="Busque por um torneio"
            w={"100%"}
            _dark={{
              bg: "light.600",
              placeholderTextColor: "light.300",
            }}
            _focus={{
              _dark: {
                borderColor: "light.500",
                bg: "light.500",
                color: "light.300",
                placeholderTextColor: "light.300",
              },
              _light: {
                borderColor: "dark.500",
                bg: "dark.600",
                color: "dark.300",
                placeholderTextColor: "dark.300",
              },
            }}
            variant="filled"
            InputLeftElement={
              <Pressable onPress={handlePress}>
                <Icon
                  as={<MaterialIcons name="search" />}
                  size={10}
                  _dark={{
                    color: "light.300",
                  }}
                  _light={{
                    color: "dark.300",
                  }}
                />
              </Pressable>
            }
            InputRightElement={
              searchedValue.length > 0 && (
                <Pressable onPress={() => setSearchedValue("")} pr={1}>
                  <Icon
                    as={<MaterialIcons name="close" />}
                    size={6}
                    _dark={{
                      color: "light.300",
                    }}
                    _light={{
                      color: "dark.300",
                    }}
                  />
                </Pressable>
              )
            }
          />
        </InputGroup>
      </Stack>
      <Fab
        renderInPortal={false}
        onPress={toggleColorMode}
        _light={{
          bg: "light.600",
        }}
        _dark={{
          bg: "dark.600",
        }}
        _pressed={{
          _dark: {
            bg: "dark.800"
          },
          _light: {
            bg: "light.800"
          }
        }}
        placement={"top-right"}
        rounded={"lg"}
        icon={useColorModeValue(
          <MaterialCommunityIcons
            name="moon-waning-crescent"
            size={16}
            color="lightgray"
          />,
          <MaterialIcons name="wb-sunny" size={16} color="gray" />
        )}
      />
    </Box>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-start",
    // ...StyleSheet.absoluteFillObject,
    width: "100%",
  },
});
