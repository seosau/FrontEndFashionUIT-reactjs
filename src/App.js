import { AuthProvider } from "./context/AuthContext";
import RouterCpn from "./Router";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
function App() {
  return (
    <AuthProvider>
      <PrimeReactProvider>
        <RouterCpn />
      </PrimeReactProvider>
    </AuthProvider>
  );
}

export default App;
