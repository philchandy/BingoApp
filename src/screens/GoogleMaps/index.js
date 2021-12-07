import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';


const Maps = (props) => {
  return (
    <View >
      <MapView
        style={{width: '100%', height: '100%'}}
        provider = {PROVIDER_GOOGLE}
        initialRegion={{
          latitude:48.538148,
          longitude:-123.463368,
          latitudeDelta: 9.0922,
          longitudeDelta: 5.0421,
        }}
      >
        <Marker
          coordinate={{latitude:48.538148,longitude:-123.463368,}}
          title={'Library_1'}
          description={'Located on 123 smith ave.'}
        />
        <Marker
          coordinate={{latitude:48.518132,longitude:-123.463368,}}
          title={'Library_2'}
          description={'Located on 321 test dr.'}
        />
      </MapView>
    </View>
  );
};

export default Maps;
