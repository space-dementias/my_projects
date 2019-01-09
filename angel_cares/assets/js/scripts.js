jQuery(document).ready(function () {
    $('#news a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    /* gallery */
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    /* socials */
    $("#share").jsSocials({
        shareIn: "popup",
        showCount: true,
        shares: ["facebook","vkontakte", "twitter", "googleplus"]
    });

    /* toggle */
    $('.help-pg .toggle').click(function () {
        $(this).addClass('selected');
        $('.help-pg div.hidden').slideToggle();
    });
});