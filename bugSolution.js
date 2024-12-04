/* bug.js */
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // This will cause the error before fixing
  return (
    <View>
      <Text>Data: {data.name}</Text> 
    </View>
  );
};

export default MyComponent;

/* bugSolution.js */
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Solution: Use optional chaining and nullish coalescing
  return (
    <View>
      <Text>Data: {data?.name ?? 'Loading...'}</Text>
    </View>
  );
};

export default MyComponent;