import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Button,
  Platform,
  FlatList,
  Text
} from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";
import * as cartActions from "../../store/actions/cart";
import { useDispatch } from "react-redux";

const CartScreen = props => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    const transFormedCartItems = [];
    for (const key in state.cart.items) {
      transFormedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
      });
    }

    return transFormedCartItems;
  });

  const dispatch = useDispatch();
  const deleteItemHandler = product => {
    //console.log(id);
    dispatch(cartActions.deleteFromCart(product.productId));
  };

  const renderItemHandler = product => {
    //console.log(product);
    return (
      <CartItem
        product={product}
        onDeleteItem={() => deleteItemHandler(product)}
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:
          <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order"
          color={Colors.accent}
          disabled={cartItems.length === 0}
          onPress={() => {}}
        />
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={product => product.productId}
        renderItem={row => renderItemHandler(row.item)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white"
  },
  summaryText: {
    //fontFamily: "open-sans-bold",
    fontSize: 18,
    color: Platform.OS === "android" ? "white" : Colors.primary
  },
  amount: {}
});

export default CartScreen;
