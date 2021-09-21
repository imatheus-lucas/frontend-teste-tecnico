import { GlobalStyles } from './styles/GlobalStyles';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './styles/Themes';
function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
