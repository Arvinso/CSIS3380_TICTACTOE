<?php

        $con=mysqli_connect("ec2-52-6-203-170.compute-1.amazonaws.com","s_user30","s_user30","s_user30");
        if (mysqli_connect_errno()){
                echo "Failed to connect to MySQL: " . mysqli_connect_error();
        } 
        else         
        {
        	$p_name = $_POST["name"]; 
			$p_score = $_POST["score"]; 
			$p_id = '';
			$sql = "
			INSERT INTO `players`(`playername`, `score`, `player_id`) 
			VALUES ('" . $p_name ."' ,'" . $p_score . "' , '" . $p_id . "')";  
			
            $result = mysqli_query($con,$sql);
        

            mysqli_close($con);
        }
?>

