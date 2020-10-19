file = {
	name: null,
	contents: new Uint8Array(0),
	load: function (inputFile) {
		file.name = inputFile.name;

		var reader = new FileReader();

		reader.addEventListener("load", function (event) {
			file.contents = new Uint8Array(event.target.result);

			if(file.onload)
				file.onload();
		});

		reader.readAsArrayBuffer(inputFile);
	},
	onload: null
};
