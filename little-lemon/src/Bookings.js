import BookingForm from "./BookingForm";

const Bookings = ({submitForm, date, availableTimes, dispatch, field, setField}) => {
    
    return (
        <BookingForm submitForm={submitForm} date={date} availableTimes={availableTimes} dispatch={dispatch} field={field} setField={setField}/>
    )
}

export default Bookings;