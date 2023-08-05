<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Booking</title>
</head>
<body>
    <h1>Add Booking</h1>
    <form action="saveBooking" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br>
        <label for="date">Date:</label>
        <input type="date" id="date" name="date"><br>
        <input type="submit" value="Submit">
    </form>
    <a href="booking">Back to List</a>
</body>
</html>
