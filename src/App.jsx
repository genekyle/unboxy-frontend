import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  const [apiStatus, setApiStatus] = useState("Checking...");

  const apiBase = import.meta.env.PROD
    ? "https://api.unbxy.com"
    : "http://localhost:8000";

  useEffect(() => {
    fetch(`${apiBase}/api/status`)
      .then((res) => res.json())
      .then((data) => setApiStatus(data.message))
      .catch(() => setApiStatus("API unavailable"));
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to Unboxy</h1>
      <p>Backend API Status: <strong>{apiStatus}</strong></p>
      <hr style={{ margin: "2rem 0" }} />
      <ProductList apiBase={apiBase} />
    </main>
  );
}

export default App;