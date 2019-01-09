document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    profileMenu();
    scrollHeader();
    new WOW().init()


    // Menu accordeon

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }


});

$(document).ready(function () {


    $('select[multiple]').multiselect({
        columns: 2,
        search: true,
        selectAll: false,
        texts: {
            placeholder: 'Setup Filters',
        }
    });


    var options = [{
        label: 'Subject',
        options: [{
            name: 'Math',
            value: 1,
            checked: false
        }, {
            name: 'Art',
            value: 2,
            checked: false
        }, {
            name: 'Tech',
            value: 3,
            checked: false
        }]
    }, {
        label: 'Experience',
        options: [{
            name: 'More the 10 years',
            value: 4,
            checked: false
        }, {
            name: 'More then 5 years',
            value: 5,
            checked: false
        }, {
            name: 'More then 1 year',
            value: 6,
            checked: false
        }, {
            name: 'Rising talent',
            value: 7,
            checked: false
        }]
    }];

    $('select[multiple]').multiselect('loadOptions', options);

});

function profileMenu() {
    var dropdown = document.querySelector('.js-profile-dropdown');
    var menu = document.querySelector('.js-profile-menu');

    dropdown.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.toggle('m-show');
    });
}


function scrollHeader() {
    var header = document.querySelector('.jp-header');

    document.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

}