<?php 

	$recipient = "info@grupopsa.com, andrew@luckyme.mx";
	$subject = $_POST['asunto'];


	$name = $_POST['nombre'];
	$business = $_POST['empresa'];
	$message = $_POST['mensaje'];

	$email = $_POST['correo'];

	$formcontent="From: $name \n Email: $email \n Business: $business \n Message: $message";
	$mailheader = "From: $email \r\n";
	
	if($subject == false || $name == false || $business == false || $message == false || $email == false){
		$mail_sent = false;
		
		?>

		<script type="text/javascript">
			alert("Can't send the message, all fields are required.");
		</script>

		<?php

	} else {
		$mail_sent = mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	}
	

	if ($mail_sent == true){ ?>
		<script language="javascript" type="text/javascript">
			alert('Message sent successfully!');
			window.location = 'contacto.html';
		</script>
		<?php } else { ?>

		<script type="text/javascript">
			alert("Couldn't send the message, try again later or consult with the manager.");
			window.location = 'contacto.html';
		</script>
		<?php } 
		?>

	}

}



?>