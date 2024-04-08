import MyImage from "../component/DisplayImage";
import Menu from "../component/Menu";
import PageFooter from "../component/PageFooter";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";

function Home() {
  const header = (
    <>
      <Menu></Menu>
    </>
  );

  const foot = (
    <>
      <PageFooter></PageFooter>
    </>
  );

  return (
    <div id="pageContainer">
      <div>
        {header}
        <div
          className="flex flex-wrap justify-content-center align-item-center"
          id="displayImage"
        >
          <MyImage></MyImage>
        </div>
        <Divider align="center"></Divider>
        
        <Divider align="center"></Divider>
        <div>
          <div className="m-6 align-self-center">
            <Card title="What Notice is." className="shadow-6 m-0">
              <p className="m-0">
                Qu'y a -t- il d'intéressant ce mois-ci? Notice, toujours à la
                une sur les évènements du moment. Des conférences par les
                étoiles montantes de la Tech, des discussions sur des
                sujets innovants, des rencontres qui pourraient changer votre
                avenir. Tous réunis sur un seul calendrier.
              </p>
            </Card>
          </div>
        </div>
        <Divider align="center"></Divider>
      </div>
      {foot}
    </div>
  );
}

export default Home;
