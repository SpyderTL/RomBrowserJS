gamePage = {
	update: function () {
		var $imageList = $("#imageList");
		
		$imageList.empty();

		for(var x = 0; x < gameRom.images.length; x++)
			$imageList.append("<span onclick='gamePage.onImageClicked(" + x + ");'>" + gameRom.images[x].name + "</span>");
	},
	onImageClicked: function (index) {
		var canvas = $("#imagePreview")[0];
		
		canvas.width = 256;
		canvas.height = 256;
		
		var context = canvas.getContext("2d");

		var image = context.getImageData(0, 0, canvas.width, canvas.height);

		var data = image.data;

		for(var y = 0; y < canvas.width; y++) {
			for(var x = 0; x < canvas.width; x++) {
				data[(((y * canvas.width) + x) * 4) + 0] = 0xff;
				data[(((y * canvas.width) + x) * 4) + 1] = 0x00;
				data[(((y * canvas.width) + x) * 4) + 2] = 0x00;
				data[(((y * canvas.width) + x) * 4) + 3] = 0xff;
			}
		}

		context.putImageData(image, 0, 0);

		$("#imageViewer").removeClass("d-none");
	}
};
