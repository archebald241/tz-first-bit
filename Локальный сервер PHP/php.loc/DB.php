<?php

$db = mysqli_connect('localhost','root','','tz-react-proj');

function methodGet($query){
    global $db;
    $res = mysqli_query($db, $query);
    return $res;
}
