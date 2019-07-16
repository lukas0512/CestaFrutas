import React, { Component } from "react";
import api from '../services/api';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    title: "Basket"
  };


render() {
  return ( 
    <View style={styles.container}>
    <TouchableOpacity style={styles.productButton} onPress={() => {
      this.props.navigation.navigate("Lista");
    }}
    >
      <Text style={styles.productButtonText}>Lista</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.productButton} onPress={() => {
      this.props.navigation.navigate("Tabela");
    }}
    >
      <Text style={styles.productButtonText}>Tabela</Text>
    </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DA552F",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10

  },
  productButtonText:{
    fontSize: 16,
    color: "#DA552F",
    fontWeight: "bold"
  }
})
