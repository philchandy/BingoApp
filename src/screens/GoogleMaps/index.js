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
          coordinate={{latitude:48.4808499334677,longitude:-123.3882345854103,}}
          title={'Library_1'}
          description={'Located on 649 Baker St.'}
        />
        <Marker
          coordinate={{latitude:48.45177300348988,longitude:-123.42772014095287,}}
          title={'Library_2'}
          description={'Located on 1503 Admiral Rd.'}
        />
          <Marker
          coordinate={{latitude:48.453476784432304,longitude:-123.38353747256919,}}
          title={'Library_3'}
          description={'Located on 3270 Albion Rd.'}
        />
        <Marker
          coordinate={{latitude:48.42791902616281, longitude:-123.41689959567081,}}
          title={'Library_4'}
          description={'Located on 487 Admirals Rd.'}
        />
        <Marker
          coordinate={{latitude:48.52434147434754, longitude:-123.36766767661598,}}
          title={'Library_5'}
          description={'Located on 5169 Cordove Bay Rd.'}
        />
        <Marker
          coordinate={{latitude:48.47613241122726, longitude:-123.38987137182563,}}
          title={'Library_6'}
          description={'Located on 589 Agnes St.'}
        />
        <Marker
          coordinate={{latitude:48.43352593425136, longitude:-123.33263315704004,}}
          title={'Library_7'}
          description={'Located on 1730 Albert Ave.'}
        />
        <Marker
          coordinate={{latitude:48.44943876583999,longitude:-123.366724518215,}}
          title={'Library_8'}
          description={'Located on 3158 Alder St.'}
        />
        <Marker
          coordinate={{latitude:48.41199595037851, longitude:-123.33691322265933,}}
          title={'Library_9'}
          description={'Located on 222 B St Charles St.'}
        />
        <Marker
          coordinate={{latitude:48.41985837860917, longitude:-123.31599226485315,}}
          title={'Library_10'}
          description={'Located on 650 Montery Ave.'}
        />
        <Marker
          coordinate={{latitude:48.538148,longitude:-123.463368,}}
          title={'Library_11'}
          description={'Located on 123 smith ave.'}
        />
        <Marker
          coordinate={{latitude:48.48130969360381, longitude:-123.37021433081449,}}
          title={'Library_12'}
          description={'Located on 988 Ambassador Ave.'}
        />
        <Marker
          coordinate={{latitude:48.60162087643744,longitude:-123.39451918082295,}}
          title={'Library_13'}
          description={'Located on 18004 Arthur Dr.'}
        />
        <Marker
          coordinate={{latitude:48.46564370723688,longitude:-123.34737111466026,}}
          title={'Library_14'}
          description={'Located on 3796 Ascot Dr.'}
        />
        <Marker
          coordinate={{latitude:48.575096131992616, longitude:-123.46058932263192,}}
          title={'Library_15'}
          description={'Located on 898 Marchant Rd.'}
        />
        <Marker
          coordinate={{latitude:48.35921154581504,longitude:-123.55880443800935}}
          title={'Library_16'}
          description={'Located on 590 Aquarius Rd.'}
        />
        <Marker
          coordinate={{latitude:48.63443430922007, longitude:-123.47603640358682,}}
          title={'Library_17'}
          description={'Located on 9276 Ardmore Dr.'}
        />
        <Marker
          coordinate={{latitude:48.437908673365854,longitude:-123.34085643449463,}}
          title={'Library_18'}
          description={'Located on 2624 Asquith St'}
        />
        <Marker
          coordinate={{latitude:48.44048734220947, longitude:-123.34124077988578,}}
          title={'Library_19'}
          description={'Located on 2740 Asquith St.'}
        />
        <Marker
          coordinate={{latitude:48.47132362201849, longitude:-123.34293434020628,}}
          title={'Library_20'}
          description={'Located on 1572 Athlone Dr.'}
        />
        <Marker
          coordinate={{latitude:48.464514918841154, longitude:-123.37917092678278,}}
          title={'Library_21'}
          description={'Located on 3814 Rowland Ave.'}
        />
        <Marker
          coordinate={{latitude:48.46702220905164,longitude:-123.51314497795269,}}
          title={'Library_22'}
          description={'Located on Langford'}
        />
        <Marker
          coordinate={{latitude:48.42856744557161,longitude:-123.35155458402708,}}
          title={'Library_23'}
          description={'Located on 1154 Balmoral Rd.'}
        />
        <Marker
          coordinate={{latitude:48.566031614361016,longitude:-123.40198559195258,}}
          title={'Library_24'}
          description={'Located on 6760 Barbara Dr.'}
        />
        <Marker
          coordinate={{latitude:48.448571509719166, longitude:-123.35854412635304,}}
          title={'Library_25'}
          description={'Located on 3159 Jackson St.'}
        />
        <Marker
          coordinate={{latitude:48.614849352554195, longitude:-123.42004363427455,}}
          title={'Library_26'}
          description={'Located on 1921 Barrett Dr.'}
        />
        <Marker
          coordinate={{latitude:48.44189643216546, longitude:-123.3488520570388,}}
          title={'Library_27'}
          description={'Located on 1326 Basil Ave.'}
        />
      </MapView>
    </View>
  );
};

export default Maps;
