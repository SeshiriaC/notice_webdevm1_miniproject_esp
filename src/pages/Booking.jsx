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
    <div className="grid">
        <div className="col m-0 p-0 justify-content-center">
            <img src={bookingImage} width="70%" alt="Illustration booking" />
        </div>
        <div className="col m-0 p-0 align-self-center">
            <BookingForm></BookingForm>
        </div>
    </div>
    {foot}
    </div>
  );
}

export default Booking;