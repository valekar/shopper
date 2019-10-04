import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity
} from "react-native";
import Colors from "../../constants/Colors";

const ProductItem = props => {
  return (
    <View style={styles.product}>
      <TouchableOpacity
        onPress={props.onViewDetail}
        style={styles.imageContainer}
      >
        <Image style={styles.image} source={{ uri: props.image }} />
      </TouchableOpacity>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
      </View>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 5,
    height: 300,
    margin: 10
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden"
  },
  title: {
    marginVertical: 4,
    fontSize: 18,
    textAlign: "center"
    //fontFamily: "open-sans-bold"
  },
  price: {
    fontSize: 14,
    color: "#888",
    textAlign: "center"
  },
  details: {
    alignItems: "center",
    height: "15%"
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: "25%"
  }
});

export default ProductItem;
