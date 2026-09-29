import { StyleSheet, Text, View } from "react-native";

function StudentRoster() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Roster - 4 students</Text>

      <Text style={styles.student}>
        Ana Cruz — IT313 — 21 units — Full Load
      </Text>
      <Text style={styles.student}>Bea Santos — IT313 — 15 units</Text>
      <Text style={styles.student}>
        Cid Ramos — IT313 — 18 units — Full Load
      </Text>
      <Text style={styles.student}>Dex Alonzo — IT313 — 12 units</Text>
    </View>
  );
}

export default function App() {
  return <StudentRoster />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  student: {
    fontSize: 16,
    marginBottom: 12,
  },
});
