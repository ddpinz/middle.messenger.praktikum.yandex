import compiledFile from 'bundle-text:./edit/component.pug';

(function () {
    document.querySelector('#root').innerHTML = compiledFile;
})();
