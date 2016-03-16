<?php 

	$recipient = "info@grupopsa.com, andrew@luckyme.mx";
	$subject = $_POST['asunto'];


	$name = $_POST['nombre'];
	$business = $_POST['empresa'];
	$message = $_POST['mensaje'];

	$email = $_POST['correo'];

	$formcontent="De: $name \n Empresa: $business \n Mensaje: $message";
	$mailheader = "From: $email \r\n";
	
	if($subject == false || $name == false || $business == false || $message == false || $email == false){
		$mail_sent = false;
		
		?>

		<script type="text/javascript">
			alert('Mensaje no enviado, todos los campos son obligatorios.');
		</script>

		<?php

	} else {
		$mail_sent = mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	}
	

	if ($mail_sent == true){ ?>
		<script language="javascript" type="text/javascript">
			alert('Mensaje enviado');
			window.location = 'contacto.html';
		</script>
		<?php } else { ?>

		<script type="text/javascript">
			alert('Mensaje no enviado, consulta al administrador.');
			window.location = 'contacto.html';
		</script>
		<?php } 
		?>

	}

}



?>