import AppointmentBanner from "../../../components/Appointments/AppointmentBanner";
import AppointmentForm from "../../../components/Appointments/AppointmentForm";
import Doctors from "../../../components/Appointments/Doctors";

export default function Appointment (){
    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            <AppointmentForm></AppointmentForm>
            <Doctors></Doctors>
        </div>
    )
}