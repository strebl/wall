var fitme = function() {
	$('#fitme').textfill({
		//debug: true,
		maxFontPixels   : 9999,
		minFontPixels   : 1//,
		//innerTag: 'textarea',
	    /*success: function(el) {
	        console.log("yay!")
	    },
	    fail: function() {
	        alert("boo hoo!")
	    }*/
	});
}

$('#fitme').on('keyup', function() {
	$('#fitme span').prop('contentEditable', 'false');

	fitme();

	$('#fitme span').prop('contentEditable', 'true');
})

fitme();
$('#fitme span').prop('contentEditable', 'true').focus();