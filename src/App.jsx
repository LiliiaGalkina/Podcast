import "./reset.scss";
import "./App.scss";
import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoute from "./components/Main/AppRoute";
import { useRef } from "react";

function App() {
  const episodes = useRef(null);
  const pricing = useRef(null);
  const feedback = useRef(null);
  const benefits = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <Router>
      <Header
        pricing={pricing}
        feedback={feedback}
        benefits={benefits}
        scrollToSection={scrollToSection}
      />
      <AppRoute
        pricing={pricing}
        feedback={feedback}
        benefits={benefits}
      />
      <Footer
        pricing={pricing}
        feedback={feedback}
        benefits={benefits}
        scrollToSection={scrollToSection}
      />
    </Router>
  );
}

export default App;
