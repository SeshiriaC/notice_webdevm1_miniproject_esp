import Menu from "../component/Menu";
import PageFooter from "../component/PageFooter";
import bookingImage from "../images/booking.jpg";
import BookingForm from "../component/BookingForm";

function Booking() {
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
    <div>
    {header}
    <div className="grid md:flex md:flex-wrap md:justify-content-center md:align-self-center">
        <div className="col md:flex m-0 p-0 justify-content-center align-self-center">
            <img src={bookingImage} width="70%" alt="Illustration booking" />
        </div>
        <div className="col m-0 p-0 justify-content-center align-self-center md:flex-grow">
            <BookingForm></BookingForm>
        </div>
    </div>
    {foot}
    </div>
  );
}

export default Booking;