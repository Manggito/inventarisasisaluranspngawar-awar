var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoads_2 = new ol.layer.Tile({
            'title': 'Google Roads',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_3 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://opentopomap.org/about#datenstand">OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_SUNGAI_4 = new ol.format.GeoJSON();
var features_SUNGAI_4 = format_SUNGAI_4.readFeatures(json_SUNGAI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_4.addFeatures(features_SUNGAI_4);
var lyr_SUNGAI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_4, 
                style: style_SUNGAI_4,
                popuplayertitle: 'SUNGAI',
                interactive: false,
                title: '<img src="styles/legend/SUNGAI_4.png" /> SUNGAI'
            });
var format_JALAN_5 = new ol.format.GeoJSON();
var features_JALAN_5 = format_JALAN_5.readFeatures(json_JALAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_5.addFeatures(features_JALAN_5);
var lyr_JALAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_5, 
                style: style_JALAN_5,
                popuplayertitle: 'JALAN',
                interactive: false,
                title: '<img src="styles/legend/JALAN_5.png" /> JALAN'
            });
var format_LUAS_FUNGSIONAL_6 = new ol.format.GeoJSON();
var features_LUAS_FUNGSIONAL_6 = format_LUAS_FUNGSIONAL_6.readFeatures(json_LUAS_FUNGSIONAL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUAS_FUNGSIONAL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUAS_FUNGSIONAL_6.addFeatures(features_LUAS_FUNGSIONAL_6);
var lyr_LUAS_FUNGSIONAL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUAS_FUNGSIONAL_6, 
                style: style_LUAS_FUNGSIONAL_6,
                popuplayertitle: 'LUAS_FUNGSIONAL',
                interactive: true,
                title: '<img src="styles/legend/LUAS_FUNGSIONAL_6.png" /> LUAS_FUNGSIONAL'
            });
var format_KETERANGAN_KERUSAKAN_SALURAN_7 = new ol.format.GeoJSON();
var features_KETERANGAN_KERUSAKAN_SALURAN_7 = format_KETERANGAN_KERUSAKAN_SALURAN_7.readFeatures(json_KETERANGAN_KERUSAKAN_SALURAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANGAN_KERUSAKAN_SALURAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANGAN_KERUSAKAN_SALURAN_7.addFeatures(features_KETERANGAN_KERUSAKAN_SALURAN_7);
var lyr_KETERANGAN_KERUSAKAN_SALURAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KETERANGAN_KERUSAKAN_SALURAN_7, 
                style: style_KETERANGAN_KERUSAKAN_SALURAN_7,
                popuplayertitle: 'KETERANGAN_KERUSAKAN_SALURAN',
                interactive: true,
    title: 'KETERANGAN_KERUSAKAN_SALURAN<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_7_0.png" /> Baik<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_7_1.png" /> Rusak Ringan<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_7_2.png" /> Rusak Sedang<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_7_3.png" /> Rusak Berat<br />' });
var format_JENIS__SALURAN_8 = new ol.format.GeoJSON();
var features_JENIS__SALURAN_8 = format_JENIS__SALURAN_8.readFeatures(json_JENIS__SALURAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENIS__SALURAN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENIS__SALURAN_8.addFeatures(features_JENIS__SALURAN_8);
var lyr_JENIS__SALURAN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENIS__SALURAN_8, 
                style: style_JENIS__SALURAN_8,
                popuplayertitle: 'JENIS__SALURAN',
                interactive: true,
    title: 'JENIS__SALURAN<br />\
    <img src="styles/legend/JENIS__SALURAN_8_0.png" /> Saluran Primer<br />\
    <img src="styles/legend/JENIS__SALURAN_8_1.png" /> Saluran Sekunder<br />' });
var format_AREANOMENKLATUR_9 = new ol.format.GeoJSON();
var features_AREANOMENKLATUR_9 = format_AREANOMENKLATUR_9.readFeatures(json_AREANOMENKLATUR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREANOMENKLATUR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREANOMENKLATUR_9.addFeatures(features_AREANOMENKLATUR_9);
var lyr_AREANOMENKLATUR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREANOMENKLATUR_9, 
                style: style_AREANOMENKLATUR_9,
                popuplayertitle: 'AREA NOMENKLATUR',
                interactive: true,
                title: '<img src="styles/legend/AREANOMENKLATUR_9.png" /> AREA NOMENKLATUR'
            });
var format_BANGUNANNOMENKLATUR_10 = new ol.format.GeoJSON();
var features_BANGUNANNOMENKLATUR_10 = format_BANGUNANNOMENKLATUR_10.readFeatures(json_BANGUNANNOMENKLATUR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNANNOMENKLATUR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNANNOMENKLATUR_10.addFeatures(features_BANGUNANNOMENKLATUR_10);
var lyr_BANGUNANNOMENKLATUR_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNANNOMENKLATUR_10, 
                style: style_BANGUNANNOMENKLATUR_10,
                popuplayertitle: 'BANGUNAN NOMENKLATUR',
                interactive: false,
                title: '<img src="styles/legend/BANGUNANNOMENKLATUR_10.png" /> BANGUNAN NOMENKLATUR'
            });
var format_Tikungan_11 = new ol.format.GeoJSON();
var features_Tikungan_11 = format_Tikungan_11.readFeatures(json_Tikungan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikungan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikungan_11.addFeatures(features_Tikungan_11);
var lyr_Tikungan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikungan_11, 
                style: style_Tikungan_11,
                popuplayertitle: 'Tikungan',
                interactive: true,
                title: '<img src="styles/legend/Tikungan_11.png" /> Tikungan'
            });
var format_Titik_Per50_m_12 = new ol.format.GeoJSON();
var features_Titik_Per50_m_12 = format_Titik_Per50_m_12.readFeatures(json_Titik_Per50_m_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Per50_m_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Per50_m_12.addFeatures(features_Titik_Per50_m_12);
var lyr_Titik_Per50_m_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_Per50_m_12, 
                style: style_Titik_Per50_m_12,
                popuplayertitle: 'Titik_Per-50_m',
                interactive: true,
                title: '<img src="styles/legend/Titik_Per50_m_12.png" /> Titik_Per-50_m'
            });
var format_Bangunan_Air_13 = new ol.format.GeoJSON();
var features_Bangunan_Air_13 = format_Bangunan_Air_13.readFeatures(json_Bangunan_Air_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Air_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Air_13.addFeatures(features_Bangunan_Air_13);
var lyr_Bangunan_Air_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Air_13, 
                style: style_Bangunan_Air_13,
                popuplayertitle: 'Bangunan_Air',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Air_13.png" /> Bangunan_Air'
            });
var format_Bangunan_Bagi_14 = new ol.format.GeoJSON();
var features_Bangunan_Bagi_14 = format_Bangunan_Bagi_14.readFeatures(json_Bangunan_Bagi_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Bagi_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Bagi_14.addFeatures(features_Bangunan_Bagi_14);
var lyr_Bangunan_Bagi_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Bagi_14, 
                style: style_Bangunan_Bagi_14,
                popuplayertitle: 'Bangunan_Bagi',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Bagi_14.png" /> Bangunan_Bagi'
            });
var format_Bangunan_Sadap_15 = new ol.format.GeoJSON();
var features_Bangunan_Sadap_15 = format_Bangunan_Sadap_15.readFeatures(json_Bangunan_Sadap_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Sadap_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Sadap_15.addFeatures(features_Bangunan_Sadap_15);
var lyr_Bangunan_Sadap_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Sadap_15, 
                style: style_Bangunan_Sadap_15,
                popuplayertitle: 'Bangunan_Sadap',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Sadap_15.png" /> Bangunan_Sadap'
            });
var format_Rumah_Pompa_16 = new ol.format.GeoJSON();
var features_Rumah_Pompa_16 = format_Rumah_Pompa_16.readFeatures(json_Rumah_Pompa_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Pompa_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Pompa_16.addFeatures(features_Rumah_Pompa_16);
var lyr_Rumah_Pompa_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Pompa_16, 
                style: style_Rumah_Pompa_16,
                popuplayertitle: 'Rumah_Pompa',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Pompa_16.png" /> Rumah_Pompa'
            });
var group_TITIKAKSESSORIS = new ol.layer.Group({
                                layers: [lyr_Bangunan_Air_13,lyr_Bangunan_Bagi_14,lyr_Bangunan_Sadap_15,lyr_Rumah_Pompa_16,],
                                fold: 'open',
                                title: 'TITIK AKSESSORIS'});
var group_TITIKKETERANGAN = new ol.layer.Group({
                                layers: [lyr_Tikungan_11,lyr_Titik_Per50_m_12,],
                                fold: 'open',
                                title: 'TITIK KETERANGAN'});
var group_SKEMANOMENKLATUR = new ol.layer.Group({
                                layers: [lyr_AREANOMENKLATUR_9,lyr_BANGUNANNOMENKLATUR_10,],
                                fold: 'open',
                                title: 'SKEMA NOMENKLATUR'});

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoads_2.setVisible(false);lyr_OpenTopoMap_3.setVisible(false);lyr_SUNGAI_4.setVisible(true);lyr_JALAN_5.setVisible(true);lyr_LUAS_FUNGSIONAL_6.setVisible(true);lyr_KETERANGAN_KERUSAKAN_SALURAN_7.setVisible(true);lyr_JENIS__SALURAN_8.setVisible(true);lyr_AREANOMENKLATUR_9.setVisible(true);lyr_BANGUNANNOMENKLATUR_10.setVisible(true);lyr_Tikungan_11.setVisible(true);lyr_Titik_Per50_m_12.setVisible(true);lyr_Bangunan_Air_13.setVisible(true);lyr_Bangunan_Bagi_14.setVisible(true);lyr_Bangunan_Sadap_15.setVisible(true);lyr_Rumah_Pompa_16.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_GoogleRoads_2,lyr_OpenTopoMap_3,lyr_SUNGAI_4,lyr_JALAN_5,lyr_LUAS_FUNGSIONAL_6,lyr_KETERANGAN_KERUSAKAN_SALURAN_7,lyr_JENIS__SALURAN_8,group_SKEMANOMENKLATUR,group_TITIKKETERANGAN,group_TITIKAKSESSORIS];
lyr_SUNGAI_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_LUAS_FUNGSIONAL_6.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_7.set('fieldAliases', {'Id': 'Id', 'KATEGORI': 'KATEGORI', 'JENIS': 'JENIS', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_JENIS__SALURAN_8.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'PANJANG': 'PANJANG', });
lyr_AREANOMENKLATUR_9.set('fieldAliases', {'Id': 'Id', 'PEMBAGIAN': 'PEMBAGIAN', 'LUAS': 'LUAS', 'SATUAN': 'SATUAN', 'AREA': 'AREA', });
lyr_BANGUNANNOMENKLATUR_10.set('fieldAliases', {'NAME': 'NAME', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'PEMBAGIAN': 'PEMBAGIAN', 'URUTAN': 'URUTAN', });
lyr_Tikungan_11.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Titik_Per50_m_12.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Bangunan_Air_13.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Bangunan_Bagi_14.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Bangunan_Sadap_15.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_Rumah_Pompa_16.set('fieldAliases', {'NAME': 'NAME', 'pdfmaps_ph': 'pdfmaps_ph', 'Descriptio': 'Descriptio', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'FOTO4': 'FOTO4', 'FOTO5': 'FOTO5', 'FOTO6': 'FOTO6', 'FOTO7': 'FOTO7', 'FOTO8': 'FOTO8', });
lyr_SUNGAI_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_LUAS_FUNGSIONAL_6.set('fieldImages', {'Id': 'Range', 'LUAS': 'TextEdit', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_7.set('fieldImages', {'Id': 'Range', 'KATEGORI': 'TextEdit', 'JENIS': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_JENIS__SALURAN_8.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_AREANOMENKLATUR_9.set('fieldImages', {'Id': 'Range', 'PEMBAGIAN': 'TextEdit', 'LUAS': 'TextEdit', 'SATUAN': '', 'AREA': '', });
lyr_BANGUNANNOMENKLATUR_10.set('fieldImages', {'NAME': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'TextEdit', 'FOTO2': 'TextEdit', 'FOTO3': 'TextEdit', 'FOTO4': 'TextEdit', 'PEMBAGIAN': 'TextEdit', 'URUTAN': 'TextEdit', });
lyr_Tikungan_11.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Titik_Per50_m_12.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Bangunan_Air_13.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Bangunan_Bagi_14.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Bangunan_Sadap_15.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_Rumah_Pompa_16.set('fieldImages', {'NAME': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Descriptio': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'FOTO4': 'ExternalResource', 'FOTO5': 'ExternalResource', 'FOTO6': 'ExternalResource', 'FOTO7': 'ExternalResource', 'FOTO8': 'ExternalResource', });
lyr_SUNGAI_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_LUAS_FUNGSIONAL_6.set('fieldLabels', {'Id': 'no label', 'LUAS': 'inline label - always visible', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_7.set('fieldLabels', {'Id': 'hidden field', 'KATEGORI': 'inline label - visible with data', 'JENIS': 'hidden field', 'KETERANGAN': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_JENIS__SALURAN_8.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_AREANOMENKLATUR_9.set('fieldLabels', {'Id': 'hidden field', 'PEMBAGIAN': 'inline label - visible with data', 'LUAS': 'inline label - visible with data', 'SATUAN': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_BANGUNANNOMENKLATUR_10.set('fieldLabels', {'NAME': 'no label', 'X': 'no label', 'Y': 'no label', 'BUJUR': 'no label', 'LINTANG': 'no label', 'PANJANG': 'no label', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'PEMBAGIAN': 'no label', 'URUTAN': 'no label', });
lyr_Tikungan_11.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Titik_Per50_m_12.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Bangunan_Air_13.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Bangunan_Bagi_14.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Bangunan_Sadap_15.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Rumah_Pompa_16.set('fieldLabels', {'NAME': 'inline label - visible with data', 'pdfmaps_ph': 'hidden field', 'Descriptio': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO1': 'no label', 'FOTO2': 'no label', 'FOTO3': 'no label', 'FOTO4': 'no label', 'FOTO5': 'no label', 'FOTO6': 'no label', 'FOTO7': 'no label', 'FOTO8': 'no label', });
lyr_Rumah_Pompa_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});