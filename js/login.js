$(function (){
	$(".box").focus(function(){
		$(this).parent().css("border-color","red");
	}).blur(function(){
		$(this).parent().css("border-color","#999999");
	});



	$("#btn").click(function(e){
		var obj={};
		obj["mobile"]=$("#mobile").val();
		obj["pwd"]=$("#pwd").val();
		jsons=JSON.stringify(obj);

		if ($("#mobile").val()=='') {
			$("#empho").fadeIn('slow');
			setTimeout(function(){
				$("#empho").fadeOut("slow");},2000);
		}
		else if($("#pwd").val()=='') {
			$("#empwd").fadeIn('slow');
			setTimeout(function(){
				$("#empwd").fadeOut("slow");},2000);
		}else{
			$.ajax({
			contentType:"application/json",
			type:"POST",
			url:"http://www.ftusix.com/static/data/login.php",
			data:jsons,
			dataType:"json",
			error:function(XMLHttpRequest,textStatus){
				console.log(textStatus);

			},
			success:function(data,textStatus){

				console.log(data);
				if(data.status==1){
					window.location.href="mine.html?mobile="+data.data[0].mobile;
				}

			}

		})

		}

	

	})
});