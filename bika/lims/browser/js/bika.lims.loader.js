/**
 * JS responsible of loading the controller classes of views and forms.
 * Must be embedded to the HTML after the rest of javascripts.
 */

/**
 * Initializes Bika LIMS javascripts
 */
function initBikaLIMS() {

    // Instantiate js controllers
    initBikaLIMSControllers();
}

/**
 * Instantiates all the controllers needed for the current view
 */
function initBikaLIMSControllers() {

    // Correlations between views and js classes to be loaded
    var views = {

        ".template-base_edit.portaltype-method":
            ['MethodEditView'],

        ".template-base_edit.portaltype-analysisservice":
            ['AnalysisServiceEditView'],

        ".template-base_edit.portaltype-instrumentcertification":
            ['InstrumentCertificationEditView'],

        ".template-base_edit.portaltype-bikasetup":
            ['BikaSetupEditView'],

        "#ar_publish_container":
            ['AnalysisRequestPublishView'],

        ".template-base_edit.portaltype-artemplate":
            ['ARTemplateEditView'],

        ".template-base_edit.portaltype-client":
            ['ClientEditView'],

        ".template-referenceanalyses.portaltype-instrument":
            ['InstrumentReferenceAnalysesView'],

        ".template-analyses.portaltype-referencesample":
            ['ReferenceSampleAnalysesView'],

        // Add here your view-controller/s assignment

    };

    // Instantiate the js objects needed for the current view
    var loaded = new Array();
    for (var key in views) {
        if ($(key).length) {
            views[key].forEach(function(js) {
                if ($.inArray(js, loaded) < 0) {
                    obj = new window[js]();
                    obj.load();
                    loaded.push(js);
                }
            });
        }
    }
}


(function( $ ) {
$(document).ready(function(){
    initBikaLIMS();
});
}(jQuery));
