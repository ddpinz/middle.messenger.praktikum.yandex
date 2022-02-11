import compiledFile from 'bundle-text:./component.pug';

(function () {
    document.querySelector('#root').innerHTML = compiledFile;
})();
