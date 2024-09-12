import _config from '../gulp.config.js';
const { config } = _config;

import { src, dest } from 'gulp';

import svgmin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';
import diffableHtml from 'gulp-diffable-html';
import gulpif from 'gulp-if';

import svgSprite from 'gulp-svg-sprite';
import plumber from 'gulp-plumber';

export const sprite = (done) => {src(config.sprite.src)
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {
          xmlMode: true
        },
      })
    )
    .pipe(replace('&gt;', '>'))
    .pipe(plumber())
    .pipe(svgSprite({
      mode: {
        stack: {
          symbol: true,
          sprite: config.sprite.name,
          dest: ''
        },
      },
    }))
    .pipe(dest(config.sprite.dest))
    .pipe(gulpif(config.isDev, diffableHtml()))

    done();
}
