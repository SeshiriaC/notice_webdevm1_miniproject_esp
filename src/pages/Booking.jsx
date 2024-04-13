import Menu from "../component/Menu";
import PageFooter from "../component/PageFooter";
import TicketType from "../component/TicketType";
import vipImage from "../images/gold.png";
import premiumImage from "../images/diamond.png";
import accessImage from "../images/onyx.png";

function Booking() {
  const accessTicketDetailsList = ["Bon d'achat"];
  const accessTicketDetails = accessTicketDetailsList.map((detail) => (
    <li>{detail}</li>
  ));

  const premiumTicketDetailsList = [
    "Goodies et bons d'achat",
    "Accès au Lounge Bar",
    "Meeting privé avec les experts",
  ];
  const premiumTicketDetails = premiumTicketDetailsList.map((detail) => (
    <li>{detail}</li>
  ));

  const vipTicketDetailsList = [
    "Goodies et bons d'achat",
    "Accès au Lounge Bar",
    "Meeting privé avec les experts",
    "Réductions sur les stands d'achats",
  ];

  const vipTicketDetails = vipTicketDetailsList.map((detail) => (
    <li>{detail}</li>
  ));

  return (
    <div>
      <Menu />
      <div className="grid mt-4 justify-content-center align-self-center">
        <div className="text-blue-900">
          <h2> Types de ticket </h2>
        </div>
        <div className="grid m-4 md:flex md:flex-wrap md:justify-content-center md:align-self-center">
          <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
            <TicketType
              image={accessImage}
              category="Access"
              details={accessTicketDetails}
              price="10.000"
            />
          </div>
          <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
            <TicketType
              image={premiumImage}
              category="Premium"
              details={premiumTicketDetails}
              price="30.000"
            />
          </div>
          <div className="col-12  sm:col-6 lg:col-12 xl:col-4 p-2">
            <TicketType
              image={vipImage}
              category="VIP"
              details={vipTicketDetails}
              price="60.000"
            />
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default Booking;
