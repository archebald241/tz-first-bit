<?php

include 'DB.php';

header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] === 'GET'){
    $query = "SELECT * FROM section";
    $result = methodGet($query);
    $array = array();
    $arr = array();
    while ($row = mysqli_fetch_array($result)) {
        $arr['id'] = $row['id'];
        $arr['name'] = $row['name'];
        $arr['date_create'] = $row['date_create'];
        $arr['date_change'] = $row['date_change'];
        $arr['description'] = $row['description'];
        $arr['id_parent'] = $row['id_parent'];
        $array[] = $arr;
        $arr=[];
    }
    echo json_encode($array, JSON_UNESCAPED_UNICODE);
}
