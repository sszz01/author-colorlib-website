<?php
$email_to = ""; // to fix
$email_subject = "You've got a new submission";

function problem($error) {
    http_response_code(400); // Set appropriate HTTP status code
    header('Content-Type: application/json'); // Set JSON response header
    echo json_encode(["status" => "error", "message" => $error]);
    die();
}

if (!isset($_POST['fullName']) || !isset($_POST['email']) || !isset($_POST['subject']) || !isset($_POST['message'])) {
    problem('Oh looks like there is some problem with your form data.');
}

$name = $_POST['fullName'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$error_message = "";
$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

if (!preg_match($email_exp, $email)) {
    $error_message .= 'Email address does not seem valid.<br>';
}

$string_exp = "/^[A-Za-z .'-]+$/";

if (!preg_match($string_exp, $name)) {
    $error_message .= 'Name does not seem valid.<br>';
}

if (strlen($message) < 2) {
    $error_message .= 'Message should not be less than 2 characters.<br>';
}

if (strlen($error_message) > 0) {
    problem($error_message);
}

function clean_string($string) {
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
}

$email_message = "Form details following:\n\n";
$email_message .= "Name: " . clean_string($name) . "\n";
$email_message .= "Email: " . clean_string($email) . "\n";
$email_message .= "Subject: " . clean_string($subject) . "\n";
$email_message .= "Message: " . clean_string($message) . "\n";

$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (mail($email_to, $email_subject, $email_message, $headers)) {
    http_response_code(200); // Set appropriate HTTP status code
    header('Content-Type: application/json'); // Set JSON response header
    echo json_encode(["status" => "success", "message" => "Thank you! Your message has been sent."]);
} else {
    problem('Oops! Something went wrong and we couldn\'t send your message.');
}
?>
