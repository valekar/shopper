import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";

const ProductDetailScreen = props => {
  const product = props.navigation.getParam("product");

  const dispatch = useDispatch();
  const addToCartHandler = product => {
    dispatch(cartActions.addToCart(product));
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: product.imageUrl }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.cart}>
        <Button
          title="Add to Cart"
          color={Colors.primary}
          onPress={() => {
            addToCartHandler(product);
          }}
        />
      </View>
      <View style={styles.details}>
        <Text>PRICE</Text>
        <Text>${product.price.toFixed(2)}</Text>

        <Text>DESCRITPION</Text>
        <Text>{product.description}</Text>
      </View>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = navData => {
  const product = navData.navigation.getParam("product");
  return {
    headerTitle: product.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden"
  },
  details: {
    margin: 20,
    alignItems: "center"
  },
  cart: {
    //alignItems: "flex-end",
    marginVertical: 0
  }
});

export default ProductDetailScreen;
