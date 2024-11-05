import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function App() {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => console.log(user.email));
    console.log("atualizous");
  }, []);

  async function handleLogin() {
    auth
      .signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log(userCredential);
        Alert.alert("Usuário logado", `Bem-vindo ${userCredential.user.email}`);
      })
      .catch((error) => {
        Alert.alert("Erro", error.message);
      });
  }

  async function handleSignUp() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log(userCredential);
        Alert.alert("Conta criada", `Bem-vindo ${userCredential.user.email}`);
      })
      .catch((error) => {
        Alert.alert("Erro", error.message);
      });
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder={"Informe seu e-email"}
        style={styles.input}
      />
      <TextInput
        value={senha}
        onChangeText={setSenha}
        placeholder={"Informe seu senha"}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title={"Logar"} onPress={handleLogin} />
      <Button title={"Cadastrar"} onPress={handleSignUp} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
  },
});
