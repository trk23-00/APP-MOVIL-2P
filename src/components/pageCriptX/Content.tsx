import { Button, Image, StyleSheet, Text, View } from "react-native";

const Content = () => {
  return (
    <View style={styles.contenedor_general}>
      <View style={styles.container}>
        <Image source={require("./Shape.png")} style={styles.image} />
      </View>
      <View style={styles.contenedor_generico}>
        <Text style={styles.t1}>Jump start your</Text>
        <Text style={styles.t1}>crypto portfolio</Text>
      </View>

      <View style={styles.contenedor_generico}>
        <Text style={styles.t2}>Take your investment portfolio</Text>
        <Text style={styles.t2}>to next level</Text>
      </View>
      <View style={styles.boton}>
        <Button title="Get Started" color="#background: #6552FE;" />
      </View>
    </View>
  );
};

export default Content;
const styles = StyleSheet.create({
  boton: {
    borderRadius: 10,
    width: 327,
    height: 52,
    margin: "auto",
    paddingTop: 20,
  },
  contenedor_general: {
    gap: 24,
  },
  contenedor_generico: {
    paddingLeft: 24,
  },
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 36,
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 10,
  },
  t1: {
    fontSize: 32,
    fontWeight: 600,
    color: "white",
  },
  t2: {
    fontSize: 14,
    fontWeight: 500,
    color: "white",
  },
});
