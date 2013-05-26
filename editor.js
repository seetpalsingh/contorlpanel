// JavaScript Document

$(function() {

	$( "#cm-editor, #result-board" ).draggable({ 
		handle: $(this).find(".dragger"),
		containment: "parent",
		scroll:false,
		iframeFix: true
	});

	$( "#slider-range" ).slider({
		value:100,
		min: 0,
		max: 101,
		slide: function( event, ui ) {
//			console.log(ui.value);
			$( "#result-board" ).css({ background: 'rgba(46,47,49,'+(ui.value/100)+')'});
		}
	});
	
	
	$('.pallet').minicolors({ 
		defaultValue: '#09a35f',
		change: function(hex, rgba){
			var rgba=$( "#result-board" ).css('background-color');
			var alpha=rgba.replace(/^.*,(.+)\)/,'$1')
	console.log(alpha);
		}
	});
	
	
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
		$('#out_'+_id).html(_val);
		
	});
	
			$('#full_name').text('meaon');
});
