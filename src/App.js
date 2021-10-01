import { ThemeProvider } from "./context/theme";
import GlobalStyle from "./components/styles/global";
import NavBar from "./components/navBar";
import Calculator from "./components/calculator";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <NavBar />
      <main>
        <Calculator />
      </main>
      <footer>Made with ❤️ by BlueForced</footer>
    </ThemeProvider>
  );
}

export default App;
