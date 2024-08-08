import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TransactionsListScreen from "./TransactionsListScreen";
import AddTransactionScreen from "./AddTransactionScreen";

function TransactionsScreen() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionsList"
        component={TransactionsListScreen}
        options={{ title: "Transactions" }}
      />
      <Stack.Screen
        name="AddTransaction"
        component={AddTransactionScreen}
        options={{ title: "Add Transaction" }}
      />
    </Stack.Navigator>
  );
}

export default TransactionsScreen;
