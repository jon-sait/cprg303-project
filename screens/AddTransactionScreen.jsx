import React, { useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import MainLayout from "../layouts/MainLayout";
import styles from "../styles";
import { StateContext } from "../context/state";

function AddTransactionScreen({ navigation }) {
  const state = useContext(StateContext);

  const [category, setCategory] = useState();
  const [amount, setAmount] = useState();
  const [remark, setRemark] = useState();

  const handleAdd = () => {
    state.addTransaction({
      date: new Date().toISOString().substring(0, 10),
      category,
      amount,
      remark,
    });
    navigation.goBack();
  };

  return (
    <MainLayout>
      <View style={styles.addTx}>
        <View>
          <Text style={styles.inputLabel}>Category *</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={setCategory}
            value={category}
          />
          <Text style={styles.inputRemark}>Category of the transaction</Text>
        </View>
        <View>
          <Text style={styles.inputLabel}>Amount *</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={setAmount}
            value={amount}
            inputMode="decimal"
          />
          <Text style={styles.inputRemark}>
            Expense amount of the transaction
          </Text>
        </View>
        <View>
          <Text style={styles.inputLabel}>Remark</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={setRemark}
            value={remark}
          />
          <Text style={styles.inputRemark}>
            (Optional) Description of the transaction
          </Text>
        </View>
        <View style={styles.confirmAddTxButtonContainer}>
          <Pressable style={styles.confirmAddTxButton} onPress={handleAdd}>
            <Text style={styles.confirmAddTxButtonText}>Add</Text>
          </Pressable>
        </View>
      </View>
    </MainLayout>
  );
}

export default AddTransactionScreen;
