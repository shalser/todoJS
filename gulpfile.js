//Подключаем модули галпа
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')


//Порядок подключения css файлов
const cssFiles = [
    './scss/style.scss',
]

//Таск на стили CSS
function styles() {
    //Шаблон для поиска файлов CSS
    //Всей файлы по шаблону './src/css/**/*.css'
    return gulp.src(cssFiles)
        .pipe(sourcemaps.init())
        .pipe(sass())
        //Объединение файлов в один
        .pipe(concat('style.css'))
        //Добавить префиксы
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        //Минификация CSS
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemaps.write('./'))
        //Выходная папка для стилей
        .pipe(gulp.dest('./build/css'))
}


//Просматривать файлы
function watch() {
    //Следить за CSS файлами
    gulp.watch('./scss/**/*.scss', styles)
}

//Таск вызывающий функцию styles
gulp.task('styles', styles);

//Таск для отслеживания изменений
gulp.task('watch', watch);
