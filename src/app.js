import render from './render.js';

module.exports = {
	welcome: function(){
		return this.congratulation();
	},
	template: function(temp,opt){
		if(temp === 'bootstrap'){
			return this.bootstrapTemplate(opt);
		} 
		else if(temp === 'mui') {
			return this.materialuiTemplate();
		}
		
	},
	inlineCss: function(css){
		if(!css) return;
		const head = document.getElementsByTagName('head')[0];
		var style = document.createElement('style');
		head.appendChild(style);
		style.type = 'text/css';
		if (style.styleSheet){
		  // This is required for IE8 and below.
		  style.styleSheet.cssText = css;
		} else {
			let vcss='';
			Object.keys(css).forEach(function(key) {
			  vcss = JSON.stringify(css[key]).replace(/"/g, '').replace('font','font-').toLowerCase().
			  	  replace('padding','padding-').toLowerCase().
			  	  replace('margin','margin-').toLowerCase().
			  	  replace('borderradius','border-radius').toLowerCase().
			  	  replace('bordertop','border-top').toLowerCase().
			  	  replace('borderleft','border-left').toLowerCase().
			  	  replace('borderright','border-right').toLowerCase().
			  	  replace('borderbottom','border-bottom').toLowerCase().
			  	  replace('margin','margin-').toLowerCase();
			  style.appendChild(document.createTextNode(key.replace(/class/g, '.').replace(/id/g, '#').toLowerCase()+vcss.replace(/,/g, ';').replace('}', ';}')));
			});
		}
	},
	importCss: function(using){
		if(!using || using==='bootstrap') return this.importBootstrapAssets();
	},
	bootstrapTemplate: function(opt){
		const link_style = [
			'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
			'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
		];
		const link_src = [
			'https://code.jquery.com/jquery-3.4.1.min.js',
			'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
			'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'
		];

		render(opt);

		// loadStyle
		for (var i = 0; i < link_style.length; i++) {
			this.loadStyle(link_style[i]);
		}
		// // loadScript
		for (var i = 0; i < link_src.length; i++) {
			this.loadScript(link_src[i]);
		}
	},
	materialuiTemplate: function(){
		const link_style = [
			'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
			'https://cdn.muicss.com/mui-0.10.2/css/mui.min.css'
		];
		const link_src = [
			'https://code.jquery.com/jquery-3.4.1.min.js',
			'https://cdn.muicss.com/mui-0.10.2/js/mui.min.js'
		];

		// loadStyle
		for (var i = 0; i < link_style.length; i++) {
			this.loadStyle(link_style[i]);
		}
		// // loadScript
		for (var i = 0; i < link_src.length; i++) {
			this.loadScript(link_src[i]);
		}
	},
	loadStyle: function(src){
		const styleToAdd = document.createElement('link');
	    styleToAdd.rel = 'stylesheet';
	    styleToAdd.type = 'text/css';
	    styleToAdd.href = src;
	    document.head.appendChild(styleToAdd);
	},
	loadScript: function(src){
		const scriptToAdd = document.createElement('script');
	    scriptToAdd.type = 'text/javascript';
	    scriptToAdd.src = src;
	    document.body.appendChild(scriptToAdd);
	},
	congratulation: function(){
		const images = require('./img/logo.png');
		document.body.innerHTML += '<div style="font-family:arial;background:#223;width:100%;height:100vh;text-align:center;color:#fafafa;position:fixed;top:0;left:0;right:0;"><img src="'+images+'" width="100" height="100" style="border-radius:50%;transform:translateY(60px);box-shadow:0px 0px 2px 2px #666;"><div style="margin:1% 10%;width:auto;padding:50px 30px;background:rgba(0,0,0,0.3);color:#fafafa;box-shadow:0px 0px 5px 2px #666;text-align:center;line-height:1.5;font-size:20px;"><h1 style="color:lightgreen;">Congratulation</h1><p>To get started, please go to <span style="color:#ff6;">src/index.js</span> then change <span style="color:#ff6;">app.welcome()</span> with <span style="color:#ff6;">app.template(params)</span><br>fill param with <span style="color:#ff6;">"bootstrap" or "materialui"</span><br> if you don`t send this param, this will work using template using bootstrap</p></div></div>';
	},
	msginfo: function(msg,data){
		const a = document.querySelector('.app');
		a.innerHTML=`
			<div style="opacity:.9;position:fixed;top:0;left:0;right:0;background:rgba(0, 0, 0, 0.835);font-size:15px;">
				<div style="width:375px;margin:5% auto;color:#ff6;overflow:auto;">
					<h3 style="color:#f25000;">`+msg+`</h3>
					<div style="line-height:1.5;font-size:16px;">
				    {
				    	<br>
						&nbsp;&nbsp;&nbsp;&nbsp;element: '`+data.element+`',<br>
						&nbsp;&nbsp;&nbsp;&nbsp;option: '`+data.option+`'<br>
					}
					</div>
				</div>
			</div>
		`;
	}	
}

