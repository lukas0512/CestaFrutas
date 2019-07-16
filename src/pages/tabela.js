import React, { Component } from "react";
import api from '../services/api';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    title: "Fruits"
  };

  state = {
    basket: []
  }

  componentDidMount() {
    this.loadFruits();
  }

  loadFruits = async () => {
    const response = await api.get('/');

    const { basket } = response.data;

    this.setState({ basket })
  };
  renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.type}</Text>
      <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>

      <TouchableOpacity style={styles.productButton} onPress={() => {
        this.props.navigation.navigate("Fruit" , {item: item.type});
      }}
      >
        <Text style={styles.productButtonText}>Details</Text>
      </TouchableOpacity>
    </View>
  )
render() {
  return (
    <View style={styles.container}>
    <FlatList
      contentContainerStyle={styles.list}
      data={this.state.basket}
      keyExtractor={item => item.type}
      renderItem={this.renderItem}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },

  list: {
    padding: 20
  },
  productContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  productTitle: {
    textTransform: "capitalize",
    fontSize:18,
    fontWeight: "bold",
    color: '#333'
  },
  productQuantity:{
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24
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
