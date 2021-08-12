
const header = document.getElementById("header");
document.addEventListener('scroll', ()=>{
	if(this.scrollY > 50){
		header.classList.add("active");
	}else{
		header.classList.remove("active");
	}
});

// write code for responsive menu
const menuBtn = document.getElementById('hide-show-menu');
const menu = document.querySelector('#header #nav-bar ul');

menuBtn.addEventListener('click', ()=>{
	if(menu.classList.contains('active')){
		menu.classList.remove('active');
	}else{
		menu.classList.add('active');
	}
});