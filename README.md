# GUIDE DE DEVELOPPEMENT

Ce projet utilise angular2-seed avec prime-ng

* [angular2-seed GitHub](https://github.com/mgechev/angular2-seed)
* Guide pour implémenter prime-ng [ajouter prime-ng](https://github.com/mgechev/angular2-seed/wiki/Add-PrimeNG)
* Site de PrimeNG : [http://www.primefaces.org/primeng/](http://www.primefaces.org/primeng/)

**Note** Requis : au minimum node v4.x.x et npm 2.14.7.

Site de NodeJS : [https://nodejs.org/en/](https://nodejs.org/en/)

Installer la dernière version (Current Latest features)

# Commencer à développer le projet

{branche} = nom de la branche où vous voulez développer

```bash
git clone -b {branche} https://github.com/PARISDESCARTES/PRAG.git
# Dans le dossier du projet cloné (où il y a le fichier package.json)
npm install
# Pour lancer le projet en dev avec live reload (chaque changement dans le code est compilé directment)
npm start
# Pour lancer le projet en prod avec live reload (chaque changement dans le code est compilé directment)npm run serve.prod
# Pour compiler le projet dans un  environnement de dev
npm run build.dev
# Pour compiler le projet dans un environnement de prod
npm run build.prod
```

# Configuration

Configuration par défaut du serveur

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure au lancement

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# Documentation des outils

Une doc des outils est disponible sur : [tools/README.md](tools/README.md).

# Wiki de angular2-seed

Visiter le [Wiki](https://github.com/mgechev/angular2-seed/wiki) de angular2-seed.

# Lancer des tests

```bash
npm test

# Debug - Dans deux fenêtres différentes
npm run build.test.watch      # 1ère fenêtre
npm run karma.start           # 2ème fenêtre

# Code généré à la fin de npm test
# Bilan avec :
npm run serve.coverage

# e2e (aka. end-to-end, integration) -Dans 3 fenêtre windows différentes

# npm run webdriver-update <- A lancer lors de la première exécution des tests
npm run webdriver-start
npm run serve.e2e
npm run e2e

# e2e live mode - Protractor mode intéractif
npm run e2e.live
```
Plus d'informations sur le mode intéractif Protactor  [ici](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

# Structure de l'application (angular2-seed)

```
.
├── LICENSE
├── README.md
├── gulpfile.ts                <- configuration oes taches gulp
├── karma.conf.js              <- configuration du test runner
├── package.json               <- dependences du projet
├── protractor.conf.js         <- configuration des tests e2e
├── src                        <- code source de l'application
│   └── client
│       ├── app
│       │   ├── +about
│       │   │   ├── about.component.css
│       │   │   ├── about.component.e2e-spec.ts
│       │   │   ├── about.component.html
│       │   │   ├── about.component.spec.ts
│       │   │   ├── about.component.ts
│       │   │   └── index.ts
│       │   ├── +home
│       │   │   ├── home.component.css
│       │   │   ├── home.component.e2e-spec.ts
│       │   │   ├── home.component.html
│       │   │   ├── home.component.spec.ts
│       │   │   ├── home.component.ts
│       │   │   └── index.ts
│       │   ├── app.component.e2e-spec.ts
│       │   ├── app.component.html
│       │   ├── app.component.spec.ts
│       │   ├── app.component.ts
│       │   ├── hot_loader_main.ts
│       │   ├── main.ts
│       │   └── shared
│       │       ├── index.ts
│       │       ├── name-list
│       │       │   ├── index.ts
│       │       │   ├── name-list.service.spec.ts
│       │       │   └── name-list.service.ts
│       │       ├── navbar
│       │       │   ├── index.ts
│       │       │   ├── navbar.component.css
│       │       │   ├── navbar.component.html
│       │       │   └── navbar.component.ts
│       │       └── toolbar
│       │           ├── index.ts
│       │           ├── toolbar.component.css
│       │           ├── toolbar.component.html
│       │           └── toolbar.component.ts
│       ├── assets
│       │   └── svg
│       │       └── more.svg
│       ├── css
│       │   └── main.css
│       ├── index.html
│       ├── tsconfig.json
│       └── typings.d.ts
├── test-main.js               <- configuration des tests
├── tools
│   ├── README.md              <- docs technique
│   ├── config
│   │   ├── project.config.ts  <- configuration du projet
│   │   ├── seed.config.interfaces.ts
│   │   └── seed.config.ts     <- configuration de la seed
│   ├── config.ts              <- configuration (build de toutes les configs en un fichier)
│   ├── debug.ts
│   ├── manual_typings
│   │   ├── project            
│   │   │   └── sample.package.d.ts
│   │   └── seed               
│   │       ├── angular2-hot-loader.d.ts
│   │       ├── autoprefixer.d.ts
│   │       ├── colorguard.d.ts
│   │       ├── connect-livereload.d.ts
│   │       ├── cssnano.d.ts
│   │       ├── doiuse.d.ts
│   │       ├── express-history-api-fallback.d.ts
│   │       ├── istream.d.ts
│   │       ├── karma.d.ts
│   │       ├── merge-stream.d.ts
│   │       ├── open.d.ts
│   │       ├── postcss-reporter.d.ts
│   │       ├── slash.d.ts
│   │       ├── stylelint.d.ts
│   │       ├── systemjs-builder.d.ts
│   │       ├── tildify.d.ts
│   │       ├── tiny-lr.d.ts
│   │       └── walk.d.ts
│   ├── tasks                  <- tâches gulp
│   │   ├── project            <- tâches gulp propre au projet
│   │   │   └── sample.task.ts
│   │   └── seed               <- tâches gulp générique à la seed
│   │       ├── build.assets.dev.ts
│   │       ├── build.assets.prod.ts
│   │       ├── build.bundles.app.ts
│   │       ├── build.bundles.ts
│   │       ├── build.docs.ts
│   │       ├── build.html_css.ts
│   │       ├── build.index.dev.ts
│   │       ├── build.index.prod.ts
│   │       ├── build.js.dev.ts
│   │       ├── build.js.e2e.ts
│   │       ├── build.js.prod.ts
│   │       ├── build.js.test.ts
│   │       ├── build.js.tools.ts
│   │       ├── check.versions.ts
│   │       ├── clean.all.ts
│   │       ├── clean.dev.ts
│   │       ├── clean.prod.ts
│   │       ├── clean.tools.ts
│   │       ├── copy.js.prod.ts
│   │       ├── css-lint.ts
│   │       ├── e2e.ts
│   │       ├── generate.manifest.ts
│   │       ├── karma.start.ts
│   │       ├── serve.coverage.ts
│   │       ├── serve.docs.ts
│   │       ├── server.prod.ts
│   │       ├── server.start.ts
│   │       ├── tslint.ts
│   │       ├── watch.dev.ts
│   │       ├── watch.e2e.ts
│   │       ├── watch.test.ts
│   │       └── webdriver.ts
│   ├── utils                  
│   │   ├── project            
│   │   │   └── sample_util.ts
│   │   ├── project.utils.ts
│   │   ├── seed              
│   │   │   ├── clean.ts
│   │   │   ├── code_change_tools.ts
│   │   │   ├── server.ts
│   │   │   ├── tasks_tools.ts
│   │   │   ├── template_locals.ts
│   │   │   ├── tsproject.ts
│   │   │   └── watch.ts
│   │   └── seed.utils.ts
│   └── utils.ts
├── tsconfig.json              <- configuration du projet typescript (ts-node, qui lance les tâches définies dans gulpfile.ts)
├── tslint.json                <- tslint configuration
├── typings                    
├── typings.json
└── appveyor.yml
```
