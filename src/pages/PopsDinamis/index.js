import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <PropsDinamis
            url={
              'https://instagram.fcgk4-6.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/271236816_344638347167350_5587652497839259946_n.jpg?_nc_ht=instagram.fcgk4-6.fna.fbcdn.net&_nc_cat=110&_nc_ohc=AstIQ1UKLOMAX-8LmHi&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT-LG8fETnVWFq0rrtCfg3_-Iup-JDButIicKde4o10XWA&oe=61DF34C4&_nc_sid=83d603'
            }
            judul={'Jakarta'}
          />
          <PropsDinamis
            url={
              'https://instagram.fcgk4-6.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/271236816_344638347167350_5587652497839259946_n.jpg?_nc_ht=instagram.fcgk4-6.fna.fbcdn.net&_nc_cat=110&_nc_ohc=AstIQ1UKLOMAX-8LmHi&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT-LG8fETnVWFq0rrtCfg3_-Iup-JDButIicKde4o10XWA&oe=61DF34C4&_nc_sid=83d603'
            }
            judul={'Semarang'}
          />
          <PropsDinamis
            url={
              'https://instagram.fcgk4-6.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/271236816_344638347167350_5587652497839259946_n.jpg?_nc_ht=instagram.fcgk4-6.fna.fbcdn.net&_nc_cat=110&_nc_ohc=AstIQ1UKLOMAX-8LmHi&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT-LG8fETnVWFq0rrtCfg3_-Iup-JDButIicKde4o10XWA&oe=61DF34C4&_nc_sid=83d603'
            }
            judul={'Depok'}
          />
          <PropsDinamis
            url={
              'https://instagram.fcgk4-6.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/271236816_344638347167350_5587652497839259946_n.jpg?_nc_ht=instagram.fcgk4-6.fna.fbcdn.net&_nc_cat=110&_nc_ohc=AstIQ1UKLOMAX-8LmHi&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT-LG8fETnVWFq0rrtCfg3_-Iup-JDButIicKde4o10XWA&oe=61DF34C4&_nc_sid=83d603'
            }
            judul={'Tangerang'}
          />
          <PropsDinamis
            url={
              'https://instagram.fcgk4-6.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/271236816_344638347167350_5587652497839259946_n.jpg?_nc_ht=instagram.fcgk4-6.fna.fbcdn.net&_nc_cat=110&_nc_ohc=AstIQ1UKLOMAX-8LmHi&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT-LG8fETnVWFq0rrtCfg3_-Iup-JDButIicKde4o10XWA&oe=61DF34C4&_nc_sid=83d603'
            }
            judul={'Cianjur'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const PropsDinamis = props => {
  return (
    <View>
      <Image
        source={{
          uri: props.url,
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 100 / 2,
          borderWidth: 1,
          borderColor: 'orange',
          marginHorizontal: 5,
        }}
      />
      <Text style={{maxWidth: 50}}>{props.judul}</Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({});
