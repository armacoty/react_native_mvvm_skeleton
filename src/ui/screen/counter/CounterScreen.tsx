import React from "react";
import { inject } from "react-ioc";
import { observer } from "mobx-react";
import { Button, StyleSheet, Text, View } from "react-native";
import CounterViewModel from "./CounterViewModel";

@observer
class CounterScreen extends React.Component {
  @inject(CounterViewModel)
  counterViewModel!: CounterViewModel;

  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.column}>
            <Text>Counter:</Text>
            <Text>{this.counterViewModel.count}</Text>
            <Button title="Add" onPress={this.counterViewModel.increment} />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default CounterScreen;
