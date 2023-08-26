<?php 
    require "inc/header.php";
?>
<style><?php include "resources/css/loginStyle.css" ?></style>
        <div id = "bigContain">
           <div>
              <h1>Login</h1>

          </div>
          <form action = "/loginAnalyze.php" autocomplete="on" method = "post" target = "_self">
             <label for = "nameAccount">Account:</label><br>
             <input type ="text" id = "nameAccount" name = "nameAccount" value=""><br>
             <label for = "password">Password:</label><br>
             <input type = "password" id = "password" name = "password" value = ""><br>
         </form>
         <button type = "button">Login</button>
         <div>
             <ul>
                <li><a href = "forgotPassWord.php">Forgot password?</a></li>
                <li><a href = "#">Register</a></li>
             </ul>
          </div>
        </div>
        
        <?php 
    require "inc/footer.php";
?>