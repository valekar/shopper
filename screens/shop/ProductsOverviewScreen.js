import React from "react";
import { StyleSheet, FlatList, Platform, Button, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import Colors from "../../constants/Colors";

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  const DetailViewHandler = product => {
    console.log("Detail View", product);
    props.navigation.navigate({
      routeName: "ProductDetail",
      params: { product: product }
    });
  };
  const AddToCartHandler = product => {
    dispatch(cartActions.addToCart(product));
  };

  const dispatch = useDispatch();

  const renderItem = itemData => {
    return (
      <ProductItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
      >
        <View style={styles.actions}>
          <Button
            title="View Details"
            color={Colors.primary}
            onPress={() => {
              DetailViewHandler(itemData.item);
            }}
          />
          <Button
            color={Colors.primary}
            title="To cart"
            onPress={() => {
              AddToCartHandler(itemData.item);
            }}
          />
        </View>
      </ProductItem>
    );
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      renderItem={renderItem}
    />
  );
};

ProductsOverviewScreen.navigationOptions = navData => {
  //const toCartScreen =
  return {
    headerTitle: "All Products",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navData.navigation.navigate({ routeName: "Cart" });
          }}
        />
      </HeaderButtons>
    ),
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: "25%"
  }
});
