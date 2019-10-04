import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const CartItem = props => {
  return (
    <View style={styles.cartItems}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.product.quantity}</Text>
        <Text style={styles.title}>{props.product.productTitle}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.amount}>{props.product.sum}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.onDeleteItem();
        }}
        style={styles.deleteButton}
      >
        <Ionicons
          name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
          size={23}
          color="red"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItems: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 16
  },
  quantity: {
    //fontFamily: "open-sans",
    color: "#888",
    fontSize: 16
  },
  amount: {
    //fontFamily: "open-sans-bold",
    fontSize: 16
  },
  deleteButton: {
    marginLeft: 20
  }
});

export default CartItem;
