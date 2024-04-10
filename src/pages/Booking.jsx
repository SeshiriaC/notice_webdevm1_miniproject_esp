import Menu from "../component/Menu";
import PageFooter from "../component/PageFooter";
import TicketType from "../component/TicketType";
import vipImage from "../images/gold.png";
import premiumImage from "../images/diamond.png";
import accessImage from "../images/onyx.png";

function Booking() {
  return (
    <div>
      <Menu />
      <div className="grid m-4 md:flex md:flex-wrap md:justify-content-center md:align-self-center">
        <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
          <TicketType image={accessImage} category="Access" price="10.000" />
        </div>
        <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
          <TicketType image={premiumImage} category="Premium" price="30.000" />
        </div>
        <div className="col-12  sm:col-6 lg:col-12 xl:col-4 p-2">
          <TicketType image={vipImage} category="VIP" price="60.000" />
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default Booking;
