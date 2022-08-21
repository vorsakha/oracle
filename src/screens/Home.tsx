import React, { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import { theme } from '../styles/theme';

interface Props extends PropsWithChildren {
  title: string;
}

function Section({ children, title }: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SectionContainer>
      <SectionTitle color={isDarkMode ? 'white' : 'black'}>
        {title}
      </SectionTitle>
      <SectionDescription color={isDarkMode ? 'white' : 'black'}>
        {children}
      </SectionDescription>
    </SectionContainer>
  );
}

function Home() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? theme.colors.black : theme.colors.white,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode
              ? theme.colors.black
              : theme.colors.white,
          }}
        >
          <Section title="Step One">
            Edit <Highlight>App.tsx</Highlight> to change this screen and then
            come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const SectionContainer = styled(SafeAreaView)`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

const SectionTitle = styled(Text)<{ color: 'black' | 'white' }>`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors[props.color]};
`;

const SectionDescription = styled(Text)<{ color: 'black' | 'white' }>`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.theme.colors[props.color]};
`;

const Highlight = styled(Text)`
  font-weight: 700;
`;

export default Home;
