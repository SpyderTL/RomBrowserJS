snesGame = {
	games: [],
	load: function () {
		for(var x = 0; x < snesGame.games.length; x++)
			if(snesGame.games[x].load())
				return true;
		
		return false;
	}
};
