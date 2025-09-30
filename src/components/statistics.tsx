import React from "react";
import { View, Text, StyleSheet } from "react-native";

// interface StatisticProps {
//   data: WorkoutMetrics | null; // pode ser null quando não há sessão
// }

export function Statistic(props) {
  return (
    <View style={styles.container}>
        <Text>{props.dados}</Text>
    </View>

    // <View style={styles.container}>
    //   <Text style={styles.title}>Resumo da Sessão</Text>
    //   <Text style={styles.metric}>Passos: </Text> {/* {data.steps} */}
    //   <Text style={styles.metric}>Duração: </Text> {/* {Math.floor(data.duration / 60)}:{(data.duration % 60).toString().padStart(2, '0')} */}
    //   <Text style={styles.metric}>Aceleração Média: </Text> {/* {data.avgAcceleration.toFixed(1)} m/s² */}
    //   <Text style={styles.metric}>Intensidade: </Text> {/* {data.intensity} */}
    //   <Text style={styles.metric}>Tipo de Movimento: </Text> {/* {data.movementType} */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#00ff41",
    marginBottom: 12,
  },
  metric: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 4,
  },
});