import { View, Text } from "react-native";

import styles from "../styles";

function TransactionDisplay({ transaction }) {
  return (
    <View>
      <Text style={styles.txDisplayCategory}>{transaction.category}</Text>
      <Text style={styles.txDisplayAmount}>
        {parseFloat(transaction.amount).toFixed(2)}
      </Text>
      <Text>{transaction.remark}</Text>
    </View>
  );
}

export default TransactionDisplay;
