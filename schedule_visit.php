<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
    $time = htmlspecialchars($_POST['time']);
    $message = htmlspecialchars($_POST['message']);

    $to = "jerome.lolong09@gmail.com";
    $subject = "New Visit Request from $name";
    $body = "You have received a new visit request.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Phone: $phone\n".
            "Preferred Date: $date\n".
            "Preferred Time: $time\n".
            "Message: $message\n";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Your visit request has been sent successfully!";
    } else {
        echo "There was an error sending your request. Please try again later.";
    }
}
?>
