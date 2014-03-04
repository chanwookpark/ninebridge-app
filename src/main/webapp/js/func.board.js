

var doc = document; 
var members = doc.getElementById('members'); 
var templateMembers = doc.getElementById('templateMembers');
var _bind = function(e,k,v){ e[k]=v; };
var _util = {
	dustMarkupReplace:function(m) {
		return m.replace(/[\n\r\t]/g, '')
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/  /g, '');
	}
};



_bind(members, 'dustr', function(data) {
	var element = this; 
	
	dust.render(element.id, data, function(err, out) {
		element.innerHTML = out; 
	});
});
_bind(templateMembers, 'dustc', function() {
	dust.loadSource(
		dust.compile(
			_util.dustMarkupReplace(this.innerHTML), 
			this.title
		)
	);
});


// console.log('renderJson', renderJson); 

/* init */ 
templateMembers.dustc(); 
members.dustr(renderJson);


