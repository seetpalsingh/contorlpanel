// JavaScript Document

$(function() {

	$( "#cm-editor, #result-board" ).draggable({ 
		handle: $(this).find(".dragger"),
		containment: "parent",
		scroll:false,
		iframeFix: true
	});

	$( "#slider-range" ).slider();
	
	
	$('#bg-color, #text-color').minicolors({ defaultValue: '#09a35f'});
	
	
	$('#cm-editor input[type="text"]').change(function(){
		var _id		=	$(this).attr('name');
		var _split	=	$(this).val();
		
		console.log('#'+_id, _split);
		$('#out_'+_id).html(_split);
		
	});
	
	$('#cm-editor input[type="radio"]').change(function(){
		var _id		=	$(this).attr('name');
		var _val	=	$(this).attr('alt');
		
		console.log('#'+_id, _val);
		$('#'+_id).html(_val);
		
	});
	
			$('#full_name').text('meaon');
});
