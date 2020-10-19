function loadRomFile()
{
	var inputFiles = $("#loadFileInput").prop("files");

	if(inputFiles.length >= 1) {
		file.onload = onLoadRomFile;
		file.load(inputFiles[0]);

		$("#loadFileModal").modal("hide");
	}
}

function onLoadRomFile()
{
	romFile.read();

	if(rom.type == "snes") {
		snesRom.load();

		if(!snesGame.load()) {
			alert("Game not supported!");
			return;
		}

		gamePage.update();
	}
}