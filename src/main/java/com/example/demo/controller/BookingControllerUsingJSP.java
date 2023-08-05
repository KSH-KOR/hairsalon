package com.example.demo.controller;

import com.example.demo.entity.Booking;
import com.example.demo.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class BookingController {

    private final BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping("/booking")
    public String showBookingList(Model model) {
        List<Booking> bookings = bookingService.getAllBookings();
        model.addAttribute("bookings", bookings);
        return "booking";
    }

    @GetMapping("/addBooking")
    public String showAddBookingForm() {
        return "addBooking";
    }

    @PostMapping("/saveBooking")
    public String saveBooking(@ModelAttribute Booking booking) {
        bookingService.addBooking(booking);
        return "redirect:/booking";
    }

    @GetMapping("/editBooking")
    public String showEditBookingForm(@RequestParam String id, Model model) {
        Booking booking = bookingService.getBookingById(id);
        model.addAttribute("booking", booking);
        return "editBooking";
    }

    @PostMapping("/updateBooking")
    public String updateBooking(@ModelAttribute Booking booking) {
        bookingService.addBooking(booking);
        return "redirect:/booking";
    }

    @GetMapping("/deleteBooking")
    public String deleteBooking(@RequestParam String id) {
        bookingService.deleteBookingById(id);
        return "redirect:/booking";
    }
}
