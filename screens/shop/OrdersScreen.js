import React from "react";
import { FlatList, Platform } from "react-native";
import { useSelector } from "react-redux";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import OrderItem from "../../components/shop/OrderItem";

const OrderScreen = props => {
  const orders = useSelector(state => state.orders.orders);
  return (
    <FlatList
      data={orders}
      keyExtractor={(item, index) => item.id}
      renderItem={itemData => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />
  );
};

OrderScreen.navigationOptions = navData => {
  return {
    headerTitle: "Orders",
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

export default OrderScreen;
