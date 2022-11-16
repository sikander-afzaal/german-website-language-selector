import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Revisionssicher = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Archivierung - automatisch und rechtssicher</title>
      </Helmet>
      <div className="h-screen flex flex-col body">
        <section className="header-container">
          {/* <!-- START --> */}

          <div className="banner-section-tax flex flex-col space-y-5 lg:flex-row container mx-auto mt-10 mb-32">
            <div className="banner-col-tax flex flex-1 flex-col items-center text-center pt-10 lg:items-start lg:pt-40 lg:text-left col-1 xl:ml-[60px] 2xl:ml-[190px]">
              <div className="banner-col-1-content-tax px-4 lg:max-w-lg">
                <h1 className="banner-title-tax pt-2 pb-3 text-4xl font-bold max-w-xs mx-auto lg:text-5xl lg:max-w-none lg:pb-6 lg:leading-tight">
                  Archivierung - automatisch und rechtssicher
                </h1>
                <p className="banner-description-tax text-[17px] opacity-80  leading-8">
                  Die Rechtslage für Unternehmen in Deutschland ist eindeutig:
                  Die Sicherung Ihrer Geschäftsdaten auf Festplatten oder
                  einfachen Cloud-Speichern reicht nicht aus, um die
                  gesetzlichen Vorgaben zu erfüllen. Daten müssen in einem
                  unveränderlichen Speicher abgelegt werden.
                </p>
              </div>
            </div>
            <div className="banner-col col-2-tax flex flex-row flex-1 justify-center pt-10 lg:pt-0 xl:mr-[60px] 2xl:mr-[190px] self-end w-full h-[300px]">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/MakohDl-Uok?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>

          {/* <!-- BLOG START --> */}

          <div className="mx-auto sm:container  lg:max-w-[880px] px-[20px] mb-20">
            <div className="text-3xl font-bold mb-4">
              Revisionssicher und manipulationssicher
            </div>
            <div className="opacity-80 leading-relaxed mb-14">
              Mit der Archivierung von Aktenplatz und dem unveränderlichen
              Speicher von Microsoft Azure erfüllen Sie die gesetzlich
              verpflichtenden Kriterien der Revisionssicherheit: Alle Dateien
              werden im Originalzustand an einem zentralen Ort in deutschen
              Rechenzentren archiviert und sind unveränderbar.
              <br />
              <br />
              Praktisch: Haben Sie versehentlich Dateien gelöscht, sind diese
              dennoch weiterhin im Archiv enthalten und können jederzeit
              wiederhergestellt werden. Das Löschen einmal archivierter
              Dokumente innerhalb des Archivs ist technisch unmöglich. So können
              auch Viren und externe Angreifer Ihren Daten nichts anhaben.
              Aktualisieren Sie Ihre Dokumente so werden diese stets in einer
              neuen Version täglich abgelegt. So können Sie auch jederzeit auf
              ältere Versionen zugreifen.
              <p></p>
              <br />
              <br />
              <div className="text-3xl font-bold mb-4">
                Rechtssicher und GoBD-konform
              </div>
              GoBD bedeutet Grundsätze zur ordnungsmäßigen Führung und
              Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in
              elektronischer Form. Es handelt sich um ein BMF-Schreiben. Die
              GoBD regelt, welche grundsätzlichen Prinzipien Unternehmer für
              ihre Bücher und sonstigen Aufzeichnungen beachten müssen, damit
              diese für steuerliche Beweiszwecke von den Finanzbehörden
              anerkannt werden.
              <br />
              <br />
              Gemäß der GoBD sind bei der Führung von Büchern in elektronischer
              oder in Papierform die folgenden Anforderungen zu beachten:
              Grundsatz der Nachvollziehbarkeit und Nachprüfbarkeit, Grundsätze
              der Wahrheit, Klarheit und fortlaufenden Aufzeichnung,
              Vollständigkeit, Einzelaufzeichnungspflicht, Richtigkeit,
              zeitgerechte Buchungen und Aufzeichnungen, Ordnung und
              Unveränderbarkeit.
              <p></p>
              <br />
              <br />
              <div className="text-3xl font-bold mb-4">
                Schutz vor Cyberangriffen
              </div>
              Bei einem Cyberangriff zählt jede Sekunde und Ausfallzeiten sind
              nicht nur schmerzhaft, sondern vor allem teuer. Unternehmen dürfen
              deshalb keine Minute verlieren, sondern müssen besser heute als
              morgen für einen zuverlässigen Datenschutz sorgen. Mit Aktenplatz
              bieten wir Ihnen genau diesen Schutz, völlig automatisch ohne das
              Sie sich darum kümmern müssen.
              <br />
              <br />
              Spielen wir ein potentielles Datenverlust Szenario durch:<p></p>
              Auf Ihrem Endgerät befindet sich ein Virus. Dieser verschlüsselt
              all Ihre Daten. Nicht nur lokal sondern auch auf Ihren
              Cloud-Speichern. Eventuell bemerken Sie diese Verschlüsselung
              nicht direkt und schließlich können Sie Ihre Daten nicht
              wiederherstellen. Die Archivierung mit Aktenplatz und Microsoft
              Azure hilft Ihnen nun aus. Sämtliche Daten in Ihrem Archiv sind
              unveränderbar und können somit auch durch Viren nicht
              verschlüsselt oder unbrauchbar gemacht werden.
              <p></p>
              <br />
              <br />
              <div className="text-3xl font-bold mb-4">
                Warum ein Produkt von Microsoft?
              </div>
              <p className="opacity-80 leading-relaxed mb-14">
                Unveränderlicher Speicher für Azure-Blobs ist ein Produkt von
                Microsoft zu dem wir eine spezielle Schnittstelle im Aktenplatz
                bieten. Sie ist so konzipiert, dass sie von Finanzinstituten und
                in anderen Branchen für die Erfüllung von Anforderungen in Bezug
                auf SEC 17a-4(f), CFTC 1.31©-(d), FINRA usw. genutzt werden
                kann. Ein technisches Whitepaper mit Details dazu, wie dieses
                Feature bei diesen behördlichen Vorgaben hilft, können Sie im{" "}
                <u>
                  <a
                    href="https://servicetrust.microsoft.com/ViewPage/MSComplianceGuide?command=Download&downloadType=Document&downloadId=19b08fd4-d276-43e8-9461-715981d0ea20&docTab=4ce99610-c9c0-11e7-8c2c-f908a777fa4d_GRC_Assessment_Reports"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Azure Service Trust-Portal
                  </a>
                </u>{" "}
                herunterladen. Das{" "}
                <u>
                  <a
                    href="https://www.microsoft.com/en-us/trustcenter/compliance"
                    target="_blank"
                  >
                    Azure Trust Center
                  </a>
                </u>{" "}
                enthält ausführliche Informationen zu den
                Compliancezertifizierungen.
                <br />
                <br />
                Benutzer erzielen hiermit maximalen Schutz von Daten, da mit dem
                unveränderlichen Speicher für den Azure-Blob-Dienst
                sichergestellt ist, dass Daten nicht von Benutzern geändert oder
                gelöscht werden können, auch wenn diese über Berechtigungen für
                die Kontoverwaltung verfügen.
                <br />
                <br />
                Mit dem unveränderlichen Speicher für Azure Storage-Blobs können
                Benutzer sensible Informationen, die für
                Beweissicherungsverfahren, strafrechtliche Untersuchungen usw.
                wichtig sind, für den gewünschten Zeitraum in einem vor
                Manipulationen geschützten Zustand speichern.
                <br />
                <br />
                Eine Aufbewahrung für juristische Zwecke erfordert spezielle
                gesetzliche Anforderungen welche Microsoft mit seinem Produkt
                Azure-Blobs vollständig erfüllt. Sie bieten eine vorübergehende
                Unveränderlichkeitsrichtlinie, die für juristische
                Untersuchungszwecke oder allgemeine Schutzrichtlinien angewendet
                werden kann. Eine Aufbewahrung für juristische Zwecke speichert
                Daten in einem WORM-Format (Write-Once, Read-Many), bis sie
                explizit gelöscht werden. Wenn ein Zeitraum für die Aufbewahrung
                für juristische Zwecke festgelegt wird, können Dateien erstellt
                und gelesen, aber nicht geändert oder gelöscht werden. Verwenden
                Sie eine Aufbewahrung für juristische Zwecke, wenn der Zeitraum,
                in dem die Daten in einem WORM-Zustand aufbewahrt werden müssen,
                unbekannt ist.
                <br />
                <br />
                Mit dem Einsatz von dem von Microsoft entwickelten und
                betriebenen Produkt bieten wir Ihnen eine langfrisitge und
                Sichere Aufbewahrung Ihrer Archivdaten, welche alle nötigen
                Zertifizierungen erfüllt.
              </p>
              <br />
              <div className="grid grid-col-1 sm:grid-cols-2 gap-y-10 mb-20 gap-x-5">
                <div className="flex items-center gap-5">
                  <div className="">
                    <img
                      src="./img/WritingDesk.png"
                      className="w-10"
                      alt="icon"
                    />
                  </div>
                  <div className="font-bold">Sichere Dokumentaufbewahrung</div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="">
                    <img src="./img/icon2.svg" className="w-10" alt="icon" />
                  </div>
                  <div className="font-bold">
                    Einhaltung gesetzlicher Bestimmungen
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="">
                    <img src="./img/icon3.svg" className="w-10" alt="icon" />
                  </div>
                  <div className="font-bold">
                    Sicherung in deutschen Rechenzentren
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="">
                    <img src="./img/icon4.svg" className="w-10" alt="icon" />
                  </div>
                  <div className="font-bold">
                    Datenschutz und Sicherheit gegeben
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="">
                    <img src="./img/icon5.svg" className="w-10" alt="icon" />
                  </div>
                  <div className="font-bold">Automatische Archivierung</div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="">
                    <img src="./img/icon6.svg" className="w-10" alt="icon" />
                  </div>
                  <div className="font-bold">GoBD konform</div>
                </div>
              </div>
              <br />
              <br />
              <div className="text-3xl font-bold mb-4">
                Ihre Ergebnisse aus einer Zusammenarbeit mit uns
              </div>
              <p className="opacity-80 leading-relaxed mb-14">
                „Aktenplatz” ist eine Softwarelösung, die alle Ihre Akten,
                Notizen und Termine in einen strukturierten Arbeitsablauf
                zusammenfasst. Mit „Aktenplatz” finden Sie schnell und einfach,
                die benötigte Akte und den jeweiligen Status dieser. Notizen,
                Bilder, Emails und weitere Dokumente lassen sich von jedem
                Arbeitsplatz aus der Akte hinzufügen. Sie können jederzeit
                nachvollziehen, wer wann welche Akte bearbeitet hat. Gelbe
                Post-It Sticker gehören endlich der Vergangenheit an
                <br />
                <br />
                Durch unsere Archivschnittstelle zu Microsoft Azure bieten wir
                Ihnen einen revisionssicheren Archivspeicher an, in dem all Ihre
                Dokumente vollständig, automatisch und unveränderbar abgelegt
                werden.
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
          </div>

          {/* <!-- END --> */}

          <Footer />
        </section>
      </div>
    </>
  );
};

export default Revisionssicher;
