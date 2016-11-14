'use strict';

var gulp           = require('gulp'),
    scss           = require('gulp-sass'),
    concat         = require('gulp-concat'),
    clean          = require('gulp-clean'),
    uglify         = require('gulp-uglify'),
    cleanCSS       = require('gulp-clean-css'),
    sourcemaps     = require('gulp-sourcemaps'),
    autoprefixer   = require('gulp-autoprefixer'),
    tingpng        = require('gulp-tinypng'),
    plumber        = require('gulp-plumber'),
    gutil          = require('gulp-util'),
    shell          = require('gulp-shell'),
    gulpSequence   = require('gulp-sequence'),
    inject         = require('gulp-inject'),
    flatten        = require('gulp-flatten'),
    browserSync    = require('browser-sync').create();


var path = {

    rootSrc    : 'app',
    htmlSrc    : 'app/html',
    cssSrc : 'app/css',
    jsSrc  : 'app/js',
    imgSrc : 'app/img',
    fontSrc : 'app/fonts',

    rootDist : 'dist',
    htmlDist : 'dist/html',
    cssDist : 'dist/css',
    jsDist  : 'dist/js',
    imgDist : 'dist/img',
    fontDist : 'dist/fonts',

}; 

var autoPrefixBrowserList = ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'];

// gulp.task('deploy', function() {
//     return gulp.src()
//     .pipe(concat('vendor.js'))
//     .pipe(uglify())
//     .pipe(rename('vendor.min.js'))
//     .pipe(gulp.dest(path.jsSrc));
// });

var libjs =  [
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/requirejs-plugins/lib/text.js',
    './bower_components/requirejs-plugins/src/json.js',
    './bower_components/gsap/src/minified/TweenMax.min.js',
    './bower_components/requirejs/require.js',
    './bower_components/simpleWeather/jquery.simpleWeather.min.js',
    './bower_components/moment/min/moment-with-locales.min.js',
    './bower_components/video.js/dist/video.min.js'
]

gulp.task('moveBower', function(){
    gulp.src(libjs)
        .pipe(flatten())
        .pipe(gulp.dest(path.jsSrc + '/lib/'));
    gulp.src('./bower_components/font-awesome/css/font-awesome.css')
        .pipe(flatten())
        .pipe(gulp.dest(path.cssSrc));
    gulp.src('./bower_components/font-awesome/fonts/**/*')
        .pipe(flatten())
        .pipe(gulp.dest(path.fontSrc));
});




//watch any and all HTML files and refresh when something changes
gulp.task('html', function() {
    return gulp.src(path.htmlSrc + '/*.html')
        .pipe(plumber())
        .pipe(browserSync.reload({stream: true}))
        .on('error', gutil.log);
});



gulp.task('styles',function() {
    return gulp.src(path.rootSrc + '/scss/**/*.scss')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(scss().on('error', scss.logError))
        .pipe(autoprefixer({
            browsers: autoPrefixBrowserList,
            cascade:  true
        }))
        .on('error', gutil.log)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.cssSrc))
        .pipe(browserSync.reload({stream: true}));
});

//compiling our SCSS files for deployment
gulp.task('styles-deploy', function() {
    return gulp.src([path.cssSrc + '/font-awesome.css', path.cssSrc + '/style.css'])
        .pipe(plumber())
        .pipe(concat('app.css'))
        .pipe(autoprefixer({
            browsers: autoPrefixBrowserList,
            cascade:  true
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(path.cssDist));
});


gulp.task('script', function() {
    return gulp.src(path.jsSrc + '/**/*.js')
        .pipe(plumber())
        .on('error', gutil.log)
        .pipe(gulp.dest(path.jsSrc))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts-deploy', function() {
    return  gulp.src([
            path.jsSrc + '/vendor.js', 
            path.jsSrc + '/script.js'
        ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.jsDist));
});

// Compress image and deploy to dist
gulp.task('images-deploy', function(tmp) {
    gulp.src(path.imgSrc + '/*')
        .pipe(plumber())
        .pipe(tingpng('Ycs8txCaKuHZgYczfE0v7Ul5FtTyKdfu'))
        .pipe(gulp.dest(path.imgDist));
});

gulp.task('clean', function () {
    return gulp.src(path.rootDist, {read: false})
        .pipe(clean());
});

//create folders using shell
gulp.task('scaffold', function() {
    return shell.task([
        'mkdir dist',
        'mkdir dist/html',
        'mkdir dist/fonts',
        'mkdir dist/img',
        'mkdir dist/js',
        'mkdir dist/css'
    ]);
});

gulp.task('html-deploy', function() {
    // var sources = gulp.src(path.cssDist + '/**/*.css', {read: false}, {relative: true});
    gulp.src(path.htmlSrc + '/*.html')
            .pipe(plumber())
            .pipe(inject(gulp.src(['./dist/**/*.css', './dist/**/*.js'], {read: false}), {relative: true}))
            .pipe(gulp.dest(path.htmlDist));

    gulp.src(path.fontSrc + '/**/*')
        .pipe(plumber())
        .pipe(gulp.dest(path.fontDist));
});

gulp.task('serve', ['moveBower', 'html', 'styles'], function() {
// gulp.task('watch', gulpSequence('moveBower', ['vendor', 'script'], 'html', 'styles' ), function(){
    browserSync.init({
        server: {
            baseDir: path.rootSrc
        },
        startPath: '/html'
    }); 
    gulp.watch(path.htmlSrc + '/*.html', ['html']);
    gulp.watch(path.rootSrc + '/scss/**/*.scss', ['styles']);
    gulp.watch(path.jsSrc + '/**/*.js', ['script']);
});



gulp.task('deploy', gulpSequence('clean', 'scaffold', ['scripts-deploy', 'styles-deploy'], 'html-deploy' ));

