import { useEffect } from "react";
import './css/Reservations.css';

function BookingForm( {submitForm, availableTimes, dispatch, field, setField}) {

    useEffect(() => {
        console.log(`in booking form field is ${field} right now`);
        console.log(`in booking form availableTimes is ${availableTimes} right now`);
        console.log(`in booking form dispatch is ${dispatch} right now`);
    }, [field, availableTimes, dispatch]);

    const handleDateChange = (e) => {
        console.log(e.currentTarget.value);
        setField(e.currentTarget.id);
        console.log(`e.target.value is ${e.currentTarget.value}`);
        dispatch({type: 'updateTimesBasedOnDate', payload: e.currentTarget.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submitForm(event.currentTarget[0].value);
    }

    return (
        <>
        <h1>This is the Booking Form</h1>
            <form className="reservations" onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" 
                    onChange={handleDateChange}
                />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" onChange={() => setField("res-time")}>
                {availableTimes.map((time, i) => (
                    <option key={i}>{time}</option>
            ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests"
                onChange={() => setField("guests")}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                onChange={() => setField("occasion")}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"/>
            </form>
            </>
    );
}

export default BookingForm;