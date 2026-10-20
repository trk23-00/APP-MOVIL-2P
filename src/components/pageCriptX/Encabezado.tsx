import { StyleSheet, Text, View } from "react-native";

const Encabezado = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.title_1}>Crypt</Text>
      <Text style={styles.title_2}>X</Text>
    </View>
  );
};

export default Encabezado;

const styles = StyleSheet.create({
  contenedor: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 96,
    width: "100%",
    paddingLeft: 24,
  },
  title_1: {
    fontSize: 64,
    color: "white",
    fontWeight: 700,
  },
  title_2: {
    fontSize: 64,
    color: "#6552FE",
    fontWeight: 700,
  },
});
