import { useState } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { useDispatch } from "react-redux";
import { setPhantomName } from "../redux/phantomSlice";

const NamePhantomModal = ({ visible }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const submit = () => {
    if (name.trim().length === 0) return;
    dispatch(setPhantomName(name.trim()));
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>Name Your Phantom</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter a name..."
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
          />
          <Pressable style={styles.button} onPress={submit}>
            <Text style={styles.buttonText}>Confirm</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "80%",
    backgroundColor: "#1a001f",
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#FF77D9",
  },
  title: {
    fontSize: 22,
    color: "white",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#300030",
    color: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF4FA3",
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default NamePhantomModal;
