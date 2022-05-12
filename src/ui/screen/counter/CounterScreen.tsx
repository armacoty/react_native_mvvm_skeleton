import { inject, observer } from "mobx-react";
import { Button, StyleSheet, Text, View } from "react-native";
import CounterViewModel from "./CounterViewModel";

interface CounterScreenProps {
  counterViewModel: CounterViewModel;
}

function CounterScreen(props: CounterScreenProps) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.column}>
          <Text>Counter:</Text>
          <Text>{props.counterViewModel.count}</Text>
          <Button title="Add" onPress={props.counterViewModel.increment} />
        </View>
      </View>
    </>
  );
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

export default inject("counterViewModel")(observer(CounterScreen));
