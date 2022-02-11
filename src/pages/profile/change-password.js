import compiledFile from 'bundle-text:./change-password/component.pug';

(function () {
    document.querySelector('#root').innerHTML = compiledFile;
})();
