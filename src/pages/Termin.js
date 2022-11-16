import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Termin = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
        <title>Aktenplatz.de Demo-Termin</title>
      </Helmet>

      <div className="h-screen flex flex-col body">
        <section className="header-container">
          {/* <!-- START --> */}

          <div className="banner-section-tax flex flex-col space-y-5 lg:flex-row container mx-auto mt-10 mb-32">
            <div className="banner-col-tax  flex flex-1 flex-col items-center text-center pt-10 lg:items-start lg:pt-40 lg:text-left col-1 xl:ml-[60px] 2xl:ml-[190px]">
              <div className="banner-col-1-content-tax px-4 lg:max-w-lg">
                <h1 className="banner-title-tax pt-2 pb-3 text-4xl font-bold max-w-xs mx-auto lg:text-5xl lg:max-w-none lg:pb-6 lg:leading-tight">
                  Jetzt Demo-Termin verabreden
                </h1>
                <p className="banner-description-tax text-[17px] opacity-80  leading-8">
                  Haben Sie Probleme die richtigen Unterlagen stets vollständig
                  vor sich zu haben? Führt ein Mitarbeiter Ausfall zu einem
                  regelmäßigen Stillstand? Bleiben die gewünschten Vorteile der
                  Digitalisierung bisher aus?
                </p>
                <br />
                <b>Lassen Sie uns darüber sprechen.</b>
              </div>
            </div>
            <div className="banner-col col-2-tax flex flex-row flex-1 justify-center pt-10 lg:pt-0  xl:mr-[60px] 2xl:mr-[190px] self-end w-full h-[300px]">
              {/* <!-- <img src="./img/tax-page-image.svg" alt="logo" className="tax-image max-w-xs lg:max-w-[500px]"> --> */}
              {/* <!-- <embed src="https://www.youtube.com/embed/Y3Wv2AoGiv0" wmode="transparent" type="video/mp4" width="100%"
            height="300px" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen
            title="Keyboard Cat"> --> */}
              {/* <!-- Calendly Inline-Widget Beginn --> */}
              <div
                className="calendly-inline-widget min-w-[320px] w-[580px] h-[630px]"
                data-url="https://calendly.com/aktenplatz/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
              ></div>

              {/* <!-- Calendly Inline-Widget Ende --> */}
            </div>
          </div>

          {/* <!-- BLOG START --> */}

          <div className="mx-auto sm:container  lg:max-w-[880px] px-[20px] mb-20">
            <div className="w-full h-[300px]"></div>
          </div>

          {/* <!-- END --> */}

          <Footer shortPage={true} />
        </section>
      </div>
    </>
  );
};

export default Termin;
