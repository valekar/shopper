import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  const DetailViewHandler = product => {
    console.log("Detail View", product);
    props.navigation.navigate({
      routeName: "ProductDetail",
      params: { product: product }
    });
  };
  const AddToCartHandler = () => {
    console.log("Addd to Cart");
  };

  const renderItem = itemData => {
    return (
      <ProductItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        onViewDetail={() => DetailViewHandler(itemData.item)}
        onAddToCart={AddToCartHandler}
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

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Products"
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
