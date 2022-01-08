import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import Flexbox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PopsDinamis';
import Story from './pages/PopsDinamis';
// import TextCode from './pages/PopsDinamis';

const App = () => {
  //   const [show, setshow] = useState(true);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setshow(false);
  //     }, 3000);
  //   });
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* {show && <Flexbox />} */}
        {/* <PropsDinamis /> */}
        <Story />
        {/* <TextCode /> */}
        {/* <Flexbox /> */}
        {/* <Position /> */}
      </ScrollView>
    </View>
  );
};

export default App;
