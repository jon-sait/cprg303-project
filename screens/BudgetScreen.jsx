import { View, Text, ScrollView } from "react-native";

import MainLayout from "../layouts/MainLayout";
import styles from "../styles";
import { useContext } from "react";
import { StateContext } from "../context/state";

function BudgetScreen() {
  const state = useContext(StateContext);

  const date = new Date();

  let sum = 0;

  const byCat = [];
  for (const tx of state.transactions) {
    if (byCat.length) {
      const cat = byCat.find((cat) => cat.category === tx.category);
      if (cat) {
        cat.amount += parseFloat(tx.amount);
      } else {
        byCat.push({ category: tx.category, amount: parseFloat(tx.amount) });
      }
    } else {
      byCat.push({ category: tx.category, amount: parseFloat(tx.amount) });
    }

    sum += parseFloat(tx.amount);
  }

  byCat.sort((a, b) => b.amount - a.amount);

  return (
    <MainLayout>
      <ScrollView style={styles.budget}>
        <View style={styles.budgetSummary}>
          <Text style={styles.budgetSummaryText}>Budget for</Text>
          <Text style={styles.budgetSummaryDate}>
            {
              [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ][date.getMonth()]
            }{" "}
            {date.getFullYear()}
          </Text>
        </View>
        <View style={styles.budgetProgress}>
          <Text style={styles.budgetProgressLabel}>Spent</Text>
          <Text style={styles.budgetProgressSpent}>{sum.toFixed()}</Text>
          <Text style={styles.budgetProgressTotal}>/ 2000</Text>
        </View>
        <View style={styles.divider} />
        <Text style={styles.budgetByCategoryTitle}>Expenses by category</Text>
        <View style={styles.budgetByCategory}>
          {byCat.map((cat) => (
            <View>
              <Text style={styles.budgetCategoryLabel}>{cat.category}</Text>
              <Text style={styles.budgetCategoryAmount}>
                {cat.amount.toFixed(2)}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </MainLayout>
  );
}

export default BudgetScreen;
