import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Impressum = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>aktenplatz.de - Impressum</title>
      </Helmet>
      <div className="h-screen flex flex-col body">
        <section className="header-container">
          {/* <!-- START --> */}
          <main className="main container mx-auto pt-10 flex-1">
            <section className="sections section-impressum">
              <div className="heading-container">
                <h3 className="heading-section-title">Impressum</h3>
              </div>
              <div className="impressum">
                <div className="impressum-image">
                  <img src="/img/sascha.png" alt="sascha" />
                </div>
                <div className="impressum-content">
                  <div className="impressum-details impressum-address">
                    <p>Sascha Ladewig</p>
                    <p>c/o Impressumservice Dein-Impressum.de</p>
                    <p>Stettiner Str. 41</p>
                    <p>35410 Hungen</p>
                    <p>Deutschland</p>
                  </div>
                  <div className="impressum-details impressum-contact">
                    <p>Tel: +49 89 21542631</p>
                    <p>E-Mail: sascha.ladewig@aktenplatz.de</p>
                  </div>
                  <div className="impressum-details impressum-contact">
                    <p>
                      Umsatzsteuer-Identifikationsnummer gemäß §27 a
                      Umsatzsteuergesetz:
                    </p>
                    <p>DE 341255859</p>
                  </div>
                  <div className="impressum-details">
                    <p>
                      Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
                      <a
                        href="https://ec.europa.eu/odr"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://ec.europa.eu/odr
                      </a>
                    </p>
                  </div>
                  <div className="impressum-details impressum-footer">
                    <div className="impressum-footer-image">
                      <img
                        src="/img/fairness_handle.png"
                        alt="fairness_handle"
                      />
                    </div>
                    <div className="impressum-footer-details">
                      <p>Mitglied der Initiative "Fairness im Handel".</p>
                      <p>
                        Nahere Informationen:{" "}
                        <a
                          href="https://www.fairness-im-handel.de"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://www.fairness-im-handel.de
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* <!-- END --> */}

          <Footer shortPage={true} />
        </section>
      </div>
    </>
  );
};

export default Impressum;
