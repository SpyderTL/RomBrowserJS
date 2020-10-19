midi = {
	access: null,
	input: null,
	output: null,
	start: function() {
		navigator.requestMIDIAccess().then(function (access) {
			midi.access = access;
			midi.output = midi.access.outputs.entries().next().value[1];
		});
	}
};
