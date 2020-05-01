<?php
//	header("Content-type: text/html; charset=utf-8");

$to = 'dmitrydevelopermd@gmail.com';

$json_object = file_get_contents('bid_count.json');
$data = json_decode($json_object, true);
//echo '<pre>' . print_r($data['main_form']['count'], true) . '</pre>';


$name = $_POST['name'];
$phone = $_POST['phone'];
$place = $_POST['place'];
$price = $_POST['price'];
$form_type = $_POST['form_type'];
$bid_number = 0;
if($form_type =='Заказ парковочного места') {
    $bid_number = $data['main_form']['count'] + 1;
} else {
    $bid_number = $data['sales_start_form']['count'] + 1;
}

$subject = "Заявка с сайта Fm-parking";
$message = '
		<div><strong>Типо формы:</strong> ' . $form_type . '</div>
		<div><strong>Имя:</strong> ' . $name . '</div>
		<div><strong>Телефон:</strong> ' . $phone . '</div>
		<div><strong>Парковочное место:</strong> №' . $place . '</div>
		<div><strong>Цена:</strong> ' . $price . ' ₽</div>
		<div><strong>Дата и время:</strong> ' . date("d-m-Y H:i:s") . '</div>
		<div><strong>Номер заявки:</strong> ' . $bid_number . '</div>
	';

$headers = "From: Fm-Parking\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

if (!empty($_POST['name']) && !empty($_POST['phone'])) {
    mail($to, $subject, $message, $headers);

    if($form_type =='Заказ парковочного места') {
        $data['main_form']['count'] = $data['main_form']['count'] + 1;
    } else {
        $data['sales_start_form']['count'] = $data['sales_start_form']['count'] + 1;
    }
    $json_object = json_encode($data);
    file_put_contents('bid_count.json', $json_object);

    echo 'success';
} else {
    echo 'error';
}

?>