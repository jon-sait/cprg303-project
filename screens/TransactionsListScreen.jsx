import React from "react";
import { Pressable, View, Text } from "react-native";

import TransactionList from "../components/TransactionList";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles";

function TransactionsListScreen({ navigation }) {
  return (
    <MainLayout>
      <View style={styles.txList}>
        <Pressable
          style={styles.addTxButton}
          onPress={() => navigation.navigate("AddTransaction")}
        >
          <Text style={styles.addTxButtonText}>+</Text>
        </Pressable>
        <TransactionList />
      </View>
    </MainLayout>
  );
}

export default TransactionsListScreen;
