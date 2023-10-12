import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, Button, TextInput} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <TextInput placeholder="Set your goals" style={styles.textInput} />
          <Button title="Save" />
        </View>
      </View>

      <View style={styles.listContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingTop: 100,
    flex: 1,
  },
  inputContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
    borderBottomStyle: "solid",
    paddingBottom: 25,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderStyle: "solid",
    width: "80%",
    borderRadius: 10,
  },
  listContainer: {
    flex: 4,
  },
});
