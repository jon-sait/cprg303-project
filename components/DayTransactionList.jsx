import { View, Text } from "react-native";

import TransactionDisplay from "./TransactionDisplay";
import styles from "../styles";

function DayTransactionList({ date, transactions }) {
  return (
    <View style={styles.txDisplay}>
      <View style={styles.divider} />
      <Text style={styles.txDisplayDate}>{date}</Text>
      {transactions.map((tx) => (
        <TransactionDisplay transaction={tx} />
      ))}
    </View>
  );
}

export default DayTransactionList;
