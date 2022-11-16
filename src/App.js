import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Kieferorthopaedie from "./pages/Kieferorthopaedie";
import PageNotFound from "./pages/PageNotFound";
import Preise from "./pages/Preise";
import Revisionssicher from "./pages/Revisionssicher";
import Steuerkanzleien from "./pages/Steuerkanzleien";
import Termin from "./pages/Termin";
import { languageData } from "./language";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [language, setLanguage] = useState(
    searchParams.get("lang") === null ? "DE" : searchParams.get("lang")
  );
  const [content, setContent] = useState(languageData.german);
  const location = useLocation();
  //adjust the content based on the param and also set the local storage item for later use
  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    if (currentParams.lang === "EN") {
      setContent(languageData.english);
    }
    if (currentParams.lang === "DE") {
      setContent(languageData.german);
    }
  }, [searchParams]);
  //retain the query param even after you change pages
  useEffect(() => {
    setSearchParams({ lang: language });
  }, [location.pathname, location.search]);

  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
        content={content.header}
      />
      <Routes>
        <Route path="/" element={<Home content={content.home} />} />
        <Route path="/preise" element={<Preise content={content.price} />} />
        <Route path="/steuerkanzleien" element={<Steuerkanzleien />} />
        <Route path="/kieferorthopaedie" element={<Kieferorthopaedie />} />
        <Route path="/revisionssicher" element={<Revisionssicher />} />
        <Route path="/termin" element={<Termin />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
