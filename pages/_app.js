import { useEffect } from "react"
import '../styles/global.css';

function App({ Component, pageProps }) {
  useEffect(() => {
    document.title = "Kailash Gautham"
  }, [])
  return <Component {...pageProps} />;
}

export default App;