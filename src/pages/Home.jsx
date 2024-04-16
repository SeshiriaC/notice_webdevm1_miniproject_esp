import MyImage from "../component/DisplayImage";
import Menu from "../component/Menu";
import PageFooter from "../component/PageFooter";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";

function Home() {
  return (
    <div id="pageContainer">
      <div>
        <Menu />
        <div
          className="flex flex-wrap justify-content-center align-item-center"
          id="displayImage"
        >
          <MyImage />
        </div>
        <Divider align="center" />
        <div>
          <div className="m-6 align-self-center">
            <Card title="Qui sommes-nous." className="shadow-none m-0 hover:shadow-8">
              <p className="m-0">
                Etudiants? Oui, nous le sommes. Le développement de ce site est
                le tout premier projet Web que j'aurais effectué. Ce ne sera
                probablement pas le dernier non plus! J'aurai 23 ans cette
                années et c'est tellement dommage que je fasse des projets
                seulement maintenant. Je maque de beaucoup d'inspiration en ce
                qui concerne les développements de projets mais cette année je
                ferai en sorte de m'améliorer! <br /> Fighting xoXo.
              </p>
            </Card>
          </div>
        </div>
        <Divider align="center" />
        <div>
          <div className="m-6 align-self-center">
            <Card title="Notice, c'est quoi?" className="shadow-6 m-0">
              <p className="m-0">
                Qu'y a -t- il d'intéressant ce mois-ci? Notice, toujours à la
                une sur les évènements du moment. Des conférences par les
                étoiles montantes de la Tech, des discussions sur des sujets
                innovants, des rencontres qui pourraient changer votre avenir.
                Tous réunis sur un seul calendrier.
              </p>
            </Card>
          </div>
        </div>
        <Divider align="center"></Divider>
      </div>
      <PageFooter />
    </div>
  );
}

export default Home;
