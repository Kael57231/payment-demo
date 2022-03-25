
var m=0;
function inputClick(value){
	  var x= $('.input_formOne').val();
	 var res= /^[0-9]{16,19}$/;//1234567891234567
	  if(!res.test(x)){
		  $('.form1').css('display','block');
	       $('.form1').html('Please enter the correct credit card number!');
		   return m=0;
	  }else{
	     $('.form1').css('display','none');
		 return m=1;
		
	  }
	
	
}
var l=0;
function inputClick2(){
	 var s= $('.input_formTwo').val();
	  var rsg=/^[A-Za-z0-9]{3}$/;
	 if(!rsg.test(s)){
		
		 $('.form2').css('display','block');
		  $('.form2').html('Enter the correct security code!');
		  return l=0;
	 }else{
		  $('.form2').css('display','none');
		   return l=1;
	 }
}

var p=0;
function numns(){
	var s= $('.input_num').val();
	if(!s==""){
		$('.form3').css('display','none');
		 return p=1;
	}else{
		$('.form3').css('display','block');
		 $('.form3').html('Cannot be empty!');
		 return p=0;
	}
	
}

var u=0;
function newming(){
	var k= $('.input_ming').val();

	if(!k==""){
		$('.form5').css('display','none');
		 return u=1;
	}else{
		$('.form5').css('display','block');
		 $('.form5').html('Cannot be empty!');
		 return u=0;
	}
	
}


function btns(){
	inputClick2()
	inputClick();
	numns()
	newming();
	if(m!=1){
		alert('Content error');
	}else if(p!=1){
		alert('Content error');
	}else if(l!=1){
		alert('Content error');
	}else if(u!=1){
		alert('Content error');
	}else{
		alert("Payment successful");
	}
	
}