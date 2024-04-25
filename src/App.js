import { AuthProvider } from "./context/AuthContext";
import RouterCpn from "./Router";
function App() {
  return (
    <AuthProvider>
      <RouterCpn />
    </AuthProvider>
  );
}

export default App;
