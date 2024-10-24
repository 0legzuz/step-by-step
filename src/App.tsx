
import { GlobalStyle } from "./AppStyles";

import { AppRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom"; 

function App() {
  return (
    <Router>
      
      <GlobalStyle />
      <AppRoutes />
    </Router>
  );
}

export default App;


