<?php

$name = $_POST['name'];
$email = $_POST['email'];
$age = $_POST['age'];
$comments = $_POST['comments'];

 $mailHeader = "From:" .$name."<".$email.">\r\n";

 $recipient = "wrsmalleytcat@gmail.com";

 mail($recipient, $age, $comments, $mailHeader)
 or die("Error!");

?>