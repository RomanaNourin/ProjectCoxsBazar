<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Sign Up</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css
    ">
    </head>
<style type="text/css">
    body {
    background: white;
    font-family: arial;
    }
</style>
<body>
<?php
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $connection = mysqli_connect($host,$username,$password);
    $db_name ='subscribe';
    if($connection){
        $db_select = mysqli_select_db($connection,$db_name);
        if($db_select){
            //echo "ok";
        }
        else{
            die('No database selected!'.mysqli_error($connection));
        }
    }
    else{
        die('Database connection failed!'.mysqli_error($connection));
    }
    $Username=$_POST['fullname'];
    $Email=$_POST['email'];
    $sql="INSERT INTO subscribe_info (fullname,email) VALUES('$Username','$Email')";
    
    if(!mysqli_query($connection,$sql))
    {
        echo "Data not Inserted!";
    }
    else
    {
        include("success.php");
    }
?>
</body>
</html>