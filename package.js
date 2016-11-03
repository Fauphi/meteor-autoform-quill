Package.describe({
  name: 'fauphi:autoform-quill',
  git: 'https://github.com/Fauphi/autoform-quill',
  summary: 'Autoform Quill editor.',
  version: '0.1.0'
});

Package.onUse(function (api) {
  
  api.versionsFrom('1.3.2.4');

  api.use([
    'ecmascript',
    'es5-shim',
    'templating',
    'reactive-var',
    'blaze-html-templates'
  ], ['client', 'server']);

  api.addFiles([
    'quillEditorTmpl.js',
    'quillEditorTmpl.html'
  ], 'client');
  
  api.addFiles([
    'quill/quill.snow.css'
  ], 'client');

});

Npm.depends({
  quill: '1.1.3'
});