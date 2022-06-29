import React, {forwardRef, useCallback} from 'react';
import {TouchableOpacity, Animated, View} from 'react-native';

type Props = {
  onPress: (index: number) => void;
  index: number;
  opacity: Animated.AnimatedInterpolation;
  ref: React.RefObject<any>;
  children: React.ReactNode;
};

export const TabBarItem = forwardRef<any, Props>((props, ref) => {
  const handlePress = useCallback(() => {
    props.onPress(props.index);
  }, [props]);

  return (
    <TouchableOpacity
      style={{paddingHorizontal: 16, paddingTop: 16, alignItems: 'center'}}
      onPress={handlePress}>
      <View style={{paddingBottom: 4}} ref={ref}>
        <Animated.Text
          style={{color: 'white', fontSize: 16, opacity: props.opacity}}>
          {props.children}
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
});
TabBarItem.displayName = 'TabBarItem';
