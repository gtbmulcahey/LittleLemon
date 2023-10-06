import BookingForm from "./BookingForm";

const Bookings = ({date, availableTimes, dispatch, field, setField}) => {
    
    return (
        <BookingForm date={date} availableTimes={availableTimes} dispatch={dispatch} field={field} setField={setField}/>
    )
}

export default Bookings;