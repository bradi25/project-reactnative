import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#00a8ff',
          margin: 40,
        }}
      />
      <Text>Hello World</Text>
      <Home />
      <TextInput maxlength={40} style={{borderWidth: 1}} />
      <Photo />
    </View>
  );
};

const Home = () => {
  return <Text style={{margin: 20}}>Job Bradi Sibarani joooooos</Text>;
};

const Photo = () => {
  return (
    <View>
      <Image
        style={{width: 200, height: 200}}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </View>
  );
};

export default SampleComponent;
