const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("html",done=>{
     gulp.src("html/*.html")
          .pipe(gulp.dest("dist/html"))
          .pipe(connect.reload())
     
    done();
})

gulp.task("css",done=>{
    gulp.src("css/*.css")
         .pipe(gulp.dest("dist/css"))
         .pipe(connect.reload())
    
   done();
})

gulp.task("img",done=>{
    gulp.src("img/**")
         .pipe(gulp.dest("dist/img"))
         .pipe(connect.reload())
    
   done();
})

gulp.task("fonts",done=>{
    gulp.src("fonts/**")
         .pipe(gulp.dest("dist/fonts"))
         .pipe(connect.reload())
    
   done();
})

gulp.task("js",done=>{
    gulp.src("js/*.js")
         .pipe(gulp.dest("dist/js"))
         .pipe(connect.reload())
    
   done();
})

gulp.task("less",done=>{
    gulp.src("less/**")
         .pipe(gulp.dest("dist/less"))
         .pipe(connect.reload())
    
   done();
})

gulp.task("json",done=>{
    gulp.src("json/*.json")
         .pipe(gulp.dest("dist/json"))
         .pipe(connect.reload())
    
   done();
})

gulp.task("sass",done=>{
    gulp.src("sass/*.scss")
         .pipe(sourcemaps.init())
         .pipe(sass({
             outputStyle:"compact"
         }))
         .pipe(sourcemaps.write())
         .pipe(gulp.dest("dist/scss"))
         .pipe(connect.reload())
    done();
})


gulp.task("server",done=>{
     connect.server({
         root:"dist",
         livereload:true
     }) 

    done();
})

gulp.task("build",gulp.series("html","sass","css","fonts","img","js","less","json"))

gulp.task("watch",done=>{
     gulp.watch("html/*.html",gulp.series("html"));
     gulp.watch("sass/*.scss",gulp.series("sass"));
     gulp.watch("css/.css",gulp.series("css"));
     gulp.watch("fonts/**",gulp.series("fonts"));
     gulp.watch("img/**",gulp.series("img"));
     gulp.watch("js/*.js",gulp.series("js"));
     gulp.watch("less/**",gulp.series("less"));
     gulp.watch("json/*.json",gulp.series("json"));
    done();
})

gulp.task("default",gulp.series("build","server","watch"))