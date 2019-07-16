import React, { Component } from "react";
import api from '../services/api';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default class Main extends Component {

  constructor(props){
    super(props);
  }

  static navigationOptions = {
    title: 'Detalhes'
  };

  state = {
    color: null,
    image: null,
    name: null,
    uri: null
  }

  componentDidMount() {
    this.loadFruits();
  }

  loadFruits = async () => {
    const response = await api.get('/fruits/' + this.props.navigation.state.params.item);

    const {color, image, name, uri} = response.data.fruits[0];

    this.setState({ color, image, name, uri})
  };


  render() {
    return (
      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>{this.state.name}</Text>
        <Text style={styles.productDescription}>Cor: {this.state.color}</Text>
        <Text style={styles.productDescription}>Imagem: {this.state.image}</Text>
        <Text style={styles.productDescription}>uri: {this.state.uri}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  productTitle: {
    justifyContent: 'center',
    textTransform: "capitalize",
    fontSize:18,
    fontWeight: "bold",
    color: '#333'
  },
  productDescription:{
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
