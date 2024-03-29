import Menu from "../component/Menu";
import EventCard from "../component/EventCard";
import PageFooter from "../component/PageFooter";
import vr1Print from "../images/vr1.png";
import ai1Print from "../images/ai1.png";
import { Link } from "react-router-dom";

function Evenement() {
  /* Variables pour Vision 2.0 */
  const vr1Subtitles = "by NextG | 05 Mai";

  const vr1Paragraph = (
    <p>
      Préparez-vous à décoller pour un voyage au delà de votre imagination !
      Vivez l'extase virtuelle lors de Vision 2.0 présenté par NextG à The
      Infinite Expo.
    </p>
  );

  const vr1Details = (
    <>
      <h2>Vivez l'extase virtuelle !</h2>
      <p>
        La réalité virtuelle débarque dans votre ville et s'apprête à la
        bouleverser !
      </p>
      <h2>Rejoignez-nous le 5 Mai pour une soirée cosmique :</h2>
      <p>En route pour le voyage immersif de votre vie !</p>
      <h3>Programme interstellaire :</h3>
      <ul>
        <li>
          18h00 - 18h30 : Accrochez vos casques et préparez-vous à décoller !
        </li>
        <li>18h30 - 19h30 : Conférence :</li>
        <ul>
          <li>La réalité virtuelle : Bienvenue dans l'hyperespace !</li>
          <li>
            Défis et opportunités de la VR : Explorez l'infini et au-delà !
          </li>
          <li>VR : Les applications qui vont révolutionner votre monde !</li>
        </ul>
        <li>19h30 - 20h00 : Pause ravitaillement galactique !</li>
        <li>20h00 - 21h00 : Table ronde :</li>
        <ul>
          <li>
            VR et l'éducation : Apprendre en s'envolant vers de nouveaux
            horizons !
          </li>
          <li>VR et la santé : Soigner et guérir autrement</li>
          <li>VR et l'art : Créer des émotions à couper le souffle</li>
        </ul>
        <li>21h00 - 21h30 : Questions-réponses et atterrissage en douceur.</li>
      </ul>
      <h3>Votre équipage d'experts :</h3>
      <ul>
        <li>[Invitez un expert en réalité virtuelle]</li>
        <li>[Invitez un représentant d'une entreprise utilisant la VR]</li>
        <li>[Invitez un acteur du monde de l'éducation ou de la santé]</li>
      </ul>
      <h3>Pour qui ?</h3>
      <ul>
        <li>Tous les explorateurs de l'imaginaire</li>
        <li>Étudiants : Préparez-vous au futur !</li>
        <li>Professionnels : Innovez avec la VR !</li>
        <li>Passionnés de technologie : Découvrez les dernières innovations</li>
        <li>Grand public : La VR vous concerne !</li>
      </ul>
      <Link to="/booking">
        <h2>Téléportez-vous dès maintenant !</h2>
      </Link>
    </>
  );

  /* Variables pour l'évènement d'IA */
  const ai1Subtitles = "by eConnect | 17 avril";

  const ai1Paragraph = (
    <p>
      Soyez les bâtisseurs de demain ! Explorez l'univers fascinant de l'IA et
      participez à la construction d'un futur meilleur lors de l'événement Today
      2 Tomorrow.
    </p>
  );

  const ai1Details = (
    <>
      <h2>Intelligence artificielle : l'avenir se dessine sous nos yeux !</h2>
      <p>
        <strong>eConnect</strong> vous invite à son événement le{" "}
        <strong>17 avril 2024</strong> à la salle de conférence{" "}
        <strong>µCosmos</strong> de <strong>17h00 à 20h30</strong>.
      </p>
      <p>
        Plongeons ensemble dans l'univers fascinant de l'intelligence
        artificielle et explorons son incroyable potentiel pour façonner un
        avenir radieux !
      </p>
      <h3>Slogan : Demain se construit aujourd'hui, et l'IA est la clé !</h3>
      <h4>Programme</h4>
      <ul>
        <li>
          <strong>17h00 - 17h30 :</strong> Accueil chaleureux autour d'un café
          pour se mettre en appétit !
        </li>
        <li>
          <strong>17h30 - 18h30 :</strong> Conférence captivante
        </li>
        <ul>
          <li>
            Titre : L'intelligence artificielle : Propulsons-nous vers une
            nouvelle ère technologique !
          </li>
          <li>
            Intervenant : [Invitez un expert en IA charismatique et inspirant]
          </li>
        </ul>
        <li>
          <strong>18h30 - 19h00 :</strong> Pause-café gourmande et networking
          pour échanger et tisser des liens.
        </li>
        <li>
          <strong>19h00 - 20h00 :</strong> Table ronde passionnante
        </li>
        <ul>
          <li>
            Thème : Les applications concrètes de l'IA, une révolution dans tous
            les domaines !
          </li>
          <li>
            Intervenants :
            <ul>
              <li>
                [Invitez un expert en IA enthousiaste dans le domaine de la
                santé]
              </li>
              <li>
                [Invitez un expert en IA pédagogue dans le domaine de
                l'éducation]
              </li>
              <li>
                [Invitez un expert en IA visionnaire dans le domaine de
                l'industrie]
              </li>
            </ul>
          </li>
        </ul>
        <li>
          <strong>20h00 - 20h30 :</strong> Questions-réponses interactives et
          clôture de l'événement.
        </li>
      </ul>
      <h5>Pourquoi participer ?</h5>
      <ul>
        <li>
          Soyez à la pointe des dernières avancées en intelligence artificielle.
        </li>
        <li>
          Décryptez les enjeux et les défis de l'IA pour notre société avec
          optimisme.
        </li>
        <li>
          Rencontrez des experts passionnés et échangez sur les applications
          concrètes de l'IA.
        </li>
        <li>Imaginez ensemble l'avenir radieux que l'IA peut nous offrir.</li>
      </ul>
      <h5>Public cible</h5>
      <ul>
        <li>
          Professionnels du numérique et de l'innovation, l'avenir vous
          appartient !
        </li>
        <li>
          Étudiants en informatique et en intelligence artificielle, soyez les
          bâtisseurs de demain !
        </li>
        <li>
          Entrepreneurs et chefs d'entreprise, l'IA est votre alliée pour la
          croissance !
        </li>
        <li>
          Passionnés de technologie et d'avenir, rejoignez la communauté !
        </li>
      </ul>
      <h5>Inscription</h5>
      <p>
        L'inscription à l'événement est gratuite mais obligatoire. Réservez
        votre place dès maintenant pour ne rien manquer de cette aventure
        extraordinaire :
        <Link to="/booking">
          <h2>Inscrivez-vous dès maintenant !</h2>
        </Link>
      </p>
      <p>
        Ne laissez pas passer cette occasion unique de plonger dans l'univers
        fascinant de l'intelligence artificielle et de contribuer à construire
        un avenir meilleur pour tous !
      </p>
      <p>
        #IA #Today2Tomorrow #eConnect #µCosmos #Futur #Technologie #Innovation
        #Enthousiasme #AvenirRajeuni
      </p>
    </>
  );

  return (
    <>
      <Menu></Menu>
      <div className="flex flex-wrap gap-1 sm:mx-4 md:gap-2 mx-4 xl:gap-6 align-items-center justify-content-center my-0">
        <div className="flex align-items-center justify-content-center fadeinleft animation-duration-1000">
          <EventCard
            header="Today 2 Tommorow"
            print={ai1Print}
            paragraph={ai1Paragraph}
            details={ai1Details}
            subtitles={ai1Subtitles}
          ></EventCard>
        </div>
        <div className="flex align-items-center justify-content-center fadeinright animation-duration-1000">
          <EventCard
            header="Vision 2.0"
            print={vr1Print}
            paragraph={vr1Paragraph}
            details={vr1Details}
            subtitles={vr1Subtitles}
          ></EventCard>
        </div>
      </div>
      <PageFooter></PageFooter>
    </>
  );
}

export default Evenement;
