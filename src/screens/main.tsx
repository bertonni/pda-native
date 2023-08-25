import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import {
  Text,
  Button,
  useTheme
} from "react-native-paper";

export const Main = ({ navigation }: any) => {
  const theme = useTheme();
  return (
    <View
          style={{
            ...styles.container,
            backgroundColor: theme.colors.background,
          }}
        >
          <View style={styles.content}>
            <View style={styles.row}>
              <Text variant="displayLarge">Joga</Text>
              <Text
                variant="displayLarge"
                style={{ color: theme.colors.primary }}
              >
                Fácil
              </Text>
            </View>
            <Text style={{ alignSelf: 'flex-start', paddingLeft: 50, marginTop: 8 }} variant="headlineSmall">Gerencie sua pelada{"\n"} ou seu torneio</Text>
          </View>
          <StatusBar style="auto" />
          <View style={styles.buttons}>
            <Button style={styles.button} mode="outlined" onPress={() => navigation.navigate("signup")}>
              Registro
            </Button>
            <Button style={styles.button} mode="contained" onPress={() => navigation.navigate("signin")}>
              Login
            </Button>
          </View>
        </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
    paddingHorizontal: 24
  },
  row: {
    flexDirection: "row",
    gap: 12
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    gap: 8,
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    width: "100%",
    alignSelf: "flex-end",
    paddingBottom: 40
  },
  button: {
    width: 152,
  },
});
