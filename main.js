const dog_result=document.getElementById('dog_result');

let dog_btn=document.getElementById('dog_btn');

var element = document.getElementById('dog_btn');
if(element)
	{
		element.addEventListener('click', getRandomDog)
	}

function getRandomDog(){
	let dog_result = document.querySelector(".result")
	dog_result.innerHTML = ''
  fetch('https://random.dog/woof.json')
	.then(res => res.json())
		.then( data => { if(data.url.includes('.mp4')){getRandomDog()}
    else {
		console.log(data.url)
		let dogImgUrl=data.url
		let dogsImgEl = document.createElement("img")
		dogsImgEl.setAttribute('src',`${dogImgUrl}`)
		let dog_result = document.querySelector(".result")
		dog_result.appendChild(dogsImgEl)
  }
  })
  .catch(err => console.log(err))
}


function temizle(){
    document.getElementById("isim").value="";
    document.getElementById("Soyisim").value="";
    document.getElementById("Eposta").value="";
    document.getElementById("TelNo").value="";
    document.getElementById("DogumTarihi").value="";
    document.getElementById("select").value="";

    document.getElementsByName("cinsiyet").item="";
      document.getElementById("Mesaj").value="";
}

function temizle(){
    document.getElementById("isim").value="";
    document.getElementById("Soyisim").value="";
    document.getElementById("Eposta").value="";
    document.getElementById("TelNo").value="";
    document.getElementById("DogumTarihi").value="";
    document.getElementById("select").value="";
    document.getElementsByName("cinsiyet").item="";
      document.getElementById("Mesaj").value="";
}
function İletisimKontrol(){
     window.location.href="İletisimKontrol.html";
}

function gonder(frm){

	var HepsiDolu = true;



    if(document.getElementById('isim').value==""){
        document.getElementById("isimuyari").innerHTML="İsim boş geçilemez";
		HepsiDolu = false;
    }

    if(document.getElementById('Soyisim').value==""){
        document.getElementById("soyisimuyari").innerHTML="Soyisim boş geçilemez";
		HepsiDolu = false;
    }
    if(document.getElementById('Eposta').value==""){
        document.getElementById("Epostauyari").innerHTML="E posta boş geçilemez";
		HepsiDolu = false;
    }
    if(document.getElementById('TelNo').value==""){
        document.getElementById("TelNouyari").innerHTML="Telefon numarası boş geçilemez";
		HepsiDolu = false;
    }
    if(document.getElementById('DogumTarihi').value==""){
        document.getElementById("DogumTarihiUyari").innerHTML="Doğum tarihi boş geçilemez";
		HepsiDolu = false;
    }

    if(document.getElementById('Eposta').value==""){
        document.getElementById("SizeNeredenUlasırım").innerHTML="Bu alan boş geçilemez";
		HepsiDolu = false;
    }
    if(document.getElementsByName("cinsiyet").value=""){
        document.getElementById("CinsiyetUyari").innerHTML="Bu alan boş geçilemez";
		HepsiDolu = false;
    }
    if(document.getElementById('Mesaj').value==""){
        document.getElementById("Mesajuyari").innerHTML="Mesaj alanı boş geçilemez";
		HepsiDolu = false;
    }

	if(HepsiDolu)
	{
		localStorage.setItem('isim',document.getElementById("isim").value)
		localStorage.setItem('Soyisim',document.getElementById("Soyisim").value)
		localStorage.setItem('Eposta',document.getElementById("Eposta").value)
		localStorage.setItem('TelNo',document.getElementById("TelNo").value)
		localStorage.setItem('DogumTarihi',document.getElementById("DogumTarihi").value)
		localStorage.setItem('select',document.getElementById("select").value)
		localStorage.setItem('Mesaj',document.getElementById("Mesaj").value)
		document.getElementById("uyari").innerHTML="Başarılı bir şekilde gönderildi";
	}
	else
	{
		document.getElementById("uyari").innerHTML="Lütfen gerekli olan tüm alanları doldurun";
	}

 var secim=document.getElementsByName("cinsiyet");
 for(var i=0;i<3;i++){
     if(secim[i].checked){
        localStorage.setItem('cinsiyet',secim[i].value)
     }
 }




}
function tasarimGetir(){
var Tasarim='<div class ="container" style="margin-top:20px">'+

'<hr>'+
'<table border=2 align="center" style="color:#000000;">'+
'<tr><th colspan=3 style="text-align:center;">KİŞİSEL BİLGİLER</th></tr><tr><th>İSİM    </th><td>'+
   '<div id="is" style="width:250px;height:30px;">'+localStorage.getItem('isim')+'</div></td></tr>'+

   '<tr><th colspan=3 style="text-align:center;"><br/></th></tr><tr><th>Soyisim   </th><td>'+
   '<div id="is" style="width:250px;height:30px;">'+localStorage.getItem('Soyisim')+'</div></td></tr>'+

   '<tr><th colspan=3 style="text-align:center;"><br/></th></tr><tr><th>E-Posta   </th><td>'+
   '<div id="is" style="width:250px;height:30px;">'+localStorage.getItem('Eposta')+'</div></td></tr>'+

   '<tr><th colspan=3 style="text-align:center;"><br/></th></tr><tr><th>Tel-No    </th><td>'+
   '<div id="is" style="width:250px;height:30px;">'+localStorage.getItem('TelNo')+'</div></td></tr>'+

   '<tr><th colspan=3 style="text-align:center;"><br/></th></tr><tr><th>DogumTarihi   </th><td>'+
   '<div id="is" style="width:250px;height:30px;">'+localStorage.getItem('DogumTarihi')+'</div></td></tr>'+

   '<tr><th colspan=3 style="text-align:center;"><br/></th></tr><tr><th style="width:200px">Size Nereden Ulaşırım?  </th><td>'+
   '<div id="is" style="width:250px;height:30px;">'+localStorage.getItem('select')+'</div></td></tr>'+


   '<tr><th colspan=3 style="text-align:center;"><br/></th></tr><tr><th>Cinsiyet </th><td>'+
   '<div id="is" style="width:250px;height:30px;">'+localStorage.getItem('cinsiyet')+'</div></td></tr>'+

   '<tr><th colspan=3 style="text-align:center;"><br/></th></tr><tr><th>Mesaj </th><td>'+
   '<div id="is" style="width:250px;height:100px;">'+localStorage.getItem('Mesaj')+'</div></td></tr>'+




   '</table>';

document.body.innerHTML=Tasarim;

}
