import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StoryBookStack = createNativeStackNavigator();

function StoryNavigator(story: any) {
  const Screen = () => story();

  return (
    <NavigationContainer independent>
      <StoryBookStack.Navigator>
        <StoryBookStack.Screen
          name="Home"
          component={Screen}
          options={{ header: () => null, animation: 'none' }}
        />
        <StoryBookStack.Screen
          name="Search"
          component={Screen}
          options={{ header: () => null, animation: 'none' }}
        />
      </StoryBookStack.Navigator>
    </NavigationContainer>
  );
}

export default StoryNavigator;
