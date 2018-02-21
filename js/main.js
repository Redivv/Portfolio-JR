$(document) .ready(function(
){
	listener_arrow();
	setTimeout(function(){
		$('.arrow').addClass('arrowIn');
	},1000);
	
	listener_contact();
	
});

function listener_arrow()
{
	$('.arrow') .on('click',function()
	{
		$("html, body") .animate({scrollTop:0},1000);
	});
}

function listener_contact()
{
	$('.contact_btn').on('click', function()
	{
		//console.log('DUPA');
		$('.error').css('display', 'none');
		$.ajax({
			type: "POST",
			dataType: 'json',
			url:"send.php",
			data:
			{
				name:$('#c_name').val(),
				email:$('#c_email').val(),
				text:$('#c_text').val()
			}
		})
		.done(function(data)
		{
			//console.log('dupcia jeża');
			if(data.type=='error')
			{
				$.each(data.code, function(k,v)
				{
					$('.err_c_'+k) .html(v) .css('display','block');
				});
			}
			else
			{
				$('.kontakt_box_all1').css('display','none');
				$('.kontakt_box_all2').css('display','block').html(data.code);
			}
		});
	});
}