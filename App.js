import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import Formulario from ".compenents/Formulario";


// Define componente principal App
export default function App() {
  //Retorna a estrutura do componente...

  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar style="auto" />
      <View style={estilos.boxTitulo}>
        <Text style={estilos.titulo}>App IMC</Text>
      </View>
    </SafeAreaView>
  );
}

// Estilo CSS para os elementos de interfaces
const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxTitulo: {
    paddingVertical: 50,
    backgroundColor:"black",
  },
  titulo: {
    color: "write",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
