romFile = {
	read: function () {
		if (file.name.endsWith(".smc"))
			romFile.readSmc();
		else
			romFile.readSmf();
	},
	readSmc: function () {
		rom.type = "snes";
		rom.data = file.contents.slice(0x200);
	},
	readSmf: function () {
		rom.type = "snes";
		rom.data = file.contents;
	},
};
