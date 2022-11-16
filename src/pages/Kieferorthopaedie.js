import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Kieferorthopaedie = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>aktenplatz.de - Ihr Weg zur digitalen Patienten-Akte</title>
      </Helmet>

      <div className="h-screen flex flex-col body">
        <section className="header-container">
          <div className="banner-section-tax flex flex-col space-y-5 lg:flex-row container mx-auto mt-10 mb-32">
            <div className="banner-col-tax  flex flex-1 flex-col items-center text-center pt-10 lg:items-start lg:pt-40 lg:text-left col-1 xl:ml-[60px] 2xl:ml-[190px]">
              <div className="banner-col-1-content-tax px-4 lg:max-w-lg">
                <h1 className="banner-title-tax pt-2 pb-3 text-4xl font-bold max-w-xs mx-auto lg:text-5xl lg:max-w-none lg:pb-6 lg:leading-tight">
                  Ihr Weg zur digitalen Patienten-Akte
                </h1>
                <p className="banner-description-tax  text-[17px] opacity-80  leading-8">
                  Haben Sie Probleme die richtigen Unterlagen stets vollständig
                  vor sich zu haben? Führt ein Mitarbeiter Ausfall zu einem
                  regelmäßigen Stillstand? Bleiben die gewünschten Vorteile der
                  Digitalisierung bisher aus?
                </p>
              </div>
            </div>
            <div className="banner-col col-2-tax flex flex-row flex-1 justify-center pt-10 lg:pt-0  xl:mr-[60px] 2xl:mr-[190px] self-end w-full h-[300px]">
              {/* <!-- <img src="/img/tax-page-image.svg" alt="logo" className="tax-image max-w-xs lg:max-w-[500px]"> --> */}
              {/* <!-- <embed src="https://www.youtube.com/embed/Y3Wv2AoGiv0" wmode="transparent" type="video/mp4" width="100%"
            height="300px" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen
            title="Keyboard Cat"> --> */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/JSbejcfKgBU?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="mx-auto sm:container  lg:max-w-[880px] px-[20px] mb-20">
            <div className="text-3xl font-bold mb-4">
              Die Software-Lösung, mit der Sie den Überblick über Ihre
              Patienten-Akten behalten
            </div>
            <div className="opacity-80 leading-relaxed mb-14">
              Sie haben eine Arztpraxis und möchten Ihre analogen und digitalen
              Patienten-Akten mit einer einzigen Software übersichtlich
              verwalten? Mit „Aktenplatz“ haben Sie die Möglichkeit, eine
              durchgängige Aktenverwaltung parallel auf allen Computern in Ihrer
              Praxis zu führen. Sie können Ihre Akten virtuell ablegen und auf
              diese zurückgreifen, wann immer Sie möchten. Sie behalten den
              Überblick, welche Akte gerade von welcher Mitarbeiterin bearbeitet
              wird, Informationen gehen nicht mehr verloren und zusätzliche
              Dateien und Verknüpfungen können hinzugefügt werden. Außerdem
              können Sie schnell und unkompliziert Aufgaben an das Backoffice
              weiterleiten, während Sie in der Behandlung sind.
            </div>
            <br />
            <br />
            <div className="text-3xl font-bold mb-4">
              Mit Aktenplatz behalten Sie den Überblick über alle Aktivitäten
            </div>
            <p className="opacity-80 leading-relaxed mb-14">
              Mit „Aktenplatz” als Softwarelösung für Ihre Akten, haben Sie die
              Möglichkeit, Ihre digitalen und analogen Akten effizient und
              übersichtlich zu verwalten. Mit unserer Software organisieren Sie
              ähnlich dem Ablagesystem Ihres Schreibtisches und finden Akten in
              Sekundenschnelle. Hier ein kleines Beispiel, wie Sie „Aktenplatz”
              direkt am Arbeitsplatz integrieren können:
              <br />
              <br />
              <b>1.</b> Während der Behandlung ergibt sich eine Aufgabe für das
              Back-Office (z.B. eine Planverlängerung anzufordern)
              <br />
              <b>2.</b> Sie vergeben direkt in Ihrer Praxisverwaltungs-Software
              das Kürzel PL.
              <br />
              <b>3.</b> Das Back-Office gibt eine Notiz an den Arzt, für diesen
              Patienten eine Planverlängerung zu schreiben.
              <br />
              <b>4.</b> Die Akte landet damit direkt in der digitalen Ablage des
              Arztes.
              <br />
              <b>5.</b> Der Arzt schreibt nun die Verlängerung und gibt die Akte
              digital an das Backoffice zum Versand an die Krankenkasse weiter.
              <br />
              <b>6.</b> Das Backoffice wiederum löscht nach Aufgabenerledigung
              das Kürzel und die Akte verschwindet von dem Stapel des
              Back-Office.
              <br />
              <br />
              <br />
              Dieser übliche Vorgang aus dem Praxisalltag lässt sich
              selbstverständlich auf andere Routinen in Ihrer Praxis übertragen.
              Ein paar weitere Beispiele: Im Falle offener Patienten-Rechnungen
              kann jede Praxis-Mitarbeiterin nachverfolgen, wer bereits
              telefoniert hat und wann ein nächster Anruf ansteht. Sie können
              den Ablauf des Schreibens eines Arztbriefes steuern oder sich bei
              bei verpassten Terminen an neue Terminvereinbarungen erinnern
              lassen.
              <br />
              <br />
              Im Gegensatz zu anderen Tools, bieten wir eine aufgeräumte
              Software, die intuitiv zu bedienen ist. „Aktenplatz” wird voll in
              Ihr Praxisverwaltungssystem integriert sein. Bei der Einrichtung
              der Integration hilft Ihnen unser Support-Team.
            </p>
            <br />
            <br />
            <div className="grid grid-col-1 sm:grid-cols-2 gap-y-10 mb-20 gap-x-5">
              <div className="flex items-center gap-5">
                <div className="">
                  <img src="/img/WritingDesk.png" className="w-10" alt="icon" />
                </div>
                <div className="font-bold">Integration in Ihre Praxis</div>
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
              „Aktenplatz” ist die erste Softwarelösung, die alle Ihre
              Patienten-Akten, Notizen und Termine in einen strukturierten
              Arbeitsablauf zusammenfasst. Mit „Aktenplatz” finden Sie schnell
              und einfach, die benötigte Akte und den jeweiligen Status dieser.
              Notizen, Bilder, Emails und weitere Dokumente lassen sich von
              jedem Arbeitsplatz aus der Akte hinzufügen. Sie können jederzeit
              nachvollziehen, wer wann welche Akte bearbeitet hat. Gelbe Post-It
              Sticker gehören endlich der Vergangenheit an
              <br />
              <br />
              Selbst Papierakten, die Sie nur für das Archiv aufbewahren müssen,
              spüren Sie dank eines aufgeklebten QR-Codes in Ihrer Datenbank auf
              und rufen diese bei Nachfragen schnell ab. „Aktenplatz” ist die
              perfekte Lösung für vielbeschäftigte Ärzte, die den Überblick über
              ihre Arbeit behalten müssen.
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
            </div> --> */}
          </div>

          <Footer />
        </section>
      </div>
    </>
  );
};

export default Kieferorthopaedie;
