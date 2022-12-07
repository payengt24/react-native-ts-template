import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import ShimmerUI from 'shimmer/index';

const App = () => {
  // console.log(ShimmerUI());
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* <Shimmer>
          <Text>Loading...</Text>
        </Shimmer> */}

        <ShimmerUI />

        <Text>Loading...</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
