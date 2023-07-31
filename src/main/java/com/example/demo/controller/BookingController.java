package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDate;
import java.time.LocalTime;

import com.example.demo.entity.Booking;
import com.example.demo.service.BookingService;
import com.example.demo.request.BookingRequest;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/add")
    public ResponseEntity<String> addBooking(@RequestBody BookingRequest bookingRequest) {
        try {
            // Extract data from the bookingRequest object
            String name = bookingRequest.getName();
            String email = bookingRequest.getEmail();
            String phone = bookingRequest.getPhone();
            String service = bookingRequest.getService();
            LocalDate date = bookingRequest.getDate();
            LocalTime time = bookingRequest.getTime();

            // Create a new Booking entity with the extracted data
            Booking booking = new Booking(name, email, phone, service, date, time);

            // Save the booking using the bookingService
            bookingService.addBooking(booking);

            return ResponseEntity.ok("Booking added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add booking.");
        }
    }
}
