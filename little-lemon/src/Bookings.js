import BookingForm from "./BookingForm";

const Bookings = ({availableTimes, dispatch, field, setField}) => {
    
    return (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} field={field} setField={setField}/>
    )
}

export default Bookings;