import BookingForm from "./BookingForm";

const Bookings = ({availableTimes, field, setField}) => {
    
    return (
        <BookingForm availableTimes={availableTimes} field={field} setField={setField}/>
    )
}

export default Bookings;