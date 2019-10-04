import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditProductScreen = props => {
  const product = props.navigation.getParam("product");

  if (product === undefined) {
    return (
      <View>
        <Text>New Product!</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Edit Sceen</Text>
      </View>
    );
  }
};

EditProductScreen.navigationOptions = navData => {
  const product = navData.navigation.getParam("product");
  //console.log(product);
  return {
    headerTitle: product === undefined ? "Add Product" : product.title
  };
};

const styles = StyleSheet.create({});

export default EditProductScreen;
