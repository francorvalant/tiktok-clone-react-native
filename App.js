import { ThemeProvider, createTheme } from '@rneui/themed';
import { AuthProvider } from "./src/context";
import { RootNavigation } from "./src/navigation/RootNavigation"

const myTheme = createTheme({
  lightColors: {
    primary: '#f2f2f2',
  },
  darkColors: {
    primary: '#121212',
  },
  mode: 'dark',
});

export default function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </ThemeProvider>
  );
}
