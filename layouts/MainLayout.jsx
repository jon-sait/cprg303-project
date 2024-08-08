import React from "react";
import { View } from "react-native";

import styles from "../styles";

function MainLayout({ children }) {
  return <View style={styles.layout}>{children}</View>;
}

export default MainLayout;
