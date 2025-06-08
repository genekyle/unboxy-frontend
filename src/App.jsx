import { useEffect, useState } from 'react';
import ProductList from './components/ProductList/ProductList.jsx';

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
    <main className="p-8 font-sans">
      <h1>
        Welcome to Unboxy
      </h1>
      <h1>Sass Is Working</h1>
      <p>Backend API Status: <strong>{apiStatus}</strong></p>
      <hr style={{ margin: "2rem 0" }} />
      <ProductList apiBase={apiBase} />
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
      </div>
    </main>
  );
}

export default App;