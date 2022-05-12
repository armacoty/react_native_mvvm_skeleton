import { registerRootComponent } from "expo";
import CounterScreenWrapper from "./ui/screen/counter/CounterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CounterViewModel from "./ui/screen/counter/CounterViewModel";
import React from "react";
import { Provider } from "mobx-react";

const Stack = createStackNavigator();

const counterViewModel = new CounterViewModel();

function App() {
  return (
    <>
      <Provider counterViewModel={counterViewModel}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="CounterScreen">
            <Stack.Screen
              name="CounterScreen"
              component={CounterScreenWrapper}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default registerRootComponent(App);
