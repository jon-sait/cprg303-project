import { useContext } from "react";
import { ScrollView } from "react-native";

import DayTransactionList from "./DayTransactionList";
import { StateContext } from "../context/state";

function TransactionList() {
  const state = useContext(StateContext);

  const byDate = [];
  for (const tx of state.transactions) {
    if (!byDate.length) {
      byDate.push({ date: tx.date, transactions: [] });
    }

    if (byDate[byDate.length - 1].date === tx.date) {
      byDate[byDate.length - 1].transactions.push(tx);
    } else {
      byDate.push({ date: tx.date, transactions: [tx] });
    }
  }

  for (const day of byDate) {
    day.transactions.reverse();
  }

  byDate.reverse();

  return (
    <ScrollView>
      {byDate.map((day) => (
        <DayTransactionList date={day.date} transactions={day.transactions} />
      ))}
    </ScrollView>
  );
}

export default TransactionList;
