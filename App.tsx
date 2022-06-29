/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {TabView} from 'react-native-tab-view';
import type {Props as TabViewProps} from 'react-native-tab-view/lib/typescript/TabView';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TabBar} from './src/components/TabBar';

const FirstRoute = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.64)',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{color: 'white', fontSize: 24}}>First page</Text>
  </View>
);

const SecondRoute = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#171923',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{color: 'white', fontSize: 24}}>Second page</Text>
  </View>
);

const ThirdRoute = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#1A202C',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{color: 'white', fontSize: 24}}>Third page</Text>
  </View>
);

const FourthRoute = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#2D3748',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{color: 'white', fontSize: 24}}>Fourth page</Text>
  </View>
);
const FifthRoute = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#4A5568',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{color: 'white', fontSize: 24}}>Fifth page</Text>
  </View>
);

const tabRoutes = [
  {key: 'first', title: 'First'},
  {key: 'second', title: 'Second'},
  {key: 'third', title: 'Third'},
  {key: 'fourth', title: 'Fourth'},
  {key: 'fifth', title: 'Fifth'},
] as const;

type TabRoutes = typeof tabRoutes;

type TabViewRoute = {
  key: TabRoutes[number]['key'];
  title: TabRoutes[number]['title'];
};

type RenderSceneProps = Parameters<
  TabViewProps<TabViewRoute>['renderScene']
>[0];
const renderScene = ({route}: RenderSceneProps) => {
  switch (route.key) {
    case 'first':
      return <FirstRoute />;
    case 'second':
      return <SecondRoute />;
    case 'third':
      return <ThirdRoute />;
    case 'fourth':
      return <FourthRoute />;
    case 'fifth':
      return <FifthRoute />;
    default:
      return null;
  }
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [index, setIndex] = useState(0);
  const [routes] = useState<TabViewRoute[]>(
    tabRoutes as unknown as TabViewRoute[],
  );

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TabView<TabViewRoute>
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => <TabBar {...props} onIndexChange={setIndex} />}
      />
    </SafeAreaView>
  );
};

export default App;
