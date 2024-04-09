import Menu from "../component/Menu";
import PageFooter from "../component/PageFooter";
import BookingForm from "../component/BookingForm";
import TicketType from "../component/TicketType";
import vipImage from "../images/vip-pass.png"

function Booking() {
  return (
    <div>
      <Menu />
      <div className="grid m-4 md:flex md:flex-wrap md:justify-content-center md:align-self-center">
        <div className="col m-0 p-0 justify-content-center align-self-center md:flex-grow">
          <BookingForm />
        </div>
        <div className="col m-0 p-0 md:flex justify-content-center align-self-center">
          <TicketType image={vipImage} category="Pass VIP" price="60.000 MGA"/>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default Booking;
