import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "../../App";
import { Signin } from "../screens/signin";
import { Signup } from "../screens/signup";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <>
      <Screen name="home" component={App} />
      <Screen name="signin" component={Signin} />
      <Screen name="signup" component={Signup} />
    </>
  )
}

export default AppRoutes;