import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import DayListItem from './src/components/core/DayListItem';

const days = [...Array(24)].map((val, index) => index + 1);
console.log(days)

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={days}
        renderItem={({ item }) => (
          <DayListItem day={item} />
        )}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
      />

      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    gap: 10,
    padding: 10
  },
  column: {
    gap: 10
  },
  
});
