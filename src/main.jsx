import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SplashLoader from './components/SplashLoader.jsx'

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <SplashLoader onAnimationComplete={() => setIsLoading(false)} />
      ) : (
        <App />
      )}
    </>
  );
}

createRoot(document.getElementById('root')).render(<Root />);