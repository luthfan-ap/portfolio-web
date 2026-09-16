import { ThemeProvider } from "./ThemeContext";
import ProfessionalPortfolio from "./components/ProfessionalPortfolio";
import './portfolio.css';

function App() {
  return (
    <ThemeProvider>
      <ProfessionalPortfolio />
    </ThemeProvider>
  );
}

export default App;
