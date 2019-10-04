import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import Colors from "../../constants/Colors";
import CartItem from "./CartItem";

const OrderItem = props => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}> ${props.amount}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={showDetails ? "Hide Details" : "Show Details"}
        onPress={() => {
          setShowDetails(prevState => !prevState);
        }}
      />

      {showDetails && (
        <View style={styles.detailItem}>
          {props.items.map(cartItem => {
            return <CartItem key={cartItem.productId} product={cartItem} />;
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 5,
    margin: 20,
    padding: 10
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  totalAmount: {
    fontSize: 16
  },
  date: {
    fontSize: 16,
    color: "#888"
  },
  detailItem: {
    width: "100%"
  }
});

export default OrderItem;
