import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useLocation } from "react-router";
const Steuerkanzleien = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Helmet>
        <title>Ihr Weg zur digitalen Kanzlei</title>
      </Helmet>
      <div className="h-screen flex flex-col body">
        <section className="header-container">
          <div className="banner-section-tax flex flex-col space-y-5 lg:flex-row container mx-auto mt-10 mb-32">
            <div className="banner-col-tax flex flex-1 flex-col items-center text-center pt-10 lg:items-start lg:pt-40 lg:text-left col-1 xl:ml-[60px] 2xl:ml-[190px]">
              <div className="banner-col-1-content-tax px-4 lg:max-w-lg">
                <h1 className="banner-title-tax pt-2 pb-3 text-4xl font-bold max-w-xs mx-auto lg:text-5xl lg:max-w-none lg:pb-6 lg:leading-tight">
                  Ihr Weg zur digitalen Kanzlei
                </h1>
                <p className="banner-description-tax text-[17px] opacity-80  leading-8">
                  Haben Sie Probleme die richtigen Unterlagen stets vollständig
                  vor sich zu haben? Führt ein Mitarbeiter Ausfall zu einem
                  regelmäßigen Stillstand? Bleiben die gewünschten Vorteile der
                  Digitalisierung bisher aus?
                </p>
              </div>
            </div>
            <div className="banner-col col-2-tax flex flex-row flex-1 justify-center pt-10 lg:pt-0 xl:mr-[60px] 2xl:mr-[190px] self-end w-full h-[300px]">
              {/* <!-- <img src="/img/tax-page-image.svg" alt="logo" className="tax-image max-w-xs lg:max-w-[500px]"> --> */}
              {/* <!-- <embed src="https://www.youtube.com/embed/Y3Wv2AoGiv0" wmode="transparent" type="video/mp4" width="100%"
                    height="300px" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen
                    title="Keyboard Cat"> --> */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/Y3Wv2AoGiv0?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* <!-- BLOG START --> */}

          <div className="mx-auto sm:container  lg:max-w-[880px] px-[20px] mb-20">
            <div className="text-3xl font-bold mb-4">
              Das Problem herkömmlicher Aktenverwaltung
            </div>
            <div className="opacity-80 leading-relaxed mb-14">
              Die herkömmliche Verwaltung von Steuerakten war schon immer eine
              Herausforderung. Wenn es schnell gehen muss, fehlen wichtige
              Dokumente in Ihrem Büro oder in Ihrem Ablagesystem. Zudem kann es
              schwierig sein, die aktuellste Version der Akten wiederzufinden,
              wenn sie im Laufe ihrer Lebensspanne mehrmals überarbeitet wurde.
              <br />
              <br />
              Es ist mühsame Arbeit erforderlich, nur damit Sie alle
              Informationen zur Hand haben, wenn Sie sie brauchen. Das ist zum
              einen sehr zeitaufwendig und zum anderen verschwendet die
              Papierform enorm viel Platz.
              <br />
              <br />
              Die Digitalisierung ist in der Theorie ein Heilmittel, aber in der
              Praxis scheitert sie einfach. Man kann alte Akten nicht einscannen
              und die Software, die einem die Arbeit erleichtern soll, passt
              einfach nicht zu den eigenen Arbeitsgewohnheiten! Sie ist
              umständlich und starr und verursacht somit mehr Chaos, anstatt
              Sie, wie gewünscht, zu unterstützen.
              <br />
              <br />
              Wir haben uns an die Arbeit gemacht und präsentieren Ihnen nun
              Stolz unser durchdachtes Dokumentmanagementsystem Aktenplatz.
            </div>
            <br />
            <br />
            <div className="text-3xl font-bold mb-4">
              Aktenplatz führt Sie zur Steuerberatung 4.0
            </div>
            <p className="opacity-80 leading-relaxed mb-14">
              Der Begriff "Steuerberatung 4.0" ist an eine Initiative der
              Bundesregierung "Industrie 4.0" angelehnt und beschreibt die
              umfassende Digitalisierung von Geschäftsprozessen durch die
              fortschreitende Vernetzung aller Bereiche in Produktion und
              Dienstleistung mit moderner Informations- und
              Kommunikationstechnik
              <br />
              <br />
              Was wäre, wenn es eine Möglichkeit gäbe, Ihre Akten effizient und
              übersichtlich zu verwalten? Eine Möglichkeit, mit der Sie jedes
              Dokument in Sekundenschnelle finden können, unabhängig davon, wer
              es abgelegt hat oder wann es zuletzt aktualisiert wurde? Hier
              kommt unsere Aktenmanagement-Software Aktenplatz ins Spiel.
              <br />
              <br />
              Wir haben eine umfassende Lösung speziell für Steuerberater
              entwickelt. Eine Lösung, die individuell auf Ihre Bedürfnisse
              eingestellt und so angepasst wird, dass es mit Ihren gewohnten
              Arbeitsschritten harmoniert. Sie umgehen somit stundenlanges,
              manuelles Einstellen des Programms und können sofort loslegen!
              <br />
              <br />
              Im Gegensatz zu anderen Tools, bieten wir Ihnen keine unnötige
              Reizüberflutung an Funktionen, sondern genau die, die Sie
              benötigen.
              <br />
              <br />
              Um dies zu ermöglichen, stützen wir uns auf einen individuellen
              Ansatz für die Aktenverwaltung. Einer unserer Experten wird auf
              Sie zukommen und die verschiedenen Arbeitsabläufe in Ihrem Büro
              genauestens unter die Lupe nehmen. Anschließend stellt er sicher,
              dass alles von Anfang bis Ende korrekt eingerichtet ist.
              <br />
              <br />
              Auf diese Weise können wir gewährleisten, dass Sie den effektiven
              Service erhalten, den Sie erwarten. Unser Ziel ist es, Ihnen das
              Leben leichter zu machen. Das beginnt damit, dass unsere Software
              perfekt zu Ihrem Unternehmen passt.
            </p>
            <br />
            <br />
            <div className="grid grid-col-1 sm:grid-cols-2 gap-y-10 mb-20 gap-x-5">
              <div className="flex items-center gap-5">
                <div className="">
                  <img src="/img/icon1.svg" className="w-10" alt="icon" />
                </div>
                <div className="font-bold">Papierkosten erfolgreich senken</div>
              </div>
              <div className="flex items-center gap-5">
                <div className="">
                  <img src="/img/icon2.svg" className="w-10" alt="icon" />
                </div>
                <div className="font-bold">
                  Teamarbeit schnell und zuverlässig vernetzen
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="">
                  <img src="/img/icon3.svg" className="w-10" alt="icon" />
                </div>
                <div className="font-bold">
                  Kommunikation spielend nachverfolgen
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="">
                  <img src="/img/icon4.svg" className="w-10" alt="icon" />
                </div>
                <div className="font-bold">
                  Datenschutz und Sicherheit gegeben
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="">
                  <img src="/img/icon5.svg" className="w-10" alt="icon" />
                </div>
                <div className="font-bold">
                  Abläufe automatisieren und wachsen
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="">
                  <img src="/img/icon6.svg" className="w-10" alt="icon" />
                </div>
                <div className="font-bold">Mobile Apps und Integrationen</div>
              </div>
            </div>
            <br />
            <br />

            <div className="text-3xl font-bold mb-4">
              Ihre Ergebnisse aus einer Zusammenarbeit mit uns
            </div>

            <p className="opacity-80 leading-relaxed mb-14">
              Aktenplatz ist kein revolutionäres neues Programm, aber das Erste,
              dass alle Ihre wichtigen Akten, Kontakte, Notizen und Termine in
              einem einzigen Arbeitsablauf zusammenfasst. Kein Herumhantieren
              mit mehreren Programmen oder Aktenordnern mehr! Mit Aktenplatz
              finden Sie schnell und einfach, die benötigte Akte und den
              jeweiligen Status dieser.
              <br />
              <br />
              Auch können Sie nachverfolgen, wer Zugriff auf die einzelnen
              Dateien hat und welche Änderungen vorgenommen wurden. Außerdem
              erleichtert Aktenplatz den Austausch mit Kollegen, da es die
              interne Kommunikation bezüglich bestimmter Akten in einem Programm
              zusammenfasst und somit erheblich vereinfacht.
              <br />
              <br />
              Selbst Papierakten, die Sie nur für das Archiv aufbewahren müssen,
              spüren Sie dank eines speziellen Aufklebers in Ihrer Übersicht auf
              und rufen diese bei Nachfragen schnell ab. Aktenplatz ist die
              perfekte Lösung für vielbeschäftigte Steuerberater, die den
              Überblick über ihre Arbeit behalten müssen.
              <br />
              <br />
              Profitieren Sie nicht nur von unserer Software, sondern auch von
              unserem hervorragenden Kundensupport. Wann immer Sie eine Frage
              haben oder Hilfe benötigen, kommt das Aktenplatz-Suportteam
              schnell und zuverlässig auf Sie zu und beantwortet Ihr Anliegen
              umfassend. Wenn Sie sich nicht sicher sind, ob Aktenplatz das
              Richtige für Sie ist, probieren Sie es einfach aus. Wir sind uns
              sicher, dass Sie sowohl von der Software als auch vom Service
              beeindruckt sein werden. Für nähere Informationen rufen Sie uns
              gerne jederzeit an!
            </p>

            {/* <!-- <div className="text-3xl font-bold mb-4">Benefit</div>

                <p className="opacity-80 leading-relaxed mb-14">

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque. Tellus mauris a
                    diam
                    maecenas sed. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Amet
                    dictum
                    sit amet justo. Felis bibendum ut tristique et egestas quis.
                    <br/><br/>
                    Et pharetra pharetra massa massa ultricies. Odio ut enim blandit volutpat maecenas.

                </p>





                <div className="text-3xl font-bold mb-4">Results</div>

                <p className="opacity-80 leading-relaxed mb-8">
                    Eget mi proin sed libero. Habitasse platea dictumst vestibulum rhoncus est pellentesque. At varius
                    vel
                    pharetra vel turpis nunc. Vitae semper quis lectus nulla at volutpat diam. Tortor dignissim
                    convallis
                    aenean et. Varius vel pharetra vel turpis nunc.
                </p>

                <div className="flex flex-col gap-2 pl-4">
                    <div className="flex gap-3">
                        <div className="min-w-[5px] min-h-[5px] max-w-[5px] max-h-[5px] w-full transform translate-y-2 rounded-full"
                            style="background: rgb(194, 194, 194);"></div>
                        <div className="opacity-80 leading-relaxed">Porttitor eget dolor morbi non arcu. Iaculis nunc sed
                            augue
                            lacus viverra vitae congue eu.</div>
                    </div>


                    <div className="flex gap-3">
                        <div className="min-w-[5px] min-h-[5px] max-w-[5px] max-h-[5px] w-full transform translate-y-2 rounded-full"
                            style="background: rgb(194, 194, 194);"></div>
                        <div className="opacity-80 leading-relaxed">A lacus vestibulum sed arcu non odio.</div>
                    </div>




                    <div className="flex gap-3">
                        <div className="min-w-[5px] min-h-[5px] max-w-[5px] max-h-[5px] w-full transform translate-y-2 rounded-full"
                            style="background: rgb(194, 194, 194);"></div>
                        <div className="opacity-80 leading-relaxed">Velit aliquet sagittis id consectetur purus. Nisl purus
                            in
                            mollis nunc.</div>
                    </div>



                    <div className="flex gap-3">
                        <div className="min-w-[5px] min-h-[5px] max-w-[5px] max-h-[5px] w-full transform translate-y-2 rounded-full"
                            style="background: rgb(194, 194, 194);"></div>
                        <div className="opacity-80 leading-relaxed">Blandit massa enim nec dui nunc mattis enim.</div>
                    </div>





                    <div className="flex gap-3">
                        <div className="min-w-[5px] min-h-[5px] max-w-[5px] max-h-[5px] w-full transform translate-y-2 rounded-full"
                            style="background: rgb(194, 194, 194);"></div>
                        <div className="opacity-80 leading-relaxed">Erat pellentesque adipiscing commodo elit at imperdiet
                            dui
                            accumsan.</div>
                    </div>




                    <div className="flex gap-3">
                        <div className="min-w-[5px] min-h-[5px] max-w-[5px] max-h-[5px] w-full transform translate-y-2 rounded-full"
                            style="background: rgb(194, 194, 194);"></div>
                        <div className="opacity-80 leading-relaxed">Tortor vitae purus faucibus ornare.</div>
                    </div>




                    <div className="flex gap-3">
                        <div className="min-w-[5px] min-h-[5px] max-w-[5px] max-h-[5px] w-full transform translate-y-2 rounded-full"
                            style="background: rgb(194, 194, 194);"></div>
                        <div className="opacity-80 leading-relaxed">Id donec ultrices tincidunt arcu non sodales neque.
                        </div>
                    </div> -->




 */}
          </div>

          <Footer />
        </section>
      </div>
    </>
  );
};

export default Steuerkanzleien;
