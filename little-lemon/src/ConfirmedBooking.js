import './App.css';
import './css/Reservations.css';
import { useLocation } from 'react-router-dom';

function ConfirmedBooking( {formData} ) {

  const { state } = useLocation();
  const { date, reservationTime, guests, occasion } = state

  console.log(`state is ${state}`);
  console.log(`formData is`, formData);
  console.log(`date is ${date}`);
  console.log(`reservationTime is ${reservationTime}`);
  console.log(`guests is ${guests}`);
  console.log(`occasion is ${occasion}`);

    return (
      <div className='olive confirmedReservation'>
        <h1>
          Your Reservation Has Been Confirmed
        </h1>
        <div>
          <div>Date: {date}</div>
          <div>Time: {reservationTime}</div>
          <div>Guests: {guests}</div>
          <div>Occasion: {occasion}</div>
        </div>
      </div>
    );
  }
  
  export default ConfirmedBooking;