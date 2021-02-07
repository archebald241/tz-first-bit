<?php

include 'DB.php';

header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] === 'GET'){
    $query = "SELECT * FROM element";
    $result = methodGet($query);
    $array = array();
    $arr = array();
    while ($row = mysqli_fetch_array($result)) {
        $arr['id'] = $row['id'];
        $arr['id_section'] = $row['id_section'];
        $arr['name'] = $row['name'];
        $arr['date_create'] = $row['date_create'];
        $arr['date_change'] = $row['date_change'];
        $arr['type'] = $row['type'];
        $arr['content'] = $row['content'];
        $array[] = $arr;
        $arr=[];
    }
    echo json_encode($array, JSON_UNESCAPED_UNICODE);
}