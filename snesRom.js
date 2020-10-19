snesRom = {
	load: function () {
		var banks = rom.data.length >> 15;

		for(var bank = 0; bank < banks; bank++) {
			snes.memory.set(rom.data.slice(bank << 15, 0x8000), (bank << 16) | 0x8000);
		}
	}
};
