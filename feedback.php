<?php
if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['phone'])){

  $headers = 'From: Кротов Роман\r\n'.
'Reply-To: sashalyapunuuunova@gmail.com\r\n'.
'X-Mailer: PHP/'. phpversion();

$theme = 'новое сообщение';

$letter = 'Данное сообщение:\r\n';
$letter .='Имя:'.$_Post['name'].'\r\n';
$letter .='Email:'.$_Post['email'].'\r\n';
$letter .='Телефон:'.$_Post['phone'].'\r\n';

if (mail('sashalyapunuuunova@gmail.com', $theme, $letter, $headers)) {
header('Location:/index.html');
} else{ 
header('Location:/testform');
}
} else{ 
header('Location:/testform');
}
