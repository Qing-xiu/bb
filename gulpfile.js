var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');


gulp.task('sass', function(){
	return gulp.src('src/sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/css'))
})

gulp.task('sass:watch', function(){
	gulp.watch('src/sass/**/*.scss', ['sass'])
})


gulp.task('mini', function(){
	return gulp.src('src/css/**/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('build/css'))
})

gulp.task('default', ['sass', 'mini'])

