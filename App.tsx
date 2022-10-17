import { StatusBar } from 'expo-status-bar';

// App
import { Top } from '@/components/Layout/Top';
import { Index } from './src';
import { NavBar } from './src/features/navigation/';

// Providers
import theme from './src/Theme';
import { NativeRouter } from 'react-router-native';
import { ThemeProvider } from '@shopify/restyle';
import { Provider as StateProvider } from 'react-redux';
import { store } from './src/state/store';

export default function App() {
  return (
    <StateProvider store={store}>
      <ThemeProvider theme={theme}>
        <NativeRouter>
          <Top />
          <Index />
          <NavBar />
        </NativeRouter>
        <StatusBar style='auto' />
      </ThemeProvider>
    </StateProvider>
  );
}
