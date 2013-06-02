// JavaScript Document



$(function() {
	
	var o	=	'1';
	var r	=	'46';
	var g	=	'47';
	var b	=	'49';
	
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
		start: function(){
			
		},
		slide: function( event, ui ) {
//			console.log(ui.value);
			$( "#result-board" ).css({ background: 'rgba('+ r +','+ g +','+ b +','+ (ui.value/100)+ ')'});
				console.log(r,g,b);
				o	=	(ui.value/100);
				console.log(o);
		}
	});
	
/*	
	$('.pallet').ColorPicker({
		color: '#0000ff',
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('#colorSelector div').css('backgroundColor', '#' + hex);
		}
	});
	
*/

//	result board bg color
	$('#bg-color').ColorPicker({
		color: '#2e2f31',
		onChange: function (hsb, hex, rgb) {
			$('#result-board').css({ 'background-color' : 'rgba('+ rgb.r +' , '+ rgb.g +' , '+ rgb.b +',' + o +')'});
			$('#bg-color div').css({ 'background-color' : 'rgba('+ rgb.r +' , '+ rgb.g +' , '+ rgb.b +',' + o +')'});
//			console.log(rgb.r, rgb.g, rgb.b, o);
			
			r=rgb.r;
			g=rgb.g;
			b=rgb.b;
		}
	});
	
//	text color
	$('#text-color').ColorPicker({
		color: '#fff',
		onChange: function (hsb, hex, rgb) {
			$('#result-board').css({ 'color' : hex});
			$('#text-color div').css({ 'background-color' : hex});
			console.log(hex);
		}
	});
	
//	highlights color
	$('#glow-color').ColorPicker({
		color: '#fff',
		onChange: function (hsb, hex, rgb) {
			$('#result-board span').css({ 'color' : hex});
			$('#glow-color div').css({ 'background-color' : hex});
			console.log(hex);
		}
	});
	
	
	$('#cm-editor input[type="text"]').bind('change', function(){
		var _id		=	$(this).attr('name');
		var _split	=	$(this).val();
		
		if(_id	==	'page_title'){
			document.title = _split;
		}
		console.log('#'+_id, _split);
		$('#out_'+_id).html(_split);
		
	});
	
	$('#cm-editor input[type="radio"]').change(function(){
		var _id		=	$(this).attr('name');
		var _val	=	$(this).attr('alt');
		
		console.log('#'+_id, _val);
		$('#out_'+_id).html(_val);
		
	});
	
	$('#page_tags').tagsInput({
								onChange : function(){
									$('#page_tags').queue(function(){
											var _id		=	$(this).attr('name');
											var _split	=	$(this).val();
											
											console.log('#'+_id, _split);
											
										if(!$('#hide').is(":checked")){
											$('#out_'+_id).html(_split);
											
										}	// 	if ends
										else{
											$('#out_'+_id).html('');
										};
											$(this).dequeue();
									});	
								}
							 });
	
});
