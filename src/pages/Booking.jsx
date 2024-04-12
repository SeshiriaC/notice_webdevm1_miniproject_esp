import Menu from "../component/Menu";
import PageFooter from "../component/PageFooter";
import TicketType from "../component/TicketType";
import vipImage from "../images/gold.png";
import premiumImage from "../images/diamond.png";
import accessImage from "../images/onyx.png";

function Booking() {
  const accessTicketDetailsList = [{ id: 0, detail: "Bon d'achat" }];
  const accessTicketDetails = accessTicketDetailsList.filter((detail) => (
    <li>{detail}</li>
  ));
  const premiumTicketDetails = (
    <ul>
      <li>Goodies et bons d'achat</li>
      <li>Accès au Lounge Bar</li>
      <li>Meeting privé avec les experts</li>
      <li></li>
    </ul>
  );

  const vipTicketDetails = (
    <ul>
      <li>Goodies et bons d'achat</li>
      <li>Accès au Lounge Bar</li>
      <li>Meeting privé avec les experts</li>
      <li>Réductions sur les stands d'achats</li>
    </ul>
  );

  return (
    <div>
      <Menu />
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
      <PageFooter />
    </div>
  );
}

export default Booking;
