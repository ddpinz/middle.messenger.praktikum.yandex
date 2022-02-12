import compiledFile from 'bundle-text:./profile/component.pug';

(function () {
    document.querySelector('#root').innerHTML = compiledFile;
})();
