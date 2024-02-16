var iUp = (function () {
    var time = 0,
        duration = 150,
        clean = function () {
            time = 0;
        },
        up = function (element) {
            setTimeout(function () {
                element.classList.add("up");
            }, time);
            time += duration;
        },
        down = function (element) {
            element.classList.remove("up");
        },
        toggle = function (element) {
            setTimeout(function () {
                element.classList.toggle("up");
            }, time);
            time += duration;
        };
    return {
        clean: clean,
        up: up,
        down: down,
        toggle: toggle
    };
})();

function decryptEmail(encoded) {
    var address = atob(encoded);
    window.location.href = "mailto:" + address;
}

document.addEventListener('DOMContentLoaded', function () {
    var iUpElements = document.querySelectorAll(".iUp");
    iUpElements.forEach(function (element) {
        iUp.up(element);
    });

    var avatarElement = document.querySelector(".js-avatar");
    avatarElement.addEventListener('load', function () {
        avatarElement.classList.add("show");
    });

    // 设置背景图片
    var panel = document.querySelector('#panel');
    panel.style.background = "url('https://www.loliapi.com/acg/') center center no-repeat #666";
    panel.style.backgroundSize = "cover";
});

var btnMobileMenu = document.querySelector('.btn-mobile-menu__icon');
var navigationWrapper = document.querySelector('.navigation-wrapper');

btnMobileMenu.addEventListener('click', function () {
    if (navigationWrapper.style.display == "block") {
        navigationWrapper.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            navigationWrapper.classList.toggle('visible');
            navigationWrapper.classList.toggle('animated');
            navigationWrapper.classList.toggle('bounceOutUp');
            navigationWrapper.removeEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', arguments.callee);
        });
        navigationWrapper.classList.toggle('animated');
        navigationWrapper.classList.toggle('bounceInDown');
        navigationWrapper.classList.toggle('animated');
        navigationWrapper.classList.toggle('bounceOutUp');
    } else {
        navigationWrapper.classList.toggle('visible');
        navigationWrapper.classList.toggle('animated');
        navigationWrapper.classList.toggle('bounceInDown');
    }
    btnMobileMenu.classList.toggle('social');
    btnMobileMenu.classList.toggle('iconfont');
    btnMobileMenu.classList.toggle('icon-list');
    btnMobileMenu.classList.toggle('social');
    btnMobileMenu.classList.toggle('iconfont');
    btnMobileMenu.classList.toggle('icon-angleup');
    btnMobileMenu.classList.toggle('animated');
    btnMobileMenu.classList.toggle('fadeIn');
});
