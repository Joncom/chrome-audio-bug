['audio1.ogg', 'audio2.ogg', 'audio3.ogg'].forEach((path) => {
	var audio = new Audio(path);
	audio.addEventListener('canplaythrough', () => { 
		console.log('Loaded OK');
	}, false);
});