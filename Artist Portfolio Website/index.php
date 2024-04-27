<?php 
if(isset($_POST['submit'])){
    $to = "wrsmalleytcat@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $age = $_POST['age'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $name. " wrote the following:" . "\n\n" . $_POST['age'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <title>For Fun Webstie</title>
</head>
<body id="body">
    
    <main id="mainMain">
        <div id="main-div">
            <h1>THIS IS THE TITLE</h1>
            <p>WELCOME TO THE TITLE</p>
            <hr id="main-hr">
        </div>

        <br>

        <div id="div-one">
            <h2>lorem ipsum 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam necessitatibus, expedita fugiat aliquam saepe sapiente 
                quaerat perferendis mollitia velit natus eligendi vero ratione reiciendis sint 
                neque deleniti repellendus laudantium minus.</p>

                <button onclick="countUp(), myFunctionOne(), countIf()" class="count" id="button-one">Click Me</button>
        </div>

        <div id="div-two">
            <h2>lorem ipsum 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam necessitatibus, expedita fugiat aliquam saepe sapiente 
                quaerat perferendis mollitia velit natus eligendi vero ratione reiciendis sint 
                neque deleniti repellendus laudantium minus.</p>

                <button class="count" onclick="countUp(), myFunctionTwo(), countIf()">Click Me</button>
        </div>

        <div id="div-three">
            <h2>lorem ipsum 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam necessitatibus, expedita fugiat aliquam saepe sapiente 
                quaerat perferendis mollitia velit natus eligendi vero ratione reiciendis sint 
                neque deleniti repellendus laudantium minus.</p>

                <button class="count" onclick="countUp(), myFunctionThree(), countIf()">Click Me</button>
        </div>

        <div id="div-four">
            <h2>lorem ipsum 4</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magnam necessitatibus, expedita fugiat aliquam saepe sapiente 
                quaerat perferendis mollitia velit natus eligendi vero ratione reiciendis sint 
                neque deleniti repellendus laudantium minus.</p>

                <button class="count" onclick="countUp(), myFunctionFour(), countIf()">Click Me</button>
        </div>

        <div id="form-div">

            <div id="nameEmailAge">
                <h2><em>FORM</em></h2>
                <hr>

                <form action="index.php" method="post">
                    <label for="fnameLName">Full Name:</label><br>
                    <input type="text" id="fnameLName" name="name" placeholder="EX: John Doe" required><br>
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" name="email" placeholder="EX: YourEmail@Email.com" required><br>
                    <label for="age">Age:</label><br>
                    <input type="number" id="age" name="age" placeholder="EX: 1 - 150" min="1" max="150" required><br>
                    <label for="comments">Comments:</label><br>
                    <input type="text" name="comments" id="comments" placeholder="Additional Comments:" size="45"><br>
                    <br>
                    <input type="submit" name="submit" value="Submit">
                </form>

            </div>

        </div>

    </main>
</body>
<script src="javascript/javascript.js"></script>
</html>