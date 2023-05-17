<?php

   $kadi = $_POST['kadi'];
   $sifre = $_POST['sifre'];

	if ($kadi=="" or $sifre=="")
	{
		echo "Lütfen Tüm Alanları Doldurun!";
	}
	else
	{
    if ($kadi=="aleyna.golcu@ogr.sakarya.edu.tr" && $sifre=="B201210304")
		{
			echo "Hoşgeldiniz \"". $sifre ."\"";
		}
		else
		{
			echo "Kullanıcı adı veya şifre yanlış.";
		}
	}
?>
