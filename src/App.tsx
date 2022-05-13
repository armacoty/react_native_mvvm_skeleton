import { registerRootComponent } from "expo";
import CounterScreenWrapper from "./ui/screen/counter/CounterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CounterViewModel from "./ui/screen/counter/CounterViewModel";
import React from "react";
import { provider } from "react-ioc";

const Stack = createStackNavigator();

@provider(CounterViewModel)
class App extends React.Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="CounterScreen">
            <Stack.Screen
              name="CounterScreen"
              component={CounterScreenWrapper}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default registerRootComponent(() => (<App/>));
