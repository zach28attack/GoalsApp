import {StyleSheet, Text, View, Button, TextInput, FlatList, Pressable} from "react-native";
import {useState} from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState([]);

  const inputChangeHandler = (e) => {
    setInput(e);
  };

  const saveGoalsHandler = () => {
    setGoals((prevGoals) => [...prevGoals, {goal: input, key: Math.random().toString()}]);
    setInput("");
  };

  const deleteGoalHandler = (key) => {
    setGoals(goals.filter((goal) => goal.key !== key));
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

      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={({item}) => {
            return (
              <Pressable onPress={() => deleteGoalHandler(item.key)}>
                <View style={styles.listItemContainer}>
                  <Text style={styles.listItem}>{item.goal}</Text>
                </View>
              </Pressable>
            );
          }}
        />
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
