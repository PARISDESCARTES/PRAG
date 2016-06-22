import * as gulp from 'gulp';
import { join } from 'path';

import {FONTS_SRC, FONTS_DEST, FONT_AWESOME_SRC, BOOTSTRAP_SRC, APP_DEST} from '../../config';

/*export = () => {
  return gulp.src(FONTS_SRC)
    .pipe(gulp.dest(FONTS_DEST));
};*/

export = () => {
    return gulp.src([
      join(BOOTSTRAP_SRC, '**/*.eot'),
      join(BOOTSTRAP_SRC, '**/*.ijmap'),
      join(BOOTSTRAP_SRC, '**/*.ttf'),
      join(BOOTSTRAP_SRC, '**/*.woff'),
      join(BOOTSTRAP_SRC, '**/*.woff2'),
      join(FONT_AWESOME_SRC, '**/*.eot'),
      join(FONT_AWESOME_SRC, '**/*.ijmap'),
      join(FONT_AWESOME_SRC, '**/*.ttf'),
      join(FONT_AWESOME_SRC, '**/*.woff'),
      join(FONT_AWESOME_SRC, '**/*.woff2')
    ])
      .pipe(gulp.dest(APP_DEST));
  };
