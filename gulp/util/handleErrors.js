var gutil = require("gulp-util");

module.exports = function() {
	gutil.log("Error:", err);

	// Audible notification
	gutil.beep();

	// Keep gulp from hanging on this task
	this.emit('end');
};