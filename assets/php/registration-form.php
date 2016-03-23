<?php
if ((isset($_POST['first_name'])) && (strlen(trim($_POST['first_name'])) > 0)) {
    $first_name = stripslashes(strip_tags($_POST['first_name']));
} else {
    $first_name = 'No name entered';
}
if ((isset($_POST['last_name'])) && (strlen(trim($_POST['last_name'])) > 0)) {
    $last_name = stripslashes(strip_tags($_POST['last_name']));
} else {
    $last_name = 'No name entered';
}
if ((isset($_POST['email'])) && (strlen(trim($_POST['email'])) > 0)) {
    $email = stripslashes(strip_tags($_POST['email']));
} else {
    $email = 'No email entered';
}
if ((isset($_POST['phone'])) && (strlen(trim($_POST['phone'])) > 0)) {
    $phone = stripslashes(strip_tags($_POST['phone']));
} else {
    $phone = 'No phone entered';
}
if ((isset($_POST['tixtype'])) && (strlen(trim($_POST['tixtype'])) > 0)) {
    $tixtype = stripslashes(strip_tags($_POST['tixtype']));
} else {
    $tixtype = 'No ticket type selected';
}
if ((isset($_POST['org'])) && (strlen(trim($_POST['org'])) > 0)) {
    $org = stripslashes(strip_tags($_POST['org']));
} else {
    $org = 'No school or organization entered';
}
if ((isset($_POST['field'])) && (strlen(trim($_POST['field'])) > 0)) {
    $field = stripslashes(strip_tags($_POST['field']));
} else {
    $field = 'No field selected';
}
if ((isset($_POST['interest'])) && (strlen(trim($_POST['interest'])) > 0)) {
    $interest = stripslashes(strip_tags($_POST['interest']));
} else {
    $interest = 'No interests entered';
}
ob_start();
?>
<html>
<head>
    <style type="text/css">
    </style>
</head>
<body>
<table width="550" border="0" cellspacing="0" cellpadding="15">
    <tr bgcolor="#eeffee">
        <td>Name</td>
        <td><?php echo $first_name; ?></td>
    </tr>
    <!-- <tr bgcolor="#eeeeff">
        <td>Last Name</td>
        <td><?php echo $last_name; ?></td>
    </tr> -->
    <tr bgcolor="#eeeeff">
        <td>Email Address</td>
        <td><?php echo $email; ?></td>
    </tr>
    <!-- <tr bgcolor="#eeeeff">
        <td>Phone Number</td>
        <td><?php echo $phone; ?></td>
    </tr> -->
    <tr bgcolor="#eeffee">
        <td>Ticket Type</td>
        <td><?php echo $tixtype; ?></td>
    </tr>
    <tr bgcolor="#eeeeff">
        <td>School or Organization</td>
        <td><?php echo $org; ?></td>
    </tr>
    <tr bgcolor="#eeffee">
        <td>Field</td>
        <td><?php echo $field; ?></td>
    </tr>
    <tr bgcolor="#eeeeff">
        <td>Interests at D3</td>
        <td><?php echo $interest; ?></td>
    </tr>
</table>
</body>
</html>
<?php
$body = ob_get_contents();

$to = 'info@d3expo.com';
$toname = 'D3 Expo';
//$anotheraddress = 'email@example.com';
//$anothername = 'Another Name';

require("phpmailer.php");

$mail = new PHPMailer();

$mail->From = $email;
$mail->FromName = $name;
$mail->AddAddress($to, $toname); // Put your email
//$mail->AddAddress($anotheraddress,$anothername); // addresses here

$mail->WordWrap = 50;
$mail->IsHTML(true);

$mail->Subject = "New D3 Registration";
$mail->Body = $body;
$mail->AltBody = $message;

if (!$mail->Send()) {
    $recipient = $to;
    $subject = 'Registration form failed';
    $content = $body;
    mail($recipient, $subject, $content, "From: $name\r\nReply-To: $email\r\nX-Mailer: DT_formmail");
    exit;
}
?>
