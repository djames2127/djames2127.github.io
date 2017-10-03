<?php

	$minAge = 18;
	
	if(isset($_POST['submit'])){
		
		if(strlen($_POST['mm'])==1)
		$month = '0'.$_POST['mm'];
		else 
		$month = $_POST['mm'];
		$agevar = $_POST['yy'].'/'.$month.'/'.$_POST['dd'];
		
	  $age = strtotime($agevar);

	  $eightteen = strtotime("-" . $minAge . " years");

	  if($age && $eightteen && $age <= $eightteen){

	     header('Location: http://www.designstub.com');

	  }

	  else{

	    header('Location: ../error.html');

	  }

	}

	?>