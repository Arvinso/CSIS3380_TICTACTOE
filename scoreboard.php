<?php

echo "Trying to connect <br>" ;
        $con=mysqli_connect("ec2-52-6-203-170.compute-1.amazonaws.com","s_user30","s_user30","s_user30");
        if (mysqli_connect_errno()){
                echo "Failed to connect to MySQL: " . mysqli_connect_error();
        } else {
                echo "Connected <br>" ;
                $sql = "Select * from players";
                $result = mysqli_query($con,$sql);
                while($row = mysqli_fetch_array($result))
                {                		
                        echo "<tr><td>" . $row['player_id'] . "</td><td>" . $row['playername'] . "</td><td>" . $row['score'];
                        echo "</td></tr>";
                }

                mysqli_close($con);
        }
?>

