require.config({
    paths: {
        "require.domReady": "js/lib/require/plugin/domReady",
//        "date-fns": "https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.29.0/date_fns.min"
        "date-fns": "js/lib/date-fns/date-fns.min"
    }
});
require(['require.domReady'], function(domReady) {
    domReady(function () {
        require(['js/app/main']);
    });
});
