<?php 

	$recipient = "info@grupopsa.com, andrew@luckyme.mx";
	$subject = $_POST['asunto'];


	$name = $_POST['nombre'];
	$business = $_POST['empresa'];
	$message = $_POST['mensaje'];

	$email = $_POST['correo'];

	$formcontent="From: $name \n Business: $business \n Message: $message";
	$mailheader = "From: $email \r\n";
	
	if($subject == false || $name == false || $business == false || $message == false || $email == false){
		$mail_sent = false;
		
		?>

		<script type="text/javascript">
			alert("We can't send messages with blank fields, all fields are required.");
			window.location = 'contacto.html';
		</script>

		<?php

	} else {
		$mail_sent = mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");

		if ($mail_sent == true){ ?>
			<script language="javascript" type="text/javascript">
				alert('Message sent.');
				window.location = 'contacto.html';
			</script>

		<?php 
		} else { 
		?>

			<script type="text/javascript">
				alert('There was an error and the message could not be delivered, if the error persists consult the administrator.');
				window.location = 'contacto.html';
			</script>
		
		<?php 
		} 
	}
	
		
?>