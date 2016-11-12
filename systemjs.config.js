/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */

var uirVer = '1.0.0-beta.3';
var rxjsVer = '5.0.0-beta.12';
var ng2Ver = '2.1.2';
var ng2Pkgs = ['core', 'compiler', 'common', 'http', 'platform-browser-dynamic', 'platform-browser'];

  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    //use typescript for compilation
    transpiler: 'typescript',
    //typescript compiler options
    typescriptOptions: {
      emitDecoratorMetadata: true
    },
    // map tells the System loader where to look for things
    map: Object.assign(ng2MapObject(ng2Pkgs, ng2Ver), {
      // our app is within the app folder
      app: 'dist',
      // angular bundles
      // '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      // '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      // '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      // '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      // '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      // '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      // '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'appModule': "./dist/app.module.js",
      'ui-router-ng2': 'https://unpkg.com/ui-router-ng2@' + uirVer + '/_bundles/ui-router-ng2'
    }),
    // packages tells the System loader how to load when no filename and/or no extension
    packages: Object.assign(ng2PackagesObject(ng2Pkgs), {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }),
    meta: { "ui-router-ng2": { format: "cjs" } }
  });

function ng2MapObject(ng2Packages, ng2Ver) {
  return ng2Packages.reduce(function (acc, pkg) {
    acc['@angular/' + pkg] = 'https://unpkg.com/@angular/' + pkg + '@' + ng2Ver;
    return acc;
  }, {});
}

function ng2PackagesObject(ng2Packages) {
  return ng2Packages.reduce(function(acc, pkg) {
    acc['@angular/' + pkg] = { main: 'bundles/' + pkg + '.umd.js', defaultExtension: 'js' }
    return acc;
  }, {});
}
