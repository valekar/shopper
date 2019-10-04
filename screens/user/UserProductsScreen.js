import React from "react";
import { FlatList, StyleSheet, Button, View, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../../constants/Colors";
import * as productActions from "../../store/actions/products";
const UserProductsScreen = props => {
  const dispatch = useDispatch();
  const userProducts = useSelector(state => state.products.userProducts);
  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
        >
          <View style={styles.actions}>
            <Button
              title="Edit"
              color={Colors.primary}
              onPress={() => {
                props.navigation.navigate({
                  routeName: "EditProduct",
                  params: { product: itemData.item }
                });
              }}
            />
            <Button
              color={Colors.primary}
              title="Delete"
              onPress={() => {
                dispatch(productActions.deleteProduct(itemData.item.id));
              }}
            />
          </View>
        </ProductItem>
      )}
    />
  );
};

UserProductsScreen.navigationOptions = navData => {
  return {
    headerTitle: "YOur Products",
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
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Add"
          iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
          onPress={() => {
            navData.navigation.navigate("EditProduct");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: "25%"
  }
});

export default UserProductsScreen;
