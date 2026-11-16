var wms_layers = [];

var format_Com_Abomey_0 = new ol.format.GeoJSON();
var features_Com_Abomey_0 = format_Com_Abomey_0.readFeatures(json_Com_Abomey_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Com_Abomey_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Com_Abomey_0.addFeatures(features_Com_Abomey_0);
var lyr_Com_Abomey_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Com_Abomey_0, 
                style: style_Com_Abomey_0,
                popuplayertitle: 'Com_Abomey',
                interactive: true,
                title: '<img src="styles/legend/Com_Abomey_0.png" /> Com_Abomey'
            });
var format_Route_1 = new ol.format.GeoJSON();
var features_Route_1 = format_Route_1.readFeatures(json_Route_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_1.addFeatures(features_Route_1);
var lyr_Route_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_1, 
                style: style_Route_1,
                popuplayertitle: 'Route',
                interactive: true,
    title: 'Route<br />\
    <img src="styles/legend/Route_1_0.png" /> Route bitumée<br />' });

lyr_Com_Abomey_0.setVisible(true);lyr_Route_1.setVisible(true);
var layersList = [lyr_Com_Abomey_0,lyr_Route_1];
lyr_Com_Abomey_0.set('fieldAliases', {'qc_id': 'qc_id', 'comm_l': 'comm_l', 'zs': 'zs', 'dept': 'dept', 'pda': 'pda', 'superficie': 'superficie', });
lyr_Route_1.set('fieldAliases', {'qc_id': 'qc_id', 'gm_layer': 'gm_layer', 'gm_type': 'gm_type', 'note': 'note', });
lyr_Com_Abomey_0.set('fieldImages', {'qc_id': '', 'comm_l': '', 'zs': '', 'dept': '', 'pda': '', 'superficie': '', });
lyr_Route_1.set('fieldImages', {'qc_id': '', 'gm_layer': '', 'gm_type': '', 'note': 'TextEdit', });
lyr_Com_Abomey_0.set('fieldLabels', {'qc_id': 'no label', 'comm_l': 'no label', 'zs': 'no label', 'dept': 'no label', 'pda': 'no label', 'superficie': 'no label', });
lyr_Route_1.set('fieldLabels', {'qc_id': 'no label', 'gm_layer': 'no label', 'gm_type': 'no label', 'note': 'inline label - always visible', });
lyr_Route_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});