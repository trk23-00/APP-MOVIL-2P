import { StyleSheet, View } from "react-native";

import Encabezado from "@/components/pageCriptX/Encabezado";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Encabezado />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#070707",
  },
  contenedor_secundario: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
