// import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { PaperProvider, MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  const colorScheme = useColorScheme();

  const customTheme =
    colorScheme === "light"
      ? {
          ...MD3LightTheme,
          colors: {
            ...MD3LightTheme.colors,
            primary: "rgb(0, 109, 68)",
            onPrimary: "rgb(255, 255, 255)",
            primaryContainer: "rgb(145, 247, 189)",
            onPrimaryContainer: "rgb(0, 33, 17)",
            secondary: "rgb(78, 99, 85)",
            onSecondary: "rgb(255, 255, 255)",
            secondaryContainer: "rgb(208, 232, 214)",
            onSecondaryContainer: "rgb(11, 31, 20)",
            tertiary: "rgb(60, 100, 113)",
            onTertiary: "rgb(255, 255, 255)",
            tertiaryContainer: "rgb(191, 233, 249)",
            onTertiaryContainer: "rgb(0, 31, 39)",
            error: "rgb(186, 26, 26)",
            onError: "rgb(255, 255, 255)",
            errorContainer: "rgb(255, 218, 214)",
            onErrorContainer: "rgb(65, 0, 2)",
            background: "rgb(251, 253, 248)",
            onBackground: "rgb(25, 28, 26)",
            surface: "rgb(251, 253, 248)",
            onSurface: "rgb(25, 28, 26)",
            surfaceVariant: "rgb(220, 229, 220)",
            onSurfaceVariant: "rgb(64, 73, 66)",
            outline: "rgb(113, 121, 114)",
            outlineVariant: "rgb(192, 201, 192)",
            shadow: "rgb(0, 0, 0)",
            scrim: "rgb(0, 0, 0)",
            inverseSurface: "rgb(46, 49, 46)",
            inverseOnSurface: "rgb(240, 241, 237)",
            inversePrimary: "rgb(117, 218, 163)",
            elevation: {
              level0: "transparent",
              level1: "rgb(238, 246, 239)",
              level2: "rgb(231, 242, 234)",
              level3: "rgb(223, 237, 228)",
              level4: "rgb(221, 236, 226)",
              level5: "rgb(216, 233, 223)",
            },
            surfaceDisabled: "rgba(25, 28, 26, 0.12)",
            onSurfaceDisabled: "rgba(25, 28, 26, 0.38)",
            backdrop: "rgba(42, 50, 44, 0.4)",
          },
        }
      : {
          ...MD3DarkTheme,
          colors: {
            ...MD3DarkTheme.colors,
            primary: "rgb(117, 218, 163)",
            onPrimary: "rgb(0, 57, 33)",
            primaryContainer: "rgb(0, 82, 50)",
            onPrimaryContainer: "rgb(145, 247, 189)",
            secondary: "rgb(181, 204, 187)",
            onSecondary: "rgb(33, 53, 40)",
            secondaryContainer: "rgb(55, 75, 62)",
            onSecondaryContainer: "rgb(208, 232, 214)",
            tertiary: "rgb(164, 205, 220)",
            onTertiary: "rgb(4, 53, 65)",
            tertiaryContainer: "rgb(34, 76, 89)",
            onTertiaryContainer: "rgb(191, 233, 249)",
            error: "rgb(255, 180, 171)",
            onError: "rgb(105, 0, 5)",
            errorContainer: "rgb(147, 0, 10)",
            onErrorContainer: "rgb(255, 180, 171)",
            background: "rgb(25, 28, 26)",
            onBackground: "rgb(225, 227, 223)",
            surface: "rgb(25, 28, 26)",
            onSurface: "rgb(225, 227, 223)",
            surfaceVariant: "rgb(64, 73, 66)",
            onSurfaceVariant: "rgb(192, 201, 192)",
            outline: "rgb(138, 147, 139)",
            outlineVariant: "rgb(64, 73, 66)",
            shadow: "rgb(0, 0, 0)",
            scrim: "rgb(0, 0, 0)",
            inverseSurface: "rgb(225, 227, 223)",
            inverseOnSurface: "rgb(46, 49, 46)",
            inversePrimary: "rgb(0, 109, 68)",
            elevation: {
              level0: "transparent",
              level1: "rgb(30, 38, 33)",
              level2: "rgb(32, 43, 37)",
              level3: "rgb(35, 49, 41)",
              level4: "rgb(36, 51, 42)",
              level5: "rgb(38, 55, 45)",
            },
            surfaceDisabled: "rgba(225, 227, 223, 0.12)",
            onSurfaceDisabled: "rgba(225, 227, 223, 0.38)",
            backdrop: "rgba(42, 50, 45, 0.4)",
          },
        };
  return (
    <NavigationContainer>
      <PaperProvider theme={customTheme}>
        <Routes />
      </PaperProvider>
    </NavigationContainer>
  );
}
