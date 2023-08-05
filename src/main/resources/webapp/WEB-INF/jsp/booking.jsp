<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Booking List</title>
</head>
<body>
    <h1>Booking List</h1>
    <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Date</th>
            <th>Action</th>
        </tr>
        <c:forEach var="booking" items="${bookings}">
            <tr>
                <td>${booking.id}</td>
                <td>${booking.name}</td>
                <td>${booking.date}</td>
                <td>
                    <a href="booking?id=${booking.id}">View</a>
                    <a href="editBooking?id=${booking.id}">Edit</a>
                    <a href="deleteBooking?id=${booking.id}">Delete</a>
                </td>
            </tr>
        </c:forEach>
    </table>
    <a href="addBooking">Add Booking</a>
</body>
</html>
