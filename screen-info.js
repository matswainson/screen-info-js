;(function(window, undefined){

	var screenInfo = window ? window.screen ? window.screen : null : null;

	if (!screenInfo) {
		return null;
	}

	var screen = {
		height: screenInfo.height,
		width: screenInfo.width
	};

	screen.orientation = (screen.height < screen.width) ? 'landscape' : 'portrait';

	if (window.devicePixelRatio) {
		screen.pixelDensity = window.devicePixelRatio;
		screen.retinaDisplay = (screen.pixelDensity > 1) ? true : false;
	}
	
	console.log('screenInfo:', screen);
	window.screenInfo = screen;

})(window);
