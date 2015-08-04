$("#login").submit(function(){

	$.ajax({
		type:'post',
		url:index.php,
		data:data,
		success:success,
		dataType:dataType
	});
})