import React, { PropsWithChildren, useContext } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import { CustomThemeContext } from '../context/theme';

interface Props extends PropsWithChildren {
  title: string;
}

function Section({ children, title }: Props) {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{children}</SectionDescription>
    </SectionContainer>
  );
}

function Home() {
  const { toggleTheme } = useContext(CustomThemeContext);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <Container>
          <Button title="toggle theme" onPress={toggleTheme} />
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
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionContainer = styled.SafeAreaView`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const SectionDescription = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Highlight = styled.Text`
  font-weight: 700;
`;

export default Home;
