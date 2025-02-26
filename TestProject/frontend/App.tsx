import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

// For Android emulator, use 10.0.2.2 to access localhost on your machine.
// If you're on iOS simulator or a physical device, adjust accordingly.
const BACKEND_URL = 'http://10.0.2.2:8000';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from your FastAPI endpoint
    const fetchData = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/`);
        const data = await response.json();
        // Assuming your FastAPI root returns something like: {"message": "Hello from FastAPI"}
        setMessage(data.message || 'No message received');
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Error fetching data');
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Paparazzi Frontend</Text>
      <Text style={styles.message}>Server says: {message}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  message: {
    marginTop: 20,
    fontSize: 18
  }
});

export default App;
