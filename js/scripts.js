function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;	
		this.$element = $('<button>');
		this.$element.text(this.text).css('padding', '15px').css('background-color', '#4aa86b').css('color', '#333').css('fontSize', '20px');
		this.$element.on('click', function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}

var btn1 = new Button('Welcome!');
btn1.create();
