import Footer from "../components/Footer";
import Header from "../components/Header";
import Switch from "../components/Switch";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

function Preise({ content: { title } }) {
  const [enabled, setEnabled] = useState(false);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Aktenplatz.de Preise</title>
      </Helmet>

      <div className="h-screen flex flex-col body">
        <section className="header-container">
          <section className="sections section-pricing">
            <div className="flex items-center justify-center text-center flex-col mt-32 mb-20 mx-auto px-[20px] lg:px-[40px]">
              <div className="text-orange tracking-wide mb-3">
                PREISGESTALTUNG
              </div>
              <div className="text-4xl sm:text-5xl font-bold">{title}</div>
              <div className="mx-auto max-w-[800px] mt-5 leading-relaxed">
                Hier finden Sie die aktuelle Preisliste von Aktenplatz. Alle
                Preise verstehen sich zuzüglich 19% Mehrwertsteuer.
              </div>
            </div>

            <div className="flex items-center gap-3 w-fit mx-auto pb-7">
              <div>Monthly</div>
              <Switch enabled={enabled} setEnabled={setEnabled} />
              <div>Anually</div>
            </div>

            <div className="main-pricing-flex mx-auto flex items-start  gap-5 mb-20">
              <div className="transform translate-y-[235px] leftbar-pricing">
                <div className="text-orange font-bold text-xl mb-[0.5rem] w-full bg-white rounded-md px-3 py-2">
                  KURZPROFIL
                </div>
                <div className="opacity-80">Beschreibung</div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <div className="flex flex-col gap-4 mb-10">
                  <div className="opacity-80">Speicherplatz inklusive</div>
                  <div className="opacity-80">Je weitere 100GB Speicher</div>
                  <div className="opacity-80">Jeder weitere Nutzer</div>
                </div>

                <div className="text-orange font-bold text-xl mb-[0.5rem] w-full bg-white rounded-md px-3 py-2">
                  Merkmale
                </div>

                <div className="flex flex-col gap-[3.2rem] mb-10">
                  <div className="opacity-80">Aktenschrank Sicht</div>
                  <div className="opacity-80">Kalender Sicht</div>
                  <div className="opacity-80">Benutzer / Rollenkonzept</div>
                  <div className="opacity-80">Benutzerdefinierte Felder</div>
                  <div className="opacity-80">Externer Zugriff</div>
                  <div className="opacity-80">Push Benachrichtigungen</div>
                  <div className="opacity-80">Dokumentenablage</div>
                  <div className="opacity-80">
                    Zugriff über Explorer (ähnl. Netzlaufwerk)
                  </div>
                  <div className="opacity-80">Erinnerungen</div>
                  <div className="opacity-80">
                    Smartphone- und Tablet Oberfläche
                  </div>
                  <div className="opacity-80">Dokumenten-Scan aus App</div>
                  <div className="opacity-80">Aufgabenmanagement (TODO)</div>
                  <div className="opacity-80">Papierakten Label</div>
                  <div className="opacity-80">QR-Code Scanner</div>
                </div>

                <div className="text-orange font-bold text-xl mb-[0.5rem] w-full bg-white rounded-md px-3 py-2">
                  Schnittstellen
                </div>

                <div className="flex flex-col gap-[3.2rem] mb-10">
                  <div className="opacity-80">
                    Outlook Kalender und Kontakte
                  </div>
                  <div className="opacity-80">Datev</div>
                  <div className="opacity-80">Lexware</div>
                  <div className="opacity-80">Praxident</div>
                  <div className="opacity-80">Steuersoft</div>
                  <div className="opacity-80">Revisionssicheres Archiv</div>
                </div>

                <div className="text-orange font-bold text-xl mb-[0.5rem] w-full bg-white rounded-md px-3 py-2">
                  Installation
                </div>

                <div className="flex flex-col gap-[3.2rem] mb-10">
                  <div className="opacity-80">Cloud</div>
                  <div className="opacity-80">Lokal</div>
                  <div className="opacity-80">Single Sign-On</div>
                  <div className="opacity-80">Tempaltes</div>
                </div>

                <div className="text-orange font-bold text-xl mb-[0.5rem] w-full bg-white rounded-md px-3 py-2">
                  Sicherheit
                </div>

                <div className="flex flex-col gap-[3.2rem]">
                  <div className="opacity-80">DGSVO Konform</div>
                  <div className="opacity-80">Deutsches Rechenzentrum</div>
                </div>
              </div>

              {/* <!-- PRICING --> */}

              <div className=" pricing-cards-flex gap-5">
                <div className="pricing text-center bg-white  w-full relative">
                  <div className="pricing-title flex items-center justify-center text-xl font-bold  bg-[#FFF2ED] text-orange text-center px-5 py-4">
                    Einzelplatz
                  </div>
                  <div className="w-full px-4">
                    <div className="text-4xl font-bold opacity-80 mt-5 mb-1">
                      {enabled === false ? "10,00 €" : "50,00 €"}
                    </div>
                    <div className="text-[#8D9AA9] text-base">
                      {enabled === false ? "Per Month" : "Per Year"}
                    </div>
                    <a
                      href="https://app.Aktenplatz.de/register"
                      target="_blank"
                    >
                      <button className="pricing-btn w-full rounded py-2 mt-7 transition text-orange hover:text-white font-bold">
                        Kostenlos testen
                      </button>
                    </a>

                    <div
                      className="text-[15px] leading-relaxed mt-10 opacity-80"
                      style={{ height: "300px" }}
                    >
                      Unser Einstiegspaket für alle Freelancer. Bekommen Sie
                      alle Funktionen die Sie zur Sortierung Ihrer Akten
                      br/auchen.
                    </div>

                    <div className="text-[15.3px] names-pricing-f hidden mb-5">
                      Speicherplatz inklusive
                    </div>
                    <div className="font-bold opacity-80 mb-5">50GB</div>
                    <div className="text-[15.3px] names-pricing-f hidden mb-5">
                      Je weitere 100GB Speicher
                    </div>
                    <div className="font-bold opacity-80 mb-5">6,00 €</div>
                    <div className="text-[15.3px] names-pricing-f hidden mb-5">
                      Jeder weitere Nutzer
                    </div>
                    <div className="font-bold opacity-80 mb-5">-</div>

                    <br />
                    <br />
                    <div
                      className="text-[20.3px] names-pricing-f hidden mb-5"
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Merkmale
                    </div>
                    <br />

                    <div className="flex flex-col">
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Aktenschrank Sicht
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Kalender Sicht
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Benutzer / Rollenkonzept
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Benutzerdefinierte Felder
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Externer Zugriff
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Push Benachrichtigungen
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Dokumentenablage
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Zugriff über Explorer (ähnl. Netzlaufwerk)
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Erinnerungen
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Smartphone- und Tablet Oberfläche
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Dokumenten-Scan aus App
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Aufgabenmanagement (TODO)
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Papierakten Label
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        QR-Code Scanner
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[1.0rem]"
                      />
                    </div>

                    <br />
                    <br />
                    <div
                      className="text-[20.3px] names-pricing-f hidden mb-5"
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Schnittstellen
                    </div>
                    <br />

                    <div className="flex flex-col">
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Outlook Kalender und Kontakte
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto mb-[3.0rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Datev
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto mb-[3.0rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Lexware
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Praxident
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Steuersoft
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto mb-[3.0rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Revisionssicheres Archiv
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto"
                      />
                    </div>

                    <br />
                    <br />
                    <div
                      className="text-[20.3px] names-pricing-f hidden mb-5"
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Installation
                    </div>
                    <br />
                    <br />

                    <div className="flex flex-col">
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Cloud
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[2.5rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Lokal
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Single Sign-On
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Tempaltes
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto"
                      />
                    </div>

                    <br />
                    <br />
                    <div
                      className="text-[20.3px] names-pricing-f hidden mb-5"
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Sicherheit
                    </div>
                    <br />
                    <br />

                    <div className="flex flex-col">
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        DGSVO Konform
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.0rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Deutsches Rechenzentrum
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto"
                      />
                    </div>
                    <br />
                    <br />
                  </div>
                </div>

                <div className="pricing text-center bg-white   w-full relative">
                  {/* <!-- <div
                        className="absolute -top-[15px] left-1/2 popular-tag px-[7px] py-2  bg-orange text-white rounded text-[11px] font-bold tracking-wide">
                        Beliebt</div> --> */}
                  <div className="pricing-title flex items-center justify-center text-xl font-bold  bg-[#FFF2ED] text-orange text-center px-5 py-4">
                    Team
                  </div>
                  <div className="w-full px-5">
                    <div className="text-4xl font-bold opacity-80 mt-5 mb-1">
                      {enabled === false ? "20,00 €" : "90,00 €"}
                    </div>
                    <div className="text-[#8D9AA9] text-base">
                      {enabled === false ? "Per Month" : "Per Year"}
                    </div>
                    <a
                      href="https://app.Aktenplatz.de/register"
                      target="_blank"
                    >
                      <button className="pricing-btn w-full rounded py-2 mt-7 transition text-orange hover:text-white font-bold">
                        Kostenlos testen
                      </button>
                    </a>
                    <div
                      className="text-[15px] leading-relaxed mt-10 opacity-80"
                      style={{ height: "300px" }}
                    >
                      Arbeiten Sie im Team? Dieses Paket bietet Ihnen alle
                      Funktionen um gemeinsam Ihre Akten im Blick zu behalten
                      und mit Ihren Kollegen zu bearbeiten.
                    </div>

                    <div className="text-[15.3px] names-pricing-f hidden mb-5">
                      Speicherplatz inklusive
                    </div>
                    <div className="font-bold opacity-80 mb-5">100GB</div>
                    <div className="text-[15.3px] names-pricing-f hidden mb-5">
                      Je weitere 100GB Speicher
                    </div>
                    <div className="font-bold opacity-80 mb-5">6,00 €</div>
                    <div className="text-[15.3px] names-pricing-f hidden mb-5">
                      Jeder weitere Nutzer
                    </div>
                    <div className="font-bold opacity-80 mb-5">5,00 €</div>

                    <br />
                    <br />
                    <div
                      className="text-[20.3px] names-pricing-f hidden mb-5"
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Merkmale
                    </div>
                    <br />

                    <div className="flex flex-col">
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Aktenschrank Sicht
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Kalender Sicht
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Benutzer / Rollenkonzept
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Benutzerdefinierte Felder
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Externer Zugriff
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Push Benachrichtigungen
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Dokumentenablage
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Zugriff über Explorer (ähnl. Netzlaufwerk)
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Erinnerungen
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Smartphone- und Tablet Oberfläche
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Dokumenten-Scan aus App
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Aufgabenmanagement (TODO)
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Papierakten Label
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        QR-Code Scanner
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[1.0rem]"
                      />
                    </div>

                    <br />
                    <br />
                    <div
                      className="text-[20.3px] names-pricing-f hidden mb-5"
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Schnittstellen
                    </div>
                    <br />

                    <div className="flex flex-col">
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Outlook Kalender und Kontakte
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.0rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Datev
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto mb-[3.0rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Lexware
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Praxident
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Steuersoft
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto mb-[3.0rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Revisionssicheres Archiv
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto"
                      />
                    </div>

                    <br />
                    <br />
                    <div
                      className="text-[20.3px] names-pricing-f hidden mb-5"
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Installation
                    </div>
                    <br />
                    <br />

                    <div className="flex flex-col">
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Cloud
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[2.5rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Lokal
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Single Sign-On
                      </div>
                      <img
                        src="/img/close.svg"
                        alt="close"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Tempaltes
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto"
                      />
                    </div>

                    <br />
                    <br />
                    <div
                      className="text-[20.3px] names-pricing-f hidden mb-5"
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Sicherheit
                    </div>
                    <br />
                    <br />

                    <div className="flex flex-col">
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        DGSVO Konform
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.0rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Deutsches Rechenzentrum
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto"
                      />
                    </div>
                    <br />
                    <br />
                  </div>
                </div>

                <div className="pricing text-center bg-white  w-full relative">
                  <div className="pricing-title flex items-center justify-center text-xl font-bold  bg-[#FFF2ED] text-orange text-center px-5 py-4">
                    Professionell
                  </div>
                  <div className="w-full px-4">
                    <div className="text-4xl font-bold opacity-80 mt-5 mb-1">
                      {enabled === false ? "60,00 €" : "120,00 €"}
                    </div>
                    <div className="text-[#8D9AA9] text-base">
                      {enabled === false ? "Per Month" : "Per Year"}
                    </div>
                    <a
                      href="https://app.Aktenplatz.de/register"
                      target="_blank"
                    >
                      <button className="pricing-btn w-full rounded py-2 mt-7 transition text-orange hover:text-white font-bold">
                        Kostenlos testen
                      </button>
                    </a>

                    <div
                      className="text-[15px] leading-relaxed mt-10 opacity-80"
                      style={{ height: "300px" }}
                    >
                      Br/auchen Sie besondere Schnittstellen zu vorhandener
                      Software? Dann ist dieses Paket genau das Richtige für
                      Sie.
                    </div>

                    <div className="text-[15.3px] names-pricing-f hidden mb-5">
                      Speicherplatz inklusive
                    </div>
                    <div className="font-bold opacity-80 mb-5">500GB</div>
                    <div className="text-[15.3px] names-pricing-f hidden mb-5">
                      Je weitere 100GB Speicher
                    </div>
                    <div className="font-bold opacity-80 mb-5">6,00 €</div>
                    <div className="text-[15.3px] names-pricing-f hidden mb-5">
                      Jeder weitere Nutzer
                    </div>
                    <div className="font-bold opacity-80 mb-5">5,00 €</div>

                    <br />
                    <br />
                    <div
                      className="text-[20.3px] names-pricing-f hidden mb-5"
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Merkmale
                    </div>
                    <br />

                    <div className="flex flex-col">
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Aktenschrank Sicht
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Kalender Sicht
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Benutzer / Rollenkonzept
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Benutzerdefinierte Felder
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Externer Zugriff
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Push Benachrichtigungen
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Dokumentenablage
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Zugriff über Explorer (ähnl. Netzlaufwerk)
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Erinnerungen
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Smartphone- und Tablet Oberfläche
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Dokumenten-Scan aus App
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Aufgabenmanagement (TODO)
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Papierakten Label
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        QR-Code Scanner
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[1.0rem]"
                      />
                    </div>

                    <br />
                    <br />
                    <div
                      className="text-[20.3px] names-pricing-f hidden mb-5"
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Schnittstellen
                    </div>
                    <br />

                    <div className="flex flex-col">
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Outlook Kalender und Kontakte
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.0rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Datev
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.0rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Lexware
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Praxident
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Steuersoft
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.0rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Revisionssicheres Archiv
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto"
                      />
                    </div>

                    <br />
                    <br />
                    <div
                      className="text-[20.3px] names-pricing-f hidden mb-5"
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Installation
                    </div>
                    <br />
                    <br />

                    <div className="flex flex-col">
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Cloud
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[2.5rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Lokal
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Single Sign-On
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.3rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Tempaltes
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto"
                      />
                    </div>

                    <br />
                    <br />
                    <div
                      className="text-[20.3px] names-pricing-f hidden mb-5"
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Sicherheit
                    </div>
                    <br />
                    <br />

                    <div className="flex flex-col">
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        DGSVO Konform
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto mb-[3.0rem]"
                      />
                      <div className="text-[15.3px] names-pricing-f hidden mb-5">
                        Deutsches Rechenzentrum
                      </div>
                      <img
                        src="/img/Check.svg"
                        alt="check"
                        className="mx-auto"
                      />
                    </div>
                    <br />
                    <br />
                  </div>
                </div>

                {/* <div className="pricing text-center bg-white  w-full relative">
                        <div
                            className="absolute -top-[15px] left-1/2 popular-tag px-[7px] py-2  bg-orange text-white rounded text-[11px] font-bold tracking-wide">
                            Noch 45 übr/ig</div>
                        <div
                            className="pricing-title flex items-center justify-center text-xl font-bold  bg-[#FFF2ED] text-orange text-center px-5 py-4">
                            Unterstützer</div>
                        <div className="w-full px-5">
                            <div className="text-4xl font-bold opacity-80 mt-5 mb-1">50,00 €</div>
                            <div className="text-[#8D9AA9] text-base">Einmalig</div>
                            <a href="https://www.paypal.com/donate/?hosted_button_id=S294CDJ4CMYMC" target="_blank">
                                <button
                                    className="pricing-btn w-full rounded py-2 mt-7 transition text-orange hover:text-white font-bold">Jetzt
                                    sichern!
                                </button>
                            </a>
                            <div className="text-[15px] leading-relaxed mt-10 opacity-80" style={{height: '300px'}}>
                                Seien Sie einer unserer ersten Kunden und profitieren Sie von diesem einmaligen Angebot.
                                Keine laufenden Kosten. Einmal bezahlen, für immer nutzen.
                            </div>
                            <div className="text-[15.3px] names-pricing-f hidden mb-5">Speicherplatz</div>
                            <div className="font-bold opacity-80 mb-5">unbegrenzt</div>
                            <div className="text-[15.3px] names-pricing-f hidden mb-5">Jeder weitere Nutzer</div>
                            <div className="font-bold opacity-80 mb-5">kostenlos</div>
                            <br/>
                            <br/>
                            <div className="text-[20.3px] names-pricing-f hidden mb-5"
                                style={{textDecoration: 'underline', fontWeight: 'bold'}}>Merkmale</div>
                            <br/>
                            <div className="flex flex-col">
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Aktenschrank Sicht</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]" />
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Kalender Sicht</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]" />
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Benutzer / Rollenkonzept</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]" />
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Benutzerdefinierte Felder</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]" />
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Externer Zugriff</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]" />
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Push Benachrichtigungen</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]" />
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Dokumentenablage</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]" />
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Zugriff über Explorer (ähnl.
                                    Netzlaufwerk)</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]" />
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Erinnerungen</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]" />
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Smartphone- und Tablet Oberfläche
                                </div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]" />
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Dokumenten-Scan aus App</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]" />
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Aufgabenmanagement (TODO)</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]" />
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Papierakten Label</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]" />
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">QR-Code Scanner</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[1.0rem]" />
                            </div>
                            <br/>
                            <br/>
                            <div className="text-[20.3px] names-pricing-f hidden mb-5"
                                style={{textDecoration: 'underline', fontWeight: 'bold'}}>Schnittstellen</div>
                            <br/>
                            <div className="flex flex-col">
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Outlook Kalender und Kontakte
                                </div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.0rem]"/>
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Datev</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.0rem]"/>
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Lexware</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]"/>
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Praxident</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]"/>
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Steuersoft</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto"/>
                            </div>
                            <br/>
                            <br/>
                            <div className="text-[20.3px] names-pricing-f hidden mb-5"
                                style={{textDecoration: 'underline', fontWeight: 'bold'}}>Installation</div>
                            <br/>
                            <br/>
                            <div className="flex flex-col">
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Cloud</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[2.5rem]"/>
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Lokal</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]"/>
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Single Sign-On</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.3rem]"/>
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Tempaltes</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto"/>
                            </div>
                            <br/>
                            <br/>
                            <div className="text-[20.3px] names-pricing-f hidden mb-5"
                                style={{textDecoration: 'underline', fontWeight: 'bold'}}>
                                Sicherheit</div>
                            <br/>
                            <br/>
                            <div className="flex flex-col">
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">DGSVO Konform</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto mb-[3.0rem]"/>
                                <div className="text-[15.3px] names-pricing-f hidden mb-5">Deutsches Rechenzentrum</div>
                                <img src="/img/Check.svg" alt="check" className="mx-auto"/>
                            </div>
                            <br/>
                            <br/>
                        </div>
                    </div> */}
              </div>
            </div>
          </section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Preise;
