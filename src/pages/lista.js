import React, { Component } from "react";
import api from '../services/api';

import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    title: "Fruits"
  };

  state = {
    fruits: []
  }

  componentDidMount() {
    this.loadFruits();
  }

  loadFruits = async () => {
    const response = await api.get('/fruits');

    const { fruits } = response.data;

    this.setState({ fruits })
  };
  renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.type}</Text>
      <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>

      <TouchableOpacity style={styles.productButton} onPress={() => {
        this.props.navigation.navigate("Fruit" , item);
      }}
      >
        <Text style={styles.productButtonText}>Details</Text>
      </TouchableOpacity>
    </View>
  )
render() {
  return (
    <View style={styles.container}>
    <ScrollView>

                {this.state.fruits.map((item, i) => {
                    return (
                      <View key={i} style={styles.productContainer}>

                        <TouchableOpacity style={styles.productButton} onPress={() => {
                          this.props.navigation.navigate("Fruit" , {item: item.name});
                        }}>
                        <Text style={styles.productButtonText}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>)
                })}
            </ScrollView>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },

  productContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
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
    textTransform: "capitalize",
    color: "#DA552F",
    fontWeight: "bold"
  }
})
