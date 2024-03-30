import { StatusBar } from 'expo-status-bar';
import { 
    FlatList, 
    StyleSheet, 
    SafeAreaView
} from 'react-native';
import DayListItem from '@components/core/DayListItem';

// Dynamic data for out mini projects.
const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {

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
