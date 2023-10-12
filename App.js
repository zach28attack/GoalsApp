import {StyleSheet, Text, View, Button, TextInput, ScrollView} from "react-native";
import {useState} from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState([]);

  const inputChangeHandler = (e) => {
    setInput(e);
  };

  const saveGoalsHandler = () => {
    setGoals((prevGoals) => [...prevGoals, input]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <TextInput
            onChangeText={inputChangeHandler}
            placeholder="Set your goals"
            style={styles.textInput}
            value={input}
          />
          <Button title="Save" onPress={saveGoalsHandler} />
        </View>
      </View>

      <ScrollView style={styles.listContainer}>
        {goals.map((goal) => {
          return (
            <View style={styles.listItemContainer}>
              <Text style={styles.listItem} key={goal}>
                {goal}
              </Text>
            </View>
          );
        })}
      </ScrollView>
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
  listItemContainer: {
    borderRadius: 15,
    backgroundColor: "#8255fb",
    margin: 10,
    padding: 5,
    justifyContent: "center",
  },
  listItem: {
    color: "white",
    paddingLeft: 10,
  },
});
