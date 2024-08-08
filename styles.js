import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#cac4d0",
    width: "100%",
  },
  txList: {
    height: "100%",
  },
  txDisplay: {
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },
  txDisplayDate: {
    fontSize: 16,
    fontWeight: "500",
  },
  txDisplayCategory: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: -8,
    color: "#49454f",
  },
  txDisplayAmount: {
    fontSize: 45,
    fontWeight: "300",
    marginBottom: -4,
  },
  addTx: {
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputRemark: {
    fontSize: 14,
    marginBottom: 5,
    color: "#49454f",
  },
  confirmAddTxButtonContainer: {
    width: "100%",
    marginTop: 15,
    alignItems: "center",
  },
  confirmAddTxButton: {
    width: "80%",
    height: 55,
    borderRadius: 37,
    backgroundColor: "#65558f",
    zIndex: 1000,
  },
  confirmAddTxButtonText: {
    color: "#ffffff",
    margin: "auto",
    fontSize: 20,
    fontWeight: "400",
  },
  addTxButton: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: "#65558f",
    position: "absolute",
    right: 12,
    bottom: 12,
    zIndex: 1000,
  },
  addTxButtonText: {
    color: "#ffffff",
    margin: "auto",
    fontSize: 35,
    fontWeight: "200",
  },
  budget: {
    width: "100%",
    gap: 10,
  },
  budgetSummary: {
    margin: "auto",
    flexDirection: "row",
    gap: 8,
  },
  budgetSummaryText: {
    fontSize: 25,
    fontWeight: "400",
  },
  budgetSummaryDate: {
    fontSize: 25,
    color: "#65558f",
    fontWeight: "500",
  },
  budgetProgress: {
    marginHorizontal: "auto",
    marginTop: 30,
    marginBottom: 15,
  },
  budgetProgressLabel: {
    fontSize: 16,
    color: "#65558f",
    right: 30,
    marginBottom: -4,
  },
  budgetProgressSpent: {
    fontSize: 50,
  },
  budgetProgressTotal: {
    left: 85,
    bottom: 5,
    fontSize: 24,
    color: "#8d8c8f",
  },
  budgetByCategory: {
    gap: 5,
  },
  budgetByCategoryTitle: {
    marginBottom: 10,
  },
  budgetCategoryLabel: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: -8,
    color: "#49454f",
  },
  budgetCategoryAmount: {
    fontSize: 45,
    fontWeight: "300",
    marginBottom: -4,
  },
});

export default styles;
