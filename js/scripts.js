var inicio = $('a[href^="#inicio"]');
var participar = $('a[href^="#participar"]');
var premios = $('a[href^="#premios"]');
var sortudos = $('a[href^="#sortudos"]');
var regulamento = $('a[href^="#regulamento"]');
var faq = $('a[href^="#faq"]');
var contato = $('a[href^="#contato"]');

inicio.on('click', function (event) {
	$('html, body').animate({
		scrollTop: 0}, 1000);
	$('nav a').removeClass('ativo');
	$(this).addClass('ativo');
});

participar.on('click', function (event) {
	var target = $(this.getAttribute('href'));
	$("html, body").animate({
		scrollTop: target.offset().top -80}, 1000);
	$('nav a').removeClass('ativo');
	$(this).addClass('ativo');
});

premios.on('click', function(event) {
	var target = $(this.getAttribute('href'));
	$("html, body").animate({
		scrollTop: target.offset().top - 80}, 1000);
	$('nav a').removeClass('ativo');
	$(this).addClass('ativo');
});

sortudos.on('click', function(event) {
	var target = $(this.getAttribute('href'));
	$("html, body").animate({
		scrollTop: target.offset().top - 80}, 1000);
	$('nav a').removeClass('ativo');
	$(this).addClass('ativo');
});

regulamento.on('click', function(event) {
	var target = $(this.getAttribute('href'));
	$("html, body").animate({
		scrollTop: target.offset().top + 21}, 1000);
	$('nav a').removeClass('ativo');
	$(this).addClass('ativo');
});

faq.on('click', function(event) {
	var target = $(this.getAttribute('href'));
	$("html, body").animate({
		scrollTop: target.offset().top - 80}, 1000);
	$('nav a').removeClass('ativo');
	$(this).addClass('ativo');
});

contato.on('click', function(event) {
	var target = $(this.getAttribute('href'));
	$("html, body").animate({
		scrollTop: target.offset().top - 80}, 1000);
	$('nav a').removeClass('ativo');
	$(this).addClass('ativo');
});


//menu-mobile
$('.menu-abrir').on('click', function() {
	document.documentElement.classList.add('menu-ativo');
});

$('.menu-fechar').on('click', function(){
	document.documentElement.classList.remove('menu-ativo');
});

$('.mobile-menu ul li a').on('click', function(){
	document.documentElement.classList.remove('menu-ativo');
});


document.documentElement.onclick = function(event){
	if(event.target === document.documentElement){
		document.documentElement.classList.remove('menu-ativo');
	}
};


//acordion
var acc = $('.accordion');
	var i;

for (i = 0; i < acc.length; i++) {
	acc[i].onclick = function(){

		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).next('.panel').removeClass('show');
		}else{
			$('.accordion').removeClass('active');
			$('.panel').removeClass('show');
			$(this).addClass('active');
			$(this).next('.panel').addClass('show');
		}
	}
}

$('[name=valor-km]').val($('[name=km]').val());
$('[name=km]').on('input', function(){
	$('[name=valor-km]').val(this.value + ' mil');
});

$('[name=distancia-km]').val($('[name=distancia]').val());
$('[name=distancia]').on('input', function(){
	$('[name=distancia-km]').val(this.value + ' km');
});

Inputmask().mask(document.querySelectorAll("input"));


if($("#sem-cupons").length || $("#com-cupons").length ){
	console.log($("#sem-cupons").length);
	$(".box-cupons").css({"background-color" : "#4a4d52"});
	$(".box-cupons").find("a").css({"color" : "#ffffff"});
	$(".box-cupons").find("img").attr("src", "images/icon-cupons-branco.png");
}

if($("#perfil").length){
	$(".box-perfil").css({"background-color" : "#4a4d52"});
	$(".box-perfil").find("a").css({"color" : "#ffffff"});
	$(".box-perfil").find("img").attr("src", "images/icon-user-branco.png");
}