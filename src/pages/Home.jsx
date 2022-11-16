import Footer from "../components/Footer";
import Slider1 from "../components/Slider1";
import Slider2 from "../components/Slider2";
import useOutsideClick from "../hooks/useOutsideClick";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Reviews from "../components/Reviews";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

//the details component that opens when you click the icons in second section
const FolderDetails = ({ img, desc1, desc2, name, setOpenDetails }) => {
  const handleClickOutside = () => {
    setOpenDetails(Array(6).fill(false));
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <div
      ref={ref}
      className="details-div cursor-auto xl:top-0 z-40 flex justify-center w-[95%] sm:w-full min-w-[350px] items-start flex-col rounded p-5 absolute right-1/2 sm:translate-x-0 translate-x-1/2 xl:left-[100%] top-[102%] bg-white shadow-lg"
    >
      <img
        src="/img/close.svg"
        alt=""
        onClick={() => {
          setOpenDetails(Array(6).fill(false));
        }}
        className="absolute cursor-pointer top-[6px] right-[6px]"
      />
      <img src={img} alt="" />
      <h2 className="text-orange text-[30px] font-bold capitalize">{name}</h2>
      <p className="text-[#696969] text-sm font-normal mt-3">{desc1}</p>
      <p className="text-[#696969] text-sm font-normal mt-3 mb-5">{desc2}</p>
      <button className="btn-primary">KNOW MORE</button>
    </div>
  );
};

function Home({ content: { section1 } }) {
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [openDetails, setOpenDetails] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const location = useLocation();
  useEffect(() => {
    if (window.location.href === "http://localhost:3000/#funktionen") {
      handleClick();
    } else if (window.location.href === "https://aktenplatz.de/#funktionen") {
      handleClick();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const ref = useRef(null);
  const openDetailsFunc = (index) => {
    setOpenDetails((prev) => {
      let copy = Array(6).fill(false);
      copy[index] = prev[index];
      if (!prev[index]) {
        copy[index] = true;
        return copy;
      } else {
        return Array(6).fill(false);
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>aktenplatz.de - organisiert & strukturiert das Arbeiten</title>
      </Helmet>

      <div className="lg:overflow-x-visible overflow-x-hidden  h-screen flex flex-col body">
        <section className="header-container">
          <div className="banner-section container mx-auto mt-10">
            <div className="banner-col col-1 transform lg:-translate-y-[80px]">
              <div className="banner-col-1-content">
                <h1 className="banner-title">{section1.title}</h1>
                <p className="banner-description">{section1.desc}</p>
                <a
                  href="https://app.Aktenplatz.de/register"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  {section1.btnText}
                </a>
                <p></p>
                <br />
                <p className="banner-description">{section1.subDesc}</p>
                <div className="app-logos">
                  <a
                    href="https://apps.apple.com/us/app/aktenplatz/id1620033655?itsct=apps_box_badge&amp;itscg=30200"
                    target=" _blank"
                  >
                    <img
                      alt="Download on the App Store"
                      src="/img/apple_appstore.png"
                      style={{ maxHeight: "50px", marginTop: "0px" }}
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.aktenplatz.aktenplatz&gl=DE&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="Jetzt bei Google Play"
                      src="/img/google-play-badge.png"
                      style={{ maxHeight: "50px", marginTop: "0px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="banner-col col-2 relative max-h-[500px]">
              <a
                href="https://www.youtube.com/watch?v=ce5Fe6UtQl0"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/home.svg"
                  alt="banner-logo"
                  className="banner-logo max-h-[512px] transform lg:translate-y-[0px]"
                />
              </a>

              <Reviews
                content={[section1.review1, section1.review2, section1.review3]}
              />
            </div>
          </div>
        </section>
        {/* hexagon section ------------------ */}
        <div className="container relative lg:mt-0 mt-[120px] mb-0 sm:mb-[40px] mx-auto  px-5 product-module w-full flex justify-center items-center flex-col">
          <div className="heading-container">
            <h4 className="heading-title" id="Vorteile">
              aktenplatz
            </h4>
            <h3 className="heading-section-title">Produktmodule</h3>
          </div>
          <div className="product-grid w-full gap-x-[10px] lg:gap-x-[20px] xl:min-w-0 min-w-[840px]  grid max-w-[1400px] grid-cols-14 grid-rows-[115px_115px_115px] xl:grid-rows-[200px_200px_200px]">
            <div className="hex-border-no-hover translate-y-5 xl:translate-y-[40px] col-start-2 col-end-4">
              <div className="bg-orange opacity-[0.18] hexagon "></div>
            </div>
            <div className="hex-border translate-y-5 xl:translate-y-[40px]">
              <div className="hexagon bg-black "></div>
            </div>
            <div className="info-wrapper">
              {openDetails[0] && (
                <FolderDetails
                  img={"/img/mail.svg"}
                  name="Mail"
                  desc1={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  }
                  desc2={
                    "Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }
                  setOpenDetails={setOpenDetails}
                />
              )}
              <div
                onClick={() => openDetailsFunc(0)}
                className="hex-border translate-y-5 xl:translate-y-[40px]"
              >
                <div className="hexagon bg-white ">
                  <img
                    className="xl:w-[69px] w-[40px]"
                    src="/img/mail.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="info-wrapper">
              {openDetails[1] && (
                <FolderDetails
                  img={"/img/folder.svg"}
                  name="Folder"
                  desc1={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  }
                  desc2={
                    "Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }
                  setOpenDetails={setOpenDetails}
                />
              )}
              <div
                onClick={() => openDetailsFunc(1)}
                className="hex-border translate-y-5 xl:translate-y-[40px]"
              >
                <div className="hexagon bg-white ">
                  <img
                    className="xl:w-[69px] w-[40px]"
                    src="/img/folder.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="hex-border-no-hover translate-y-5 xl:translate-y-[40px]">
              <div className="hexagon bg-black "></div>
            </div>
            <div className="hex-border-no-hover translate-y-5 xl:translate-y-[40px]">
              <div className="hexagon bg-orange opacity-[0.18]"></div>
            </div>
            <div className="hex-border-no-hover  col-start-1 col-end-3">
              <div className="hexagon bg-black"></div>
            </div>
            <div className="hex-border-no-hover">
              <div className="hexagon bg-orange "></div>
            </div>
            <div className="info-wrapper">
              {openDetails[2] && (
                <FolderDetails
                  img={"/img/archive.svg"}
                  name="Archive"
                  desc1={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  }
                  desc2={
                    "Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }
                  setOpenDetails={setOpenDetails}
                />
              )}
              <div onClick={() => openDetailsFunc(2)} className="hex-border">
                <div className="hexagon bg-white">
                  <img
                    className="xl:w-[69px] w-[40px]"
                    src="/img/archive.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="hex-border-no-hover">
              <div className="hexagon bg-white">
                <img
                  className="xl:w-[69px] w-[40px] object-contain"
                  src="/img/logo.png"
                  alt=""
                />
              </div>
            </div>
            <div className="info-wrapper">
              {openDetails[3] && (
                <FolderDetails
                  img={"/img/contact.svg"}
                  name="contact"
                  desc1={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  }
                  desc2={
                    "Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }
                  setOpenDetails={setOpenDetails}
                />
              )}
              <div
                className="hex-border"
                onClick={() => {
                  openDetailsFunc(3);
                }}
              >
                <div className="hexagon bg-white">
                  <img
                    className="pointer-events-none w-[40px] xl:w-[69px]"
                    src="/img/contact.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="hex-border-no-hover">
              <div className="hexagon bg-orange"></div>
            </div>
            <div className="hex-border-no-hover">
              <div className="hexagon bg-white"></div>
            </div>
            <div className="hex-border-no-hover -translate-y-5 xl:translate-y-[-40px] col-start-2 col-end-4">
              <div className="hexagon   bg-orange opacity-[0.18]"></div>
            </div>
            <div className="hex-border-no-hover -translate-y-5 xl:translate-y-[-40px]">
              <div className="hexagon  bg-black"></div>
            </div>
            <div className="info-wrapper">
              {openDetails[4] && (
                <FolderDetails
                  img={"/img/connect.svg"}
                  name="Connect"
                  desc1={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  }
                  desc2={
                    "Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }
                  setOpenDetails={setOpenDetails}
                />
              )}
              <div
                onClick={() => openDetailsFunc(4)}
                className="hex-border -translate-y-5 xl:translate-y-[-40px]"
              >
                <div className="hexagon  bg-white">
                  <img
                    className="xl:w-[69px] w-[40px]"
                    src="/img/connect.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="info-wrapper">
              {openDetails[5] && (
                <FolderDetails
                  img={"/img/device.svg"}
                  name="Devices"
                  desc1={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  }
                  desc2={
                    "Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }
                  setOpenDetails={setOpenDetails}
                />
              )}
              <div
                onClick={() => openDetailsFunc(5)}
                className="hex-border -translate-y-5 xl:translate-y-[-40px]"
              >
                <div className="hexagon  bg-white">
                  <img
                    className="xl:w-[69px] w-[40px]"
                    src="/img/device.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="hex-border-no-hover -translate-y-5 xl:translate-y-[-40px]">
              <div className="hexagon  bg-black"></div>
            </div>
            <div className="hex-border-no-hover -translate-y-5 xl:translate-y-[-40px]">
              <div className="hexagon  bg-orange opacity-[0.18]"></div>
            </div>
          </div>
        </div>
        <main className="main container mx-auto pt-10 flex-1">
          <section className="sections section-logos">
            <Slider1 />
          </section>

          <section className="sections section-features">
            <div className="heading-container">
              <h4 className="heading-title" ref={ref} id="funktionen"></h4>
              {/* <!-- <h3 className="heading-section-title">Aktenplatz in vier Schritten</h3> --> */}
            </div>
            <div className="features">
              <div className="feature">
                <div className="feature-content">
                  <h4 className="feature-title">
                    Akten digital ablegen:
                    <br /> Sparen Sie sich Zeit und Nerven
                  </h4>
                  <div className="feature-image sm:flex md:flex lg:flex xl:hidden 2xl:hidden">
                    <img
                      src="/img/animations/animation_FileMove.gif"
                      style={{
                        width: "450px",
                        maxHeight: "400px",
                        borderRadius: "30px",
                      }}
                      alt=""
                    />
                  </div>
                  <p className="feature-description">
                    Akten zu verwalten und sachgerecht zu organisieren ist ein
                    lästiges Unterfangen, welches allerdings an jedem
                    bürogestützten Arbeitsplatz anfällt. Auf Aktenplatz erhalten
                    Sie eine visuelle Darstellung Ihres Arbeitsalltags. Hier
                    können Sie alle Ihre Akten virtuell ablegen und auf diese
                    zurückgreifen, wann immer Sie möchten. Ihr virtueller
                    Aktenplatz auf unserer Website lässt sich vollständig an
                    Ihren individuellen Arbeitsprozess anpassen. Sie können die
                    Ablagen benennen und die digitalen Akten nach jedem
                    Arbeitsschritt verschieben.
                  </p>
                  {/* <!-- <!-- <a href="#" className="btn-primary">Lern mehr</a> --> */}
                </div>
                <div className="feature-image hidden xl:flex 2xl:flex">
                  <img
                    src=" /img/animations/animation_FileMove.gif"
                    style={{
                      width: "450px",
                      maxHeight: "400px",
                      borderRadius: "30px",
                    }}
                    alt=""
                  />
                </div>
              </div>
              <div className="feature">
                <div className="feature-image hidden xl:flex 2xl:flex">
                  <img
                    src="/img/animations/animation_Attach.gif"
                    style={{
                      width: "640px",
                      maxHeight: "400px",
                      borderRadius: "30px",
                    }}
                    alt=""
                  />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">
                    Alle Inhalte Ihrer digitalen Akten auf einen Blick
                  </h4>
                  <div className="feature-image sm:flex md:flex lg:flex xl:hidden 2xl:hidden">
                    <img
                      src="/img/animations/animation_Attach.gif"
                      style={{
                        width: "450px",
                        maxHeight: "400px",
                        borderRadius: "30px",
                      }}
                      alt=""
                    />
                  </div>
                  <p className="feature-description">
                    Belassen Sie es bei Ihren digitalen Akten nicht bei Namen
                    und Ablageorten. Ihre virtuelle Akte ist der zentrale Zugang
                    zu all Ihren Informationen. Egal ob Verknüpfungen oder
                    Dateien. Ziehen Sie einfach jede Information auf Ihre
                    digitale Akte und schon ist sie abgespeichert. So müssen Sie
                    nie wieder unübersichtliche Postfächer oder Tabellen oder
                    Papierakten durchsuchen.
                  </p>
                  {/* <!-- <a href="#" className="btn-primary">Lern mehr</a> --> */}
                </div>
              </div>
              <div className="feature">
                <div className="feature-content">
                  <h4 className="feature-title">
                    Verknüpfen Sie digitale Akten mit Analogen
                  </h4>
                  <div className="feature-image sm:flex md:flex lg:flex xl:hidden 2xl:hidden">
                    <img
                      src="/img/animations/animation_Print.gif"
                      style={{ maxHeight: "400px", borderRadius: "30px" }}
                      alt=""
                    />
                  </div>
                  <p className="feature-description">
                    Sie wollen auf Ihre Papierakten nicht verzichten aber die
                    Vorteile der digitalen Akte auf Aktenplatz nutzen? Kein
                    Problem! Mit einem Klick erstellen Sie den Aktensticker in
                    der Form eines QR-Codes. Nun können den Aktensticker mit
                    Ihrem QR-Code Scanner oder Handy scannen und die digitale
                    Akte erscheint sofort auf Ihrem gewünschten elektronischen
                    Gerät.
                  </p>
                  {/* <!-- <a href="#" className="btn-primary">Lern mehr</a> --> */}
                </div>
                <div className="feature-image hidden xl:flex 2xl:flex">
                  <img
                    src="/img/animations/animation_Print.gif"
                    style={{
                      width: "450px",
                      maxHeight: "400px",
                      borderRadius: "30px",
                    }}
                    alt=""
                  />
                </div>
              </div>
              <div className="feature">
                <div className="feature-image hidden xl:flex 2xl:flex">
                  <img
                    src="/img/animations/animation_Team.gif"
                    style={{ maxHeight: "400px", borderRadius: "30px" }}
                    alt=""
                  />
                </div>
                <div className="feature-content">
                  <h4 className="feature-title">Koordinieren Sie ihr Team</h4>
                  <div className="feature-image sm:flex md:flex lg:flex xl:hidden 2xl:hidden">
                    <img
                      src="/img/animations/animation_Team.gif"
                      style={{
                        width: "450px",
                        maxHeight: "400px",
                        borderRadius: "30px",
                      }}
                      alt=""
                    />
                  </div>
                  <p className="feature-description">
                    Laden Sie Ihre Kollegen zu den Projekten ein. Weisen Sie
                    sich die digitalen Akten untereinander zu. Hinterlegen Sie
                    wichtige Hinweise untereinander direkt in den digitalen
                    Akten. Von überall und wann immer Sie wollen können Sie für
                    Ihre Kollegen wichtige Informationen und Materialen direkt
                    über die digitalen Akten zugänglich machen.
                  </p>
                  {/* <!-- <a href="#" className="btn-primary">Lern mehr</a> --> */}
                </div>
              </div>
            </div>
          </section>
          <section className="sections section-focus">
            <div className="heading-container">
              <h4 className="heading-title" id="Vorteile">
                Ihre Vorteile
              </h4>
              <h3 className="heading-section-title">Funktionsübersicht</h3>
            </div>
            <div className="focuses lg:border-b border-gray">
              <div className="focus">
                <div className="focus-image">
                  <img src="/img/iconfokus-5.png" width="72px" alt="" />
                </div>
                <h4 className="focus-title">Datenschutz und Sicherheit</h4>
                <p className="focus-description">
                  Genießen Sie volle Transparenz und die Gewissheit, dass Sie
                  jederzeit nachvollziehen können, wo etwas gespeichert wird.
                  Auf Wunsch auch auf Ihrem lokalen Server.
                </p>
              </div>
              <div className="focus">
                <div className="focus-image">
                  <img src="/img/WritingDesk.png" width="72px" alt="" />
                </div>
                <h4 className="focus-title">Virtueller Schreibtisch</h4>
                <p className="focus-description">
                  Lassen Sie weiter Ihre Akten von Schreibtisch zu Schreibtisch
                  wandern. Nur jetzt wissen Sie auch in der digitalen Welt, bei
                  wem sich welche Akte gerade befindet.
                </p>
              </div>
              <div className="focus">
                <div className="focus-image">
                  <img src="/img/Notification.png" width="72px" alt="" />
                </div>
                <h4 className="focus-title">Erinnerungen</h4>
                <p className="focus-description">
                  Unser System informiert Sie über Akten zur Wiedervorlage.
                  Verpassen Sie keine Fristen mehr und nehmen Sie die Initiative
                  wieder in die Hand.
                </p>
              </div>
            </div>
            <div className="focuses">
              <div className="focus">
                <div className="focus-image">
                  <img src="/img/iconfokus-6.png" width="72px" alt="" />
                </div>
                <h4 className="focus-title">Integration</h4>
                <p className="focus-description">
                  Wir binden Ihre bestehenden digitalen System direkt ein. Egal
                  ob Steuerberatungssoftware, Ablagesysteme bis hin zu
                  Praxisverwaltungssystemen.
                </p>
              </div>
              <div className="focus">
                <div className="focus-image">
                  <img src="/img/Team.png" width="72px" alt="" />
                </div>
                <h4 className="focus-title">Teamarbeit</h4>
                <p className="focus-description">
                  Schreiben Sie Kommentare, legen Sie Dokumente zentral ab. So,
                  dass Sie, Ihre Mitarbeiter und Ihre Kunden alle Informationen
                  zu der Akte auf einen Blick bereit haben.
                </p>
              </div>
              <div className="focus">
                <div className="focus-image">
                  <img src="/img/iconfokus-2.png" width="72px" alt="" />
                </div>
                <h4 className="focus-title">Smartphone/Tablet</h4>
                <p className="focus-description">
                  Damit Ihnen wirklich nichts durch die Finger rutscht, bieten
                  wir unsere Aktenverwaltung auch auf Ihrem Mobiltelefon und
                  Tablet an.
                </p>
              </div>
            </div>
          </section>
          <div style={{ textAlign: "center" }}>
            <Link to="/preise" className="btn-primary">
              Alle Funktionen
            </Link>
          </div>
          <section className=" sections section-reviews">
            <div className="heading-container">
              <h4 className="heading-title" id="Vertrauen">
                Vertrauensvoll und Sicher
              </h4>
              <h3 className="heading-section-title">
                Unsere Versicherungen und Partner
              </h3>
            </div>
            <div className="mySwiper-review">
              <Slider2 />
            </div>
          </section>
        </main>

        <div className="footer-banner">
          <div className="container mx-auto">
            <section className="sections section-quote">
              <div className="quote-col quote-col-1">
                <div className="quote-col-content">
                  <h4 className="heading-title">Jetzt starten</h4>
                  <h2 className="quote-title">
                    Alle Akten im Griff mit Aktenplatz
                  </h2>
                  <p className="quote-description">
                    Testen Sie Aktenplatz 14 Tage kostenlos.
                    <br /> Keine Kreditkarte erforderlich.
                  </p>
                  <a
                    href="https://app.aktenplatz.de/register"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    Kostenlos loslegen
                  </a>
                </div>
              </div>
              <div className="quote-col quote-col-2">
                <div className="client-feedback">
                  <div className="client-image-container">
                    <div className="client-image-outer-wrapper">
                      <img
                        className="client-quote-icon"
                        src="/img/Quote.png"
                        alt=""
                      />
                      <div className="client-image-wrapper">
                        <img
                          className="client-image"
                          src="/img/sascha.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <img className="client-dot" src="/img/Dot.png" alt="" />
                  <div className="client-content">
                    <p className="client-message">
                      Mein Ziel ist es Software zu bauen die Menschen bei Ihrer
                      täglichen Arbeit unterstützt und nicht frustriert.
                    </p>
                    <div className="client-details">
                      <h4 className="client-name">Sascha Ladewig</h4>
                      <span className="client-position">Mitgründer</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
