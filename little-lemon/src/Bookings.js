import BookingForm from "./BookingForm";

const Bookings = ({submitForm, availableTimes, dispatch, field, setField}) => {
    
    return (
        <BookingForm submitForm={submitForm} availableTimes={availableTimes} dispatch={dispatch} field={field} setField={setField}/>
    )
}

export default Bookings;