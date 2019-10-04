import React from "react";
import { StyleSheet, FlatList, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/HeaderButton";

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
        onViewDetail={() => DetailViewHandler(itemData.item)}
        onAddToCart={() => AddToCartHandler(itemData.item)}
      />
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
    )
  };
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
