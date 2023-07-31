package com.example.demo.repository;

import com.example.demo.entity.Booking;
import java.util.List;
import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, String> {
    List<Booking> findByDateBetween(LocalDate startDate, LocalDate endDate);
}
