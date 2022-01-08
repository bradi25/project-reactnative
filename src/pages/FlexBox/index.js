<script src="http://localhost:8097"></script>;
import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Flexbox = () => {
  const [subscriber, setSubcriber] = useState(100);
  useEffect(() => {
    console.log('==> component did mount');
    setTimeout(() => {
      setSubcriber(200);
    }, 3000);
    return () => {
      console.log('==> component did update');
      console.log('==> component did will un mounnt');
    };
  }, [subscriber]);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: 'orange',
            width: 50,
            height: 25,
          }}></View>
        <View
          style={{
            backgroundColor: 'red',
            width: 50,
            height: 25,
          }}></View>
        <View
          style={{
            backgroundColor: 'blue',
            width: 50,
            height: 25,
          }}></View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: 50,
            height: 25,
          }}></View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://yt3.ggpht.com/k_g2R2quwQ-gU4X9lDapGMFq3jc87UTYU8aR3nBJJXXuNy_ZcPLvTwqpV4W2Vzto-9llmOPl0GU=s88-c-k-c0x00ffffff-no-rj',
          }}
          style={{width: 100, height: 100, borderRadius: 100, margin: 5}}
        />
        <View>
          <Text style={{fontWeight: 'bold'}}>RJL 5 - Fajar Aditya</Text>
          <Text style={{color: '#aaa'}}>{subscriber} subcriber</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>BERANDA</Text>
        <Text>VIDEO</Text>
        <Text>PLAYLIST</Text>
        <Text>KOMUNITAS</Text>
        <Text>CHANNEL</Text>
        <Text>TENTANG</Text>
      </View>
    </View>
  );
};

export default Flexbox;

// const styles = StyleSheet.create({});

// import React, {Component} from 'react';
// import {Text, View, Image} from 'react-native';

// export class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> ini constuctor');
//     this.state = {
//       subcriber: 100,
//     };
//   }

//   componentDidMount() {
//     console.log('==> ini didmount');
//     setTimeout(() => {
//       this.setState({
//         subcriber: 200,
//       });
//     }, 3000);
//   }

//   componentDidUpdate() {
//     console.log('==> ini did update');
//   }

//   componentWillUnmount() {
//     console.log('==> ini will unmount');
//   }

//   render() {
//     console.log('==> ini render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#c8d6e5',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View
//             style={{
//               backgroundColor: 'orange',
//               width: 50,
//               height: 25,
//             }}></View>
//           <View
//             style={{
//               backgroundColor: 'red',
//               width: 50,
//               height: 25,
//             }}></View>
//           <View
//             style={{
//               backgroundColor: 'blue',
//               width: 50,
//               height: 25,
//             }}></View>
//           <View
//             style={{
//               backgroundColor: 'yellow',
//               width: 50,
//               height: 25,
//             }}></View>
//         </View>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <Image
//             source={{
//               uri: 'https://yt3.ggpht.com/k_g2R2quwQ-gU4X9lDapGMFq3jc87UTYU8aR3nBJJXXuNy_ZcPLvTwqpV4W2Vzto-9llmOPl0GU=s88-c-k-c0x00ffffff-no-rj',
//             }}
//             style={{width: 100, height: 100, borderRadius: 100, margin: 5}}
//           />
//           <View>
//             <Text style={{fontWeight: 'bold'}}>RJL 5 - Fajar Aditya</Text>
//             <Text style={{color: '#aaa'}}>
//               {this.state.subcriber} subcriber
//             </Text>
//           </View>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//           }}>
//           <Text>BERANDA</Text>
//           <Text>VIDEO</Text>
//           <Text>PLAYLIST</Text>
//           <Text>KOMUNITAS</Text>
//           <Text>CHANNEL</Text>
//           <Text>TENTANG</Text>
//         </View>
//       </View>
//     );
//   }
// }

// export default FlexBox;
