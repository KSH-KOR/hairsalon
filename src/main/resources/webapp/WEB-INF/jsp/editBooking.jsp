<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit Booking</title>
</head>
<body>
    <h1>Edit Booking</h1>
    <form action="updateBooking" method="post">
        <input type="hidden" name="id" value="${booking.id}">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="${booking.name}"><br>
        <label for="date">Date:</label>
        <input type="date" id="date" name="date" value="${booking.date}"><br>
        <input type="submit" value="Update">
    </form>
    <a href="booking">Back to List</a>
</body>
</html>
