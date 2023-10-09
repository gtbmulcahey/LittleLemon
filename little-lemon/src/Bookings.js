import BookingForm from "./BookingForm";
import {useNavigate} from 'react-router-dom';

const Bookings = ({date, availableTimes, dispatch, field, setField}) => {
    const navigate = useNavigate();

        const confirmBooking = (reservationData) => {
            console.log('reservationData', reservationData);
            navigate("/ConfirmedBooking/", { state: reservationData });
          }

    return (
        <BookingForm date={date} availableTimes={availableTimes} dispatch={dispatch} field={field} setField={setField} confirmBooking={confirmBooking}/>
    )
}

export default Bookings;