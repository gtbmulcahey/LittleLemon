import { useEffect } from "react";
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


function BookingForm( {submitForm, date, availableTimes, dispatch, field, setField}) {
    const { isLoading, response, submit } = useSubmit();

    useEffect(() => {
        console.log(`in booking form field is ${field} right now`);
        console.log(`in booking form date is ${date} right now`);
        console.log(`in booking form availableTimes is ${availableTimes} right now`);
        console.log(`in booking form dispatch is ${dispatch} right now`);
    }, [field, date, availableTimes, dispatch]);

    const handleDateChange = (e) => {
        console.log(e.currentTarget.value);
        setField(e.currentTarget.id);
        console.log(`e.target.value is ${e.currentTarget.value}`);
        dispatch({type: 'updateTimesBasedOnDate', payload: e.currentTarget.value});
    }

    const formik = useFormik({
        initialValues: {
            reservationDate: date,
            reservationTime: '',
            guests: '',
            occasion: 'Anniversary',
          
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          submit("someUrl", values);
        },
        validationSchema: Yup.object().shape({
            reservationDate: new Yup.DateSchema()
            .required("Required"),
            reservationTime: Yup.string()
            .required("Required"),
            guests: new Yup.NumberSchema()
            .required("Required"),
            occasion: Yup.string()
            .required("Required")
        }),
      });

    return (
        // <div className="gold booking-form-content olive-background">
    <div className='olive booking-form-content gold-background'> 
            <Heading as="h1" className='olive' id="reserveTableSection">Reserve a Table</Heading>
                <form className="reservations olive" onSubmit={formik.handleSubmit}>
                    <VStack alignItems="flex-start">
                        <FormControl isInvalid={formik.touched.reservationDate && formik.errors.reservationDate}>
                            <FormLabel htmlFor="reservationDate">Choose date</FormLabel>
                            <Input id="reservationDate" 
                                type="date" 
                                value={formik.values.reservationDate}
                                onChange={formik.handleChange}
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