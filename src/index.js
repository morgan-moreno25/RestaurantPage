const Home = require('./Home');
const Menu = require('./Menu');
const Contact = require('./Contact');

const Index = (() => {
    const content = document.getElementById('content');
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');

    function addEventListeners(){
        homeBtn.addEventListener('click', function(){
            clearActiveClass();
            homeBtn.classList.add('active');

            clearContent();
            Home.render();
        });

        menuBtn.addEventListener('click', function(){
            clearActiveClass();
            menuBtn.classList.add('active');

            clearContent();
            Menu.render();
        });

        contactBtn.addEventListener('click', function(){
            clearActiveClass();
            contactBtn.classList.add('active');

            clearContent();
            Contact.render();
        })
    };
    function clearActiveClass(){
        homeBtn.classList.remove('active');
        menuBtn.classList.remove('active');
        contactBtn.classList.remove('active');
    };
    function clearContent(){
        while(content.children.length > 0){
            content.removeChild(content.firstChild);
        };
    };

    return {
        init: () => {
            addEventListeners();
            Home.render();
        },
    };
})();

Index.init();