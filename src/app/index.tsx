import { StyleSheet, View } from "react-native";

import Content from "@/components/pageCriptX/Content";
import Encabezado from "@/components/pageCriptX/Encabezado";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Encabezado />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: "#070707",
    gap: 40,
  },
  contenedor_secundario: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
