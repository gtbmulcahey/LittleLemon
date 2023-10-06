import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import './css/Reservations.css';
import { useFormik } from "formik";
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    VStack,
  } from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "./useSubmit";


function BookingForm( {date, availableTimes, dispatch, field, setField}) {

    const { isLoading, response, submit } = useSubmit();
    const navigate = useNavigate();
    const firstAvailableTime = availableTimes[0];

    const formik = useFormik({
        initialValues: {
            date: date,
            reservationTime: firstAvailableTime,
            guests: '1',
            occasion: 'Anniversary',
        },
        onSubmit: (values) => {
            console.log('Form data submit', values);
          //alert(JSON.stringify(values, null, 2));
            //await submit("someUrl", values);
                //const { date, reservationTime, guests, occasion } = values;
                //console.log(`SubmittedreservationTime is ${reservationTime}`);
                //submit(url='someUrl', data={formValues})
                submit({url: 'someUrl', data: values});
              
        },
        validate: values => {
            let errors = {};

            if(!values.date) {
                errors.date = 'Required'
            }

            if(!values.reservationTime) {
                errors.reservationTime = 'Required'
            }

            if(!values.guests) {
                errors.guests = 'Required'
            }

            if(!values.occasion) {
                errors.occasion = 'Required'
            }
            return errors;
        },
        validationSchema: Yup.object().shape({
            date: new Yup.DateSchema()
            .required("Required"),
            reservationTime: Yup.string()
            .required("Required"),
            guests: new Yup.NumberSchema()
            .required("Required"),
            occasion: Yup.string()
            .required("Required")
        }),
      });

    useEffect(() => {
        console.log(`in booking form field is ${field} right now`);
        console.log(`in booking form date is ${date} right now`);
        console.log(`in booking form availableTimes is ${availableTimes} right now`);
        console.log(`in booking form first availableTime is ${firstAvailableTime} right now`);
        console.log(`in booking form dispatch is ${dispatch} right now`);
        console.log('Form values', formik.values);
        if(response) {
                navigate("/ConfirmedBooking");
                formik.resetForm();
        }  
    }, [field, date, availableTimes, dispatch, response, formik.values]);


    const handleDateChange = (e) => {
        console.log(e.currentTarget.value);
        setField(e.currentTarget.id);
        formik.setFieldValue("date", e.currentTarget.value);
        console.log(`e.target.value is ${e.currentTarget.value}`);
        dispatch({type: 'updateTimesBasedOnDate', payload: e.currentTarget.value});
    }



    return (
        // <div className="gold booking-form-content olive-background">
    <div className='olive booking-form-content gold-background'> 
            <Heading as="h1" className='olive' id="reserveTableSection">Reserve a Table</Heading>
                <form className="reservations olive" onSubmit={formik.handleSubmit}>
                    <VStack alignItems="flex-start">
                        <FormControl isInvalid={false}>
                            <FormLabel htmlFor="date">Choose date</FormLabel>
                            <Input id="date" 
                                type="date" 
                                value={formik.values.date}
                                onChange={handleDateChange}
                                onBlur={formik.handleBlur}
                                //onChange={handleDateChange}
                                required
                            />
                            <FormErrorMessage>Required</FormErrorMessage>
                        </FormControl> 

                        <FormControl isInvalid={false}>
                            <FormLabel htmlFor="reservationTime">Choose time</FormLabel>
                            <Select id="reservationTime" 
                                required 
                                value={formik.values.reservationTime}
                                data-testid='availableTimesTestId'
                                onBlur={formik.handleBlur}
                                onSelect={formik.handleChange}
                                onChange={(e) => {
                                    formik.setFieldValue('reservationTime', e.target.value);
                                }}
                            >
                                {availableTimes.map((time, i) => (
                                <option key={i}>{time}</option>
                                ))}
                            </Select>
                        </FormControl>
                        
                        <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
                            <FormLabel htmlFor="guests">Number of guests</FormLabel>
                            <NumericFormat id="guests"
                                name="guests" 
                                required 
                                type="number" 
                                value={formik.values.guests}
                                placeholder="1" 
                                min="1" 
                                max="10" 
                                onValueChange={(values) => {
                                    const {value} = values;
                                    formik.setFieldValue("guests", value);
                                    }}
                                    />
                            <FormErrorMessage>Required</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={false}>
                            <FormLabel htmlFor="occasion">Occasion</FormLabel>
                            <Select id="occasion" 
                                onSelect={formik.handleChange}
                                value={formik.values.occasion}
                                onBlur={formik.handleBlur}
                                onChange={(e) => {
                                    formik.setFieldValue('occasion', e.target.value);
                                }}
                                >
                                <option>Birthday</option>
                                <option>Engagement</option>
                                <option>Anniversary</option>
                            </Select>
                        </FormControl>


                        <Button isLoading={isLoading} type="submit" className='white olive-background' width="full">Reserve Table</Button>
                    </VStack>
                </form>
    </div>
    );
}

export default BookingForm;