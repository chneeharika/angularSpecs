///---------------------------------------------------------------------------
/// Start unit tests
///---------------------------------------------------------------------------

module.exports = function karma(grunt) {
	var karma = {
		unit: {
			configFile: grunt.const.files.karma,
			reporters: ['progress', 'dots', 'coverage'],
			browsers: ['Chrome'],
			autoWatch: true,
			singleRun: false
		},
		watch: {
			configFile: grunt.const.files.karma,
			reporters: ['progress', 'dots'],
			browsers: ['Chrome'],
			autoWatch: true,
			singleRun: false
		}
	};

	grunt.config.set('karma', karma);
};
