
import { useState, useEffect } from "react";
import { X } from 'react-bootstrap-icons';

import Header from "../../components/header";
import VideoBackground from "../../components/video_background";
import HairServiceBookingForm from "../../components/booking_form";

import "./booking_form.css";

const HomePage = () => {
    const [isBookingFormOpen, setIsBookingFormOpen] = useState(false); // State for controlling the booking form dialog
    const handleBookingFormOpen = () => {
        setIsBookingFormOpen(true);
    }
    const handleBookingFormClose = () => {
        setIsBookingFormOpen(false);
    }
    useEffect(() => {
        if (isBookingFormOpen) {
          // Disable scrolling on the body when the dialog is open
          document.body.style.overflow = "hidden";
        } else {
          // Enable scrolling on the body when the dialog is closed
          document.body.style.overflow = "auto";
        }
      }, [isBookingFormOpen]);
    return (
        <>
            <Header handleBookingFormOpen={handleBookingFormOpen}/>
            <VideoBackground handleBookingFormOpen={handleBookingFormOpen}/>
            {isBookingFormOpen && (
                    <div className="booking-form-modal" style={{zIndex: "99999"}}>
                        <div className="booking-form-content">
                            {/* Render the HairServiceBookingForm component here */}
                            <HairServiceBookingForm />
                            {/* Add a close button or icon to close the modal */}
                            <X className="close-button" onClick={handleBookingFormClose} />
                        </div>
                    </div>
                )}
            <div style={{height: '10000px'}}></div>
        </>
    );
}

export default HomePage;