metalCombatGame = {
	load: function () {
		var name = String.fromCharCode.apply(null, snes.memory.slice(0xffc0, 0xffd5));

		if (name != "METAL COMBAT         ")
			return false;

		gameRom.name = "Metal Combat: Falcon's Revenge";
		gameRom.version = "1.0";

		gameRom.images = [ { name: "Test Image", address: 0x1000 } ];

		return true;
	}
};

snesGame.games.push(metalCombatGame);