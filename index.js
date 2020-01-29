module.exports = function (){

	var screenInfo = typeof window === 'object' && window && window.screen,
			screen = {
				height: undefined,
				width: undefined
			};

	if (!screenInfo) {
		return screen;
	}

	screen.height = screenInfo.height;
	screen.width = screenInfo.width;

	screen.orientation = (screen.height < screen.width) ? 'landscape' : 'portrait';

	if (window.devicePixelRatio) {
		screen.pixelDensity = window.devicePixelRatio;
		screen.retinaDisplay = (screen.pixelDensity > 1) ? true : false;
	}

	if (window.navigator && window.navigator.maxTouchPoints) {
		screen.maxTouchPoints = window.navigator.maxTouchPoints;
	}
	
	return screen;

}();
