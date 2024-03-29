import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import DayListItem from './src/components/core/DayListItem';

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    InterBlack: Inter_900Black,
  });

  if(!fontsLoaded && !fontError){
    return <ActivityIndicator />
  }

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
