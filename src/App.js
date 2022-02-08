import { ThemeProvider } from "./context/theme";
import GlobalStyle from "./components/styles/global";
import NavBar from "./components/navBar";
import Calculator from "./components/calculator";
import Footer from "./components/footer";
import { IsMobileProvider } from "./context/isMobile";

function App() {
  return (
    <IsMobileProvider>
      <ThemeProvider>
        <GlobalStyle />
        <NavBar />
        <main>
          <Calculator />
        </main>
        <Footer />
      </ThemeProvider>
    </IsMobileProvider>
  );
}

export default App;
