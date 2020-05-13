/*
 * @Descripttion: 
 * @version: 
 * @Author: Anke Wang
 * @Date: 2020-05-08 13:27:01
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-05-12 18:45:11
 */

//import './css/index.css'
import 'jquery';
import echarts from 'echarts'
import 'leaflet';
import 'echarts-leaflet';

let color = ['#787D7B','#86A697','#3A8FB7',"#7DB9DE",  "#DAC9A6", "#FAD689", "#F17C67", "#86C166", "#F6C555" ];
let defaultColor = [
    "#F75C2F","#FB966E","#F17C67","#F596AA","#F19483","#FB9966",//"#FC9F4D",
			"#C78550","#E1A679","#C78550","#A36336",
			"#B481BB","#E16B8C","#E03C8A","#6D2E5B",
			"#A5DEE4","#81C7D4","#33A6B8","#0089A7","#3A8FB7",
			//"#6699A1","#1E88A8","#51A8DD","#7DB9DE","#58B2DC","#2B5F75",
			"#3A8FB7","#2E5C6E","#006284","#2EA9DF",
			"#7B90D2","#7B90D2","#005CAF","#113285",
			"#0F2540","#211E55","#0D5661","#77969A",
			"#376B6D","#305A56","#405B55","#566C73","#577C8A",
			"#B68E55","#B1B479","#A5A051","#939650","#6C6A2D","#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3", "#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a", "#4572A7", "#AA4643", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92", "#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1", "#007bff", "#6610f2", "#6f42c1", "#e83e8c", "#dc3545", "#fd7e14", "#ffc107", "#28a745", "#20c997", "#17a2b8", "#868e96", "#343a40", "#007bff", "#d8b365", "#5ab4ac", "#a1d76a", "#e9a3c9"]

let bounds = new L.LatLngBounds(new L.LatLng(-85, -173), new L.LatLng(85, 450));

let mbAttr = 'Map data &copy; <a href="www.tianditu.gov.cn">Map World</a> ';
// load the map
var mymap = L.map('main1', {
    center: [40, 150],
    zoom: 2,
    minZoom: 1,
    maxZoom: 10,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    //  layers: grayscale
});
// load the tiles

let baseLayers = {

    "original": L.layerGroup([
        L.tileLayer('http://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=c044ae411c12b9585d2f114dd86b2f1f', { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'], attribution: mbAttr }),
        //  L.tileLayer('http://t{s}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=c044ae411c12b9585d2f114dd86b2f1f', { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] }),
        L.tileLayer('http://t{s}.tianditu.gov.cn/eva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=eva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=c044ae411c12b9585d2f114dd86b2f1f', { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] }),
    ]).addTo(mymap),
    "Satellite": L.layerGroup([
        L.tileLayer('http://t{s}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=c044ae411c12b9585d2f114dd86b2f1f', { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'], attribution: mbAttr }),
        L.tileLayer('http://t{s}.tianditu.gov.cn/eia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=eia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=c044ae411c12b9585d2f114dd86b2f1f', { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] }),
    ]),
    "Terrain": L.layerGroup([
        L.tileLayer('http://t{s}.tianditu.gov.cn/ter_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=56b81006f361f6406d0e940d2f89a39c', { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'], attribution: mbAttr }),
        L.tileLayer('http://t{s}.tianditu.gov.cn/eta_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=eta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=56b81006f361f6406d0e940d2f89a39c', { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] })
    ]),

};


L.control.layers(baseLayers, {}, { position: "topright" }).addTo(mymap);

/*-----------latlng------------------*/


let countryCoord = [
    { "name": "China", "lat": 35.029996, "lng": 108.105469, },
    { "name": "Japan", "lat": 35.69067, "lng": 137.867188, },
    { "name": "Vietnam", "lat": 14.030015, "lng": 108.588867, },
    { "name": "Malaysia", "lat": 4.210484, "lng": 101.975769, },
    { "name": "Thailand", "lat": 15.870032, "lng": 100.992538, },
    { "name": "Singapore", "lat": 1.352083, "lng": 103.819839, },
    { "name": "SouthKorea", "lat": 37.663998, "lng": 127.978462, },
    { "name": "South Korea", "lat": 37.663998, "lng": 127.978462, },
    { "name": "Nepal", "lat": 28.394857, "lng": 84.124008, },
    { "name": "Russia", "lat": 61.52401, "lng": 105.318756, },
    { "name": "Cambodia", "lat": 12.565679, "lng": 104.990963, },
    { "name": "Pakistan", "lat": 30.375321, "lng": 69.345116, },
    { "name": "UnitedStates", "lat": 37.09024, "lng": 263.671875, },
    { "name": "United States", "lat": 37.09024, "lng": 263.671875, },
    { "name": "Canada", "lat": 58.631217, "lng": 249.257813, },
    { "name": "Brazil", "lat": -14.235004, "lng": 309.92528, },
    { "name": "Mexico", "lat": 23.634501, "lng": 258.552784, },
    { "name": "Iceland", "lat": 64.963051, "lng": -19.020835, },
    { "name": "Switzerland", "lat": 46.818188, "lng": 8.227512, },
    { "name": "Netherlands", "lat": 52.132633, "lng": 5.291266, },
    { "name": "Finland", "lat": 61.92411, "lng": 25.748151, },
    { "name": "Norway", "lat": 60.472024, "lng": 8.468946, },
    { "name": "Ireland", "lat": 53.41291, "lng": -8.24389, },
    { "name": "UnitedKingdom", "lat": 53.225768, "lng": -1.230469, },
    { "name": "United Kingdom", "lat": 53.225768, "lng": -1.230469, },
    { "name": "France", "lat": 46.227638, "lng": 2.213749, },
    { "name": "Germany", "lat": 51.165691, "lng": 10.451526, },
    { "name": "Spain", "lat": 40.463667, "lng": -3.74922, },
    { "name": "Italy", "lat": 41.87194, "lng": 12.56738, },
    { "name": "Portugal", "lat": 39.399872, "lng": -8.224454, },
    { "name": "Belgium", "lat": 50.503887, "lng": 4.469936, },
    { "name": "Georgia", "lat": 42.315407, "lng": 43.356892, },
    { "name": "Luxembourg", "lat": 49.815273, "lng": 6.129583, },
    { "name": "NewZealand", "lat": -40.900557, "lng": 174.885971, },
    { "name": "New Zealand", "lat": -40.900557, "lng": 174.885971, },
    { "name": "Kuwait", "lat": 29.31166, "lng": 47.481766, },
    { "name": "Slovakia", "lat": 48.669026, "lng": 19.699024, },
    { "name": "Chile", "lat": -35.675147, "lng": 289.542969, },
    { "name": "SaudiArabia", "lat": 23.885942, "lng": 45.079162, },
    { "name": "Saudi Arabia", "lat": 23.885942, "lng": 45.079162, },
    { "name": "Hungary", "lat": 47.162494, "lng": 19.503304, },
    { "name": "CzechRepublic", "lat": 49.817492, "lng": 15.472962, },
    { "name": "Czech Republic", "lat": 49.817492, "lng": 15.472962, },
    { "name": "Poland", "lat": 51.919438, "lng": 19.145136, },
    { "name": "Luxemburg", "lat": 49.815273, "lng": 6.129583, },
    { "name": "Turkey", "lat": 38.963745, "lng": 35.243322, },
    { "name": "Lithuania", "lat": 55.169438, "lng": 23.881275, },
    { "name": "Denmark", "lat": 56.26392, "lng": 9.501785, },
    { "name": "Sweden", "lat": 60.128161, "lng": 18.643501, },
    { "name": "Australia", "lat": -25.274398, "lng": 133.775136, },
    { "name": "Senegal", "lat": 14.497401, "lng": -14.452362, },
    { "name": "Congo", "lat": -0.228021, "lng": 15.827659, },
    { "name": "Algeria", "lat": 28.033886, "lng": 1.659626, },
    { "name": "SouthAfrica", "lat": -30.559482, "lng": 22.937506, },
    { "name": "South Africa", "lat": -30.559482, "lng": 22.937506, },
    { "name": "India", "lat": 20.593684, "lng": 78.96288, },
    { "name": "Austria", "lat": 47.516231, "lng": 14.550072, },
    { "name": "Alaska", "lat": 64.200844, "lng": 205.493668, },
    { "name": "Estonia", "lat": 58.595272, "lng": 25.013607, },
    { "name": "Argentina", "lat": -38.416097, "lng": 297.616672, },
    { "name": "Israel", "lat": 31.046051, "lng": 34.851612, },
    { "name": "Slovenia", "lat": 46.151241, "lng": 14.995463, },
    { "name": "Greece", "lat": 39.074208, "lng": 21.824312, },
    { "name": "Belarus", "lat": 53.709807, "lng": 27.953389, },
    { "name": "Latvia", "lat": 56.879635, "lng": 24.603189, },
    { "name": "Iran", "lat": 32.4279, "lng": 53.6880, },
    { "name": "Qatar", "lat": 25.17, "lng": 51.32, },
    { "name": "SriLanka", "lat": 7.8731, "lng": 80.7718 },
    { "name": "Sri Lanka", "lat": 7.8731, "lng": 80.7718 },
    { "name": "Gambia", "lat": 13.4432, "lng": 15.3101 },
    { "name": "UnitedArabEmirates", "lat": 24.466667, "lng": 54.366669 },
    { "name": "United Arab Emirates", "lat": 24.466667, "lng": 54.366669 },
    { "name": "CostaRica", "lat": 9.934739, "lng": 275.912498 },
    { "name": "Costa Rica", "lat": 9.934739, "lng": 275.912498 },
    { "name": "Kazakhstan", "lat": 43.238949, "lng": 76.889709 },
    { "name": "Indonesia", "lat": -8.409518, "lng": 115.188919 },
    { "name": "Philippines", "lat": 16.566233, "lng": 121.262634 },
    { "name": "Egypt", "lat": 26.8205528, "lng": 30.8024979 },
    { "name": "Brunei", "lat": 4.74029, "lng": 114.6312 },
    { "name": "Jordan", "lat": 30.5852, "lng": 36.2384 }
];

let getLatlng = {}

countryCoord.forEach(function (c) {
    getLatlng[c.name] = [c.lat, c.lng];
    //getLatlng[c.name] = {"lat":c.lat,"lng":c.lng}
});

//console.log(latlngs);
/*---------------
series: [
        {
            name: 'Type:',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            }
        }
    ]
----------------*/
function echartsIcon(map, latlngs, option) {
    for (var i = 0; i < latlngs.length; i++) {
        var latlng = latlngs[i];
        var newClassName = 'icon-' + latlng.join('-');
        var myIcon = L.divIcon({
            className: 'my-div-icon',
            html: "<div class='echarts-icon " + newClassName + "'></div>"
        });
        // you can set .my-div-icon styles in CSS
        L.marker(latlng, { icon: myIcon }).addTo(map);

        var myChart = echarts.init(document.getElementsByClassName(newClassName)[0]);
        /*    if(i == 0)
            {
                option.series[0].data = option.datas[0];
            }
            else if (i >= 1)
            {
                var myseries = {
                    name: 'Type:',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    lableLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    data:option.datas[i]
                };
               
               // alert(option.series[i]);
                option.series[i]=myseries;
            }
            
            alert(option.series);*/
        option.series[0].name = option.datas[i].id;
        option.series[0].data = option.datas[i].pie;
        if (option.datas[i].r < 10) { option.series[0].radius = Math.round(option.datas[i].r) + 20 }
        else if (option.datas[i].r >= 10 & option.datas[i].r < 100) { option.series[0].radius = Math.round(option.datas[i].r / 10) + 25 }
        else if (option.datas[i].r >= 100 & option.datas[i].r < 1000) { option.series[0].radius = Math.round(option.datas[i].r / 100) + 30 }
        else { option.series[0].radius = Math.round(option.datas[i].r / 1000) + 35 }
        //let getrd = option.datas[i].r/pp;
        //console.log(getrd);
        //option.series[0].radius = Math.round(option.datas[i].r/100)+5;
        myChart.setOption(option);
    }
}

//var dom = document.getElementById('main');
//var chart = echarts.init(dom);


let latlngs1 = [
    [30, 104],
    [51.165691, 10.451526],
    [37.09024, 263.671875]
];
var i=0;
var option = {
    title: {},
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    color:color,
    /* legend: {
         orient: 'vertical',
         left: 'left',
         width: "90px",
         height: "140px",
         data: ['N01', 'N02', 'N03', 'N04', 'N05']
     }*/
    series: [{
        //name: 'Type:',
        type: 'pie',
        //radius: 50,
        center: ['50%', '60%'],
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        lableLine: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {//系列级个性化
            normal: {
                color: function(params) {
                    var colorList = ['#787D7B','#86A697',"#3A8FB7",'#86C166',"#7DB9DE","#DAC9A6","#F6C555","#FAD689","#F17C67",];
                   // console.log(params.dataIndex);
                    return colorList[params.dataIndex];
                },
            }
        },
    }]
};


option.datas = [{
    "id": "Sweden",
    "r": 106,
    "pie": [{ "value": 5, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 2, "name": "N03" }, { "value": 0, "name": "N04" },
    { "value": 1, "name": "N05" }, { "value": 37, "name": "N06" }, { "value": 1, "name": "N07" }, { "value": 24, "name": "N08" },
    { "value": 36, "name": "N09" }]
},

{
    "id": "Hungary", "r": 33, "pie": [{ "value": 1, "name": "N01" }, { "value": 0, "name": "N02" },
    { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 14, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 13, "name": "N08" }, { "value": 5, "name": "N09" }]
},

{ "id": "Nepal", "r": 1, "pie": [{ "value": 1, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Pakistan", "r": 2, "pie": [{ "value": 1, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Sri Lanka", "r": 4, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 1, "name": "N05" }, { "value": 1, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 1, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "China", "r": 482, "pie": [{ "value": 205, "name": "N01" }, { "value": 139, "name": "N02" }, { "value": 50, "name": "N03" }, { "value": 1, "name": "N04" }, { "value": 31, "name": "N05" }, { "value": 23, "name": "N06" }, { "value": 1, "name": "N07" }, { "value": 17, "name": "N08" }, { "value": 15, "name": "N09" }] }, { "id": "Estonia", "r": 4, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 1, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 2, "name": "N08" }, { "value": 1, "name": "N09" }] }, { "id": "Congo", "r": 12, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 9, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 2, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "South Africa", "r": 7, "pie": [{ "value": 1, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 5, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 1, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Indonesia", "r": 3, "pie": [{ "value": 2, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Saudi Arabia", "r": 3, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 2, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Argentina", "r": 24, "pie": [{ "value": 3, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 8, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 13, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Ireland", "r": 10, "pie": [{ "value": 1, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 2, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 2, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 5, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Portugal", "r": 96, "pie": [{ "value": 2, "name": "N01" }, { "value": 2, "name": "N02" }, { "value": 6, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 24, "name": "N06" }, { "value": 3, "name": "N07" }, { "value": 57, "name": "N08" }, { "value": 2, "name": "N09" }] }, { "id": "Qatar", "r": 2, "pie": [{ "value": 2, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Czech Republic", "r": 29, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 4, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 22, "name": "N08" }, { "value": 3, "name": "N09" }] }, { "id": "Latvia", "r": 10, "pie": [{ "value": 2, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 5, "name": "N06" }, { "value": 1, "name": "N07" }, { "value": 2, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Turkey", "r": 24, "pie": [{ "value": 2, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 5, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 14, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 3, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Iceland", "r": 423, "pie": [{ "value": 22, "name": "N01" }, { "value": 2, "name": "N02" }, { "value": 67, "name": "N03" }, { "value": 14, "name": "N04" }, { "value": 3, "name": "N05" }, { "value": 149, "name": "N06" }, { "value": 6, "name": "N07" }, { "value": 90, "name": "N08" }, { "value": 70, "name": "N09" }] }, { "id": "Mexico", "r": 10, "pie": [{ "value": 1, "name": "N01" }, { "value": 2, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 4, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 2, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 1, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Netherlands", "r": 401, "pie": [{ "value": 10, "name": "N01" }, { "value": 3, "name": "N02" }, { "value": 41, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 156, "name": "N06" }, { "value": 81, "name": "N07" }, { "value": 80, "name": "N08" }, { "value": 30, "name": "N09" }] }, { "id": "Brazil", "r": 37, "pie": [{ "value": 3, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 5, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 1, "name": "N05" }, { "value": 7, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 20, "name": "N08" }, { "value": 1, "name": "N09" }] }, { "id": "Japan", "r": 99, "pie": [{ "value": 6, "name": "N01" }, { "value": 6, "name": "N02" }, { "value": 69, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 7, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 11, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Slovakia", "r": 4, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 3, "name": "N06" }, { "value": 1, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "South Korea", "r": 36, "pie": [{ "value": 4, "name": "N01" }, { "value": 21, "name": "N02" }, { "value": 7, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 4, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Poland", "r": 10, "pie": [{ "value": 1, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 8, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 1, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Slovenia", "r": 4, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 2, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 2, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Israel", "r": 7, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 2, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 1, "name": "N08" }, { "value": 4, "name": "N09" }] }, { "id": "India", "r": 116, "pie": [{ "value": 10, "name": "N01" }, { "value": 1, "name": "N02" }, { "value": 52, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 41, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 9, "name": "N08" }, { "value": 3, "name": "N09" }] }, { "id": "Algeria", "r": 3, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 3, "name": "N09" }] }, { "id": "Spain", "r": 221, "pie": [{ "value": 57, "name": "N01" }, { "value": 26, "name": "N02" }, { "value": 11, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 105, "name": "N06" }, { "value": 2, "name": "N07" }, { "value": 17, "name": "N08" }, { "value": 3, "name": "N09" }] }, { "id": "Egypt", "r": 1, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 1, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Australia", "r": 569, "pie": [{ "value": 40, "name": "N01" }, { "value": 39, "name": "N02" }, { "value": 131, "name": "N03" }, { "value": 49, "name": "N04" }, { "value": 7, "name": "N05" }, { "value": 114, "name": "N06" }, { "value": 10, "name": "N07" }, { "value": 80, "name": "N08" }, { "value": 99, "name": "N09" }] }, { "id": "United Kingdom", "r": 1916, "pie": [{ "value": 140, "name": "N01" }, { "value": 21, "name": "N02" }, { "value": 312, "name": "N03" }, { "value": 1, "name": "N04" }, { "value": 12, "name": "N05" }, { "value": 628, "name": "N06" }, { "value": 118, "name": "N07" }, { "value": 602, "name": "N08" }, { "value": 82, "name": "N09" }] }, { "id": "Switzerland", "r": 54, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 23, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 28, "name": "N08" }, { "value": 2, "name": "N09" }] }, { "id": "Lithuania", "r": 1, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 1, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Norway", "r": 18, "pie": [{ "value": 1, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 7, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 4, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 1, "name": "N08" }, { "value": 5, "name": "N09" }] }, { "id": "Canada", "r": 122, "pie": [{ "value": 11, "name": "N01" }, { "value": 13, "name": "N02" }, { "value": 11, "name": "N03" }, { "value": 26, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 30, "name": "N06" }, { "value": 1, "name": "N07" }, { "value": 14, "name": "N08" }, { "value": 16, "name": "N09" }] }, { "id": "Thailand", "r": 31, "pie": [{ "value": 5, "name": "N01" }, { "value": 13, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 1, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 5, "name": "N08" }, { "value": 6, "name": "N09" }] }, { "id": "Luxembourg", "r": 101, "pie": [{ "value": 2, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 2, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 63, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 4, "name": "N08" }, { "value": 30, "name": "N09" }] }, {
    "id": "United Arab Emirates", "r": 25, "pie": [{ "value": 7, "name": "N01" }, { "value": 1, "name": "N02" }, { "value": 5, "name": "N03" },
    { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 4, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 4, "name": "N08" }, { "value": 4, "name": "N09" }]
}, { "id": "Brunei", "r": 4, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 4, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Iran", "r": 1, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Singapore", "r": 91, "pie": [{ "value": 30, "name": "N01" }, { "value": 2, "name": "N02" }, { "value": 44, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 6, "name": "N05" }, { "value": 1, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 5, "name": "N08" }, { "value": 3, "name": "N09" }] }, { "id": "Belarus", "r": 2, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 1, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Vietnam", "r": 18, "pie": [{ "value": 2, "name": "N01" }, { "value": 2, "name": "N02" }, { "value": 2, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 11, "name": "N08" }, { "value": 1, "name": "N09" }] }, { "id": "Russia", "r": 151, "pie": [{ "value": 0, "name": "N01" }, { "value": 2, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 38, "name": "N06" }, { "value": 1, "name": "N07" }, { "value": 95, "name": "N08" }, { "value": 14, "name": "N09" }] }, { "id": "Finland", "r": 19, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 12, "name": "N06" }, { "value": 1, "name": "N07" }, { "value": 3, "name": "N08" }, { "value": 2, "name": "N09" }] }, { "id": "Kazakhstan", "r": 4, "pie": [{ "value": 1, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 1, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 1, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Austria", "r": 14, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 6, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 3, "name": "N08" }, { "value": 4, "name": "N09" }] }, { "id": "Greece", "r": 40, "pie": [{ "value": 4, "name": "N01" }, { "value": 1, "name": "N02" }, { "value": 7, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 3, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 25, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Jordan", "r": 20, "pie": [{ "value": 0, "name": "N01" }, { "value": 1, "name": "N02" }, { "value": 4, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 2, "name": "N05" }, { "value": 1, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 10, "name": "N08" }, { "value": 2, "name": "N09" }] }, { "id": "Philippines", "r": 2, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 2, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Italy", "r": 67, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 3, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 2, "name": "N05" }, { "value": 31, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 30, "name": "N08" }, { "value": 1, "name": "N09" }] }, { "id": "Germany", "r": 46, "pie": [{ "value": 12, "name": "N01" }, { "value": 2, "name": "N02" }, { "value": 2, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 1, "name": "N05" }, { "value": 4, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 7, "name": "N08" }, { "value": 18, "name": "N09" }] }, { "id": "Belgium", "r": 329, "pie": [{ "value": 50, "name": "N01" }, { "value": 1, "name": "N02" }, { "value": 7, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 11, "name": "N05" }, { "value": 147, "name": "N06" }, { "value": 9, "name": "N07" }, { "value": 88, "name": "N08" }, { "value": 16, "name": "N09" }] }, { "id": "New Zealand", "r": 6, "pie": [{ "value": 0, "name": "N01" }, { "value": 2, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 1, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 1, "name": "N07" }, { "value": 1, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Chile", "r": 7, "pie": [{ "value": 4, "name": "N01" }, { "value": 2, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 1, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "United States", "r": 3680, "pie": [{ "value": 387, "name": "N01" }, { "value": 166, "name": "N02" }, { "value": 89, "name": "N03" }, { "value": 899, "name": "N04" }, { "value": 10, "name": "N05" }, { "value": 475, "name": "N06" }, { "value": 6, "name": "N07" }, { "value": 106, "name": "N08" }, { "value": 1542, "name": "N09" }] }, { "id": "Gambia", "r": 3, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 1, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 1, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Costa Rica", "r": 6, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 1, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 3, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 1, "name": "N08" }, { "value": 1, "name": "N09" }] }, { "id": "France", "r": 225, "pie": [{ "value": 3, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 6, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 5, "name": "N05" }, { "value": 133, "name": "N06" }, { "value": 1, "name": "N07" }, { "value": 16, "name": "N08" }, { "value": 61, "name": "N09" }] }, { "id": "Kuwait", "r": 5, "pie": [{ "value": 0, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 4, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 1, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Malaysia", "r": 10, "pie": [{ "value": 8, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 2, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Georgia", "r": 12, "pie": [{ "value": 1, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 4, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 4, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 1, "name": "N08" }, { "value": 2, "name": "N09" }] }, { "id": "Cambodia", "r": 1, "pie": [{ "value": 1, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 0, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 0, "name": "N09" }] }, { "id": "Denmark", "r": 308, "pie": [{ "value": 11, "name": "N01" }, { "value": 0, "name": "N02" }, { "value": 1, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 43, "name": "N06" }, { "value": 4, "name": "N07" }, { "value": 22, "name": "N08" }, { "value": 227, "name": "N09" }] }, { "id": "Senegal", "r": 14, "pie": [{ "value": 2, "name": "N01" }, { "value": 1, "name": "N02" }, { "value": 0, "name": "N03" }, { "value": 0, "name": "N04" }, { "value": 0, "name": "N05" }, { "value": 8, "name": "N06" }, { "value": 0, "name": "N07" }, { "value": 0, "name": "N08" }, { "value": 3, "name": "N09" }] }];

let latlngs = [];//[51.165691, 10.451526],

option.datas.forEach(function (k) {
    latlngs.push(getLatlng[k.id]);
    //getLatlng[c.name] = {"lat":c.lat,"lng":c.lng}
});

let r = [];
option.datas.forEach(function (kk) {
    r.push(kk.r);
    //getLatlng[c.name] = {"lat":c.lat,"lng":c.lng}
});
let pp = Math.max.apply(null, r);
//console.log(Math.max.apply(null, r));
/*option.datas1 = [
    {
        "id": "Singapore", "r":3,
        "pie" : [
            { value: 335, name: 'N01' },
            { value: 310, name: 'N02' },
            { value: 234, name: 'N03' },
            { value: 135, name: 'N04' },
            { value: 1548, name: 'N05' }
        ],
    },
    {
        "id": "German", "r":3,
        "pie" : [
            { value: 345, name: 'N01' },
            { value: 410, name: 'N02' },
            { value: 244, name: 'N03' },
            { value: 145, name: 'N04' },
            { value: 548, name: 'N05' }
        ],
    },
    {
        "id": "US", "r":3,
        "pie" : [
            { value: 445, name: 'N01' },
            { value: 410, name: 'N02' },
            { value: 244, name: 'N03' },
            { value: 145, name: 'N04' },
            { value: 148, name: 'N05' }
        ],
    },
];
*/
echartsIcon(mymap, latlngs, option);


//option.series[0].data = option.datas[0];
//chart.setOption(option);*/

var dom2 = document.getElementById('mainc');
var chart2 = echarts.init(dom2);
//var cdatas = [{"id":"SouthAmerica","pie":[{"value":10, "name":"N01"},{"value":2, "name":"N02"},{"value":5, "name":"N03"},{"value":1, "name":"N05"},{"value":15, "name":"N06"},{"value":34, "name":"N08"},{"value":1, "name":"N09"}]},{"id":"Oceania","pie":[{"value":40, "name":"N01"},{"value":41, "name":"N02"},{"value":132, "name":"N03"},{"value":49, "name":"N04"},{"value":8, "name":"N05"},{"value":114, "name":"N06"},{"value":11, "name":"N07"},{"value":81, "name":"N08"},{"value":99, "name":"N09"}]},{"id":"Europe","pie":[{"value":324, "name":"N01"},{"value":60, "name":"N02"},{"value":483, "name":"N03"},{"value":15, "name":"N04"},{"value":35, "name":"N05"},{"value":1647, "name":"N06"},{"value":229, "name":"N07"},{"value":1237, "name":"N08"},{"value":612, "name":"N09"}]},{"id":"NorthAmerica","pie":[{"value":399, "name":"N01"},{"value":181, "name":"N02"},{"value":100, "name":"N03"},{"value":930, "name":"N04"},{"value":10, "name":"N05"},{"value":510, "name":"N06"},{"value":7, "name":"N07"},{"value":122, "name":"N08"},{"value":1559, "name":"N09"}]},{"id":"Asia","pie":[{"value":288, "name":"N01"},{"value":186, "name":"N02"},{"value":263, "name":"N03"},{"value":1, "name":"N04"},{"value":44, "name":"N05"},{"value":100, "name":"N06"},{"value":1, "name":"N07"},{"value":80, "name":"N08"},{"value":40, "name":"N09"}]},{"id":"Africa","pie":[{"value":3, "name":"N01"},{"value":1, "name":"N02"},{"value":2, "name":"N03"},{"value":24, "name":"N06"},{"value":4, "name":"N08"},{"value":6, "name":"N09"}]}];
var datassss;

$.getJSON('https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date=group_data&area=continents').done(
    function (data) {
        var cdatas = data.data;
        var option2 = {
            title: [{
                top: '5%',
                text: 'Continents'
            }, {
                subtext: cdatas[0].id,
                left: '7.5%',
                top: '70%',
                textAlign: 'center'
            }, {
                subtext: cdatas[1].id,
                left: '25%',
                top: '70%',
                textAlign: 'center'
            }, {
                subtext: cdatas[2].id,
                left: '41%',
                top: '70%',
                textAlign: 'center'
            },
            {
                subtext: cdatas[3].id,
                left: '57.5%',
                top: '70%',
                textAlign: 'center'
            }, {
                subtext: cdatas[4].id,
                left: '74.5%',
                top: '70%',
                textAlign: 'center'
            }, {
                subtext: cdatas[5].id,
                left: '91%',
                top: '70%',
                textAlign: 'center'
            },],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color:color,
            legend: {
                //orient: 'vertical',
                left: 'center',
                top: '85%',
                data: ['N01', 'N02', 'N03', 'N04', 'N05', 'N06', 'N07', 'N08', 'N09',]
            },
            series: [{
                name: cdatas[0].id,
                type: 'pie',
                radius: '50%',
                center: ['8%', '40%'],
                label: {//饼图不显示文字
                    show: true,
                    position: 'inner',//饼图图上显示百分比
                    formatter: function (params) {
                        return (params.percent - 0).toFixed(0) + '%'
                    },
                    textStyle: {
                        fontSize: 10
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: cdatas[0].pie,
            },
            {
                name: cdatas[1].id,
                type: 'pie',
                radius: '50%',
                center: ['25%', '40%'],
                label: {//饼图不显示文字
                    show: true,
                    position: 'inner',//饼图图上显示百分比
                    formatter: function (params) {
                        return (params.percent - 0).toFixed(0) + '%'
                    },
                    textStyle: {
                        fontSize: 10
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: cdatas[1].pie,
            }, {
                name: cdatas[2].id,
                type: 'pie',
                radius: '50%',
                center: ['42%', '40%'],
                label: {//饼图不显示文字
                    show: true,
                    position: 'inner',//饼图图上显示百分比
                    formatter: function (params) {
                        return (params.percent - 0).toFixed(0) + '%'
                    },
                    textStyle: {
                        fontSize: 10
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: cdatas[2].pie,
            }, {
                name: cdatas[3].id,
                type: 'pie',
                radius: '50%',
                center: ['58%', '40%'],
                label: {//饼图不显示文字
                    show: true,
                    position: 'inner',//饼图图上显示百分比
                    formatter: function (params) {
                        return (params.percent - 0).toFixed(0) + '%'
                    },
                    textStyle: {
                        fontSize: 10
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: cdatas[3].pie,
            }, {
                name: cdatas[4].id,
                type: 'pie',
                radius: '50%',
                center: ['75%', '40%'],
                label: {//饼图不显示文字
                    show: true,
                    position: 'inner',//饼图图上显示百分比
                    formatter: function (params) {
                        return (params.percent - 0).toFixed(0) + '%'
                    },
                    textStyle: {
                        fontSize: 10
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: cdatas[4].pie,
            }, {
                name: cdatas[5].id,
                type: 'pie',
                radius: '50%',
                center: ['91%', '40%'],
                label: {//饼图不显示文字
                    show: true,
                    position: 'inner',//饼图图上显示百分比
                    formatter: function (params) {
                        return (params.percent - 0).toFixed(0) + '%'
                    },
                    textStyle: {
                        fontSize: 10
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: cdatas[5].pie,
            },
            ]
        };

        chart2.setOption(option2);
    });

//alert(datadata);
//console.log(datassss);



var dom3 = document.getElementById('main3');
var chart3 = echarts.init(dom3);
var myrdata = [{ "id": "N01", "rose": [{ "value": 5, "name": "Sweden" }, { "value": 1, "name": "Hungary" }, { "value": 1, "name": "Nepal" }, { "value": 1, "name": "Pakistan" }, { "value": 205, "name": "China" }, { "value": 1, "name": "South Africa" }, { "value": 2, "name": "Indonesia" }, { "value": 3, "name": "Argentina" }, { "value": 1, "name": "Ireland" }, { "value": 2, "name": "Portugal" }, { "value": 2, "name": "Qatar" }, { "value": 2, "name": "Latvia" }, { "value": 2, "name": "Turkey" }, { "value": 22, "name": "Iceland" }, { "value": 1, "name": "Mexico" }, { "value": 10, "name": "Netherlands" }, { "value": 3, "name": "Brazil" }, { "value": 6, "name": "Japan" }, { "value": 4, "name": "South Korea" }, { "value": 1, "name": "Poland" }, { "value": 10, "name": "India" }, { "value": 57, "name": "Spain" }, { "value": 40, "name": "Australia" }, { "value": 140, "name": "United Kingdom" }, { "value": 1, "name": "Norway" }, { "value": 11, "name": "Canada" }, { "value": 5, "name": "Thailand" }, { "value": 2, "name": "Luxembourg" }, { "value": 7, "name": "United Arab Emirates" }, { "value": 30, "name": "Singapore" }, { "value": 2, "name": "Vietnam" }, { "value": 1, "name": "Kazakhstan" }, { "value": 4, "name": "Greece" }, { "value": 12, "name": "Germany" }, { "value": 50, "name": "Belgium" }, { "value": 4, "name": "Chile" }, { "value": 387, "name": "United States" }, { "value": 3, "name": "France" }, { "value": 8, "name": "Malaysia" }, { "value": 1, "name": "Georgia" }, { "value": 1, "name": "Cambodia" }, { "value": 11, "name": "Denmark" }, { "value": 2, "name": "Senegal" }] }, { "id": "N02", "rose": [{ "value": 139, "name": "China" }, { "value": 2, "name": "Portugal" }, { "value": 2, "name": "Iceland" }, { "value": 2, "name": "Mexico" }, { "value": 3, "name": "Netherlands" }, { "value": 6, "name": "Japan" }, { "value": 21, "name": "South Korea" }, { "value": 1, "name": "India" }, { "value": 26, "name": "Spain" }, { "value": 39, "name": "Australia" }, { "value": 21, "name": "United Kingdom" }, { "value": 13, "name": "Canada" }, { "value": 13, "name": "Thailand" }, { "value": 1, "name": "United Arab Emirates" }, { "value": 2, "name": "Singapore" }, { "value": 2, "name": "Vietnam" }, { "value": 2, "name": "Russia" }, { "value": 1, "name": "Greece" }, { "value": 1, "name": "Jordan" }, { "value": 2, "name": "Germany" }, { "value": 1, "name": "Belgium" }, { "value": 2, "name": "New Zealand" }, { "value": 2, "name": "Chile" }, { "value": 166, "name": "United States" }, { "value": 1, "name": "Senegal" }] }, { "id": "N03", "rose": [{ "value": 2, "name": "Sweden" }, { "value": 1, "name": "Pakistan" }, { "value": 1, "name": "Sri Lanka" }, { "value": 50, "name": "China" }, { "value": 1, "name": "Congo" }, { "value": 1, "name": "Indonesia" }, { "value": 1, "name": "Saudi Arabia" }, { "value": 2, "name": "Ireland" }, { "value": 6, "name": "Portugal" }, { "value": 5, "name": "Turkey" }, { "value": 67, "name": "Iceland" }, { "value": 41, "name": "Netherlands" }, { "value": 5, "name": "Brazil" }, { "value": 69, "name": "Japan" }, { "value": 7, "name": "South Korea" }, { "value": 2, "name": "Slovenia" }, { "value": 2, "name": "Israel" }, { "value": 52, "name": "India" }, { "value": 11, "name": "Spain" }, { "value": 131, "name": "Australia" }, { "value": 312, "name": "United Kingdom" }, { "value": 1, "name": "Switzerland" }, { "value": 7, "name": "Norway" }, { "value": 11, "name": "Canada" }, { "value": 1, "name": "Thailand" }, { "value": 2, "name": "Luxembourg" }, { "value": 5, "name": "United Arab Emirates" }, { "value": 4, "name": "Brunei" }, { "value": 1, "name": "Iran" }, { "value": 44, "name": "Singapore" }, { "value": 1, "name": "Belarus" }, { "value": 2, "name": "Vietnam" }, { "value": 1, "name": "Russia" }, { "value": 1, "name": "Finland" }, { "value": 1, "name": "Kazakhstan" }, { "value": 1, "name": "Austria" }, { "value": 7, "name": "Greece" }, { "value": 4, "name": "Jordan" }, { "value": 2, "name": "Philippines" }, { "value": 3, "name": "Italy" }, { "value": 2, "name": "Germany" }, { "value": 7, "name": "Belgium" }, { "value": 1, "name": "New Zealand" }, { "value": 89, "name": "United States" }, { "value": 1, "name": "Gambia" }, { "value": 6, "name": "France" }, { "value": 4, "name": "Kuwait" }, { "value": 2, "name": "Malaysia" }, { "value": 4, "name": "Georgia" }, { "value": 1, "name": "Denmark" }] }, { "id": "N04", "rose": [{ "value": 1, "name": "China" }, { "value": 14, "name": "Iceland" }, { "value": 4, "name": "Mexico" }, { "value": 49, "name": "Australia" }, { "value": 1, "name": "United Kingdom" }, { "value": 26, "name": "Canada" }, { "value": 899, "name": "United States" }, { "value": 1, "name": "Costa Rica" }] }, { "id": "N05", "rose": [{ "value": 1, "name": "Sweden" }, { "value": 1, "name": "Sri Lanka" }, { "value": 31, "name": "China" }, { "value": 3, "name": "Iceland" }, { "value": 1, "name": "Brazil" }, { "value": 4, "name": "South Korea" }, { "value": 7, "name": "Australia" }, { "value": 12, "name": "United Kingdom" }, { "value": 6, "name": "Singapore" }, { "value": 2, "name": "Jordan" }, { "value": 2, "name": "Italy" }, { "value": 1, "name": "Germany" }, { "value": 11, "name": "Belgium" }, { "value": 1, "name": "New Zealand" }, { "value": 10, "name": "United States" }, { "value": 5, "name": "France" }] }, { "id": "N06", "rose": [{ "value": 37, "name": "Sweden" }, { "value": 14, "name": "Hungary" }, { "value": 1, "name": "Sri Lanka" }, { "value": 23, "name": "China" }, { "value": 1, "name": "Estonia" }, { "value": 9, "name": "Congo" }, { "value": 5, "name": "South Africa" }, { "value": 2, "name": "Saudi Arabia" }, { "value": 8, "name": "Argentina" }, { "value": 2, "name": "Ireland" }, { "value": 24, "name": "Portugal" }, { "value": 4, "name": "Czech Republic" }, { "value": 5, "name": "Latvia" }, { "value": 14, "name": "Turkey" }, { "value": 149, "name": "Iceland" }, { "value": 2, "name": "Mexico" }, { "value": 156, "name": "Netherlands" }, { "value": 7, "name": "Brazil" }, { "value": 7, "name": "Japan" }, { "value": 3, "name": "Slovakia" }, { "value": 8, "name": "Poland" }, { "value": 2, "name": "Slovenia" }, { "value": 41, "name": "India" }, { "value": 105, "name": "Spain" }, { "value": 1, "name": "Egypt" }, { "value": 114, "name": "Australia" }, { "value": 628, "name": "United Kingdom" }, { "value": 23, "name": "Switzerland" }, { "value": 1, "name": "Lithuania" }, { "value": 4, "name": "Norway" }, { "value": 30, "name": "Canada" }, { "value": 1, "name": "Thailand" }, { "value": 63, "name": "Luxembourg" }, { "value": 4, "name": "United Arab Emirates" }, { "value": 1, "name": "Singapore" }, { "value": 1, "name": "Belarus" }, { "value": 38, "name": "Russia" }, { "value": 12, "name": "Finland" }, { "value": 1, "name": "Kazakhstan" }, { "value": 6, "name": "Austria" }, { "value": 3, "name": "Greece" }, { "value": 1, "name": "Jordan" }, { "value": 31, "name": "Italy" }, { "value": 4, "name": "Germany" }, { "value": 147, "name": "Belgium" }, { "value": 475, "name": "United States" }, { "value": 1, "name": "Gambia" }, { "value": 3, "name": "Costa Rica" }, { "value": 133, "name": "France" }, { "value": 4, "name": "Georgia" }, { "value": 43, "name": "Denmark" }, { "value": 8, "name": "Senegal" }] }, { "id": "N07", "rose": [{ "value": 1, "name": "Sweden" }, { "value": 1, "name": "China" }, { "value": 3, "name": "Portugal" }, { "value": 1, "name": "Latvia" }, { "value": 6, "name": "Iceland" }, { "value": 81, "name": "Netherlands" }, { "value": 1, "name": "Slovakia" }, { "value": 2, "name": "Spain" }, { "value": 10, "name": "Australia" }, { "value": 118, "name": "United Kingdom" }, { "value": 1, "name": "Canada" }, { "value": 1, "name": "Russia" }, { "value": 1, "name": "Finland" }, { "value": 9, "name": "Belgium" }, { "value": 1, "name": "New Zealand" }, { "value": 6, "name": "United States" }, { "value": 1, "name": "France" }, { "value": 4, "name": "Denmark" }] }, { "id": "N08", "rose": [{ "value": 24, "name": "Sweden" }, { "value": 13, "name": "Hungary" }, { "value": 1, "name": "Sri Lanka" }, { "value": 17, "name": "China" }, { "value": 2, "name": "Estonia" }, { "value": 2, "name": "Congo" }, { "value": 1, "name": "South Africa" }, { "value": 13, "name": "Argentina" }, { "value": 5, "name": "Ireland" }, { "value": 57, "name": "Portugal" }, { "value": 22, "name": "Czech Republic" }, { "value": 2, "name": "Latvia" }, { "value": 3, "name": "Turkey" }, { "value": 90, "name": "Iceland" }, { "value": 1, "name": "Mexico" }, { "value": 80, "name": "Netherlands" }, { "value": 20, "name": "Brazil" }, { "value": 11, "name": "Japan" }, { "value": 1, "name": "Poland" }, { "value": 1, "name": "Israel" }, { "value": 9, "name": "India" }, { "value": 17, "name": "Spain" }, { "value": 80, "name": "Australia" }, { "value": 602, "name": "United Kingdom" }, { "value": 28, "name": "Switzerland" }, { "value": 1, "name": "Norway" }, { "value": 14, "name": "Canada" }, { "value": 5, "name": "Thailand" }, { "value": 4, "name": "Luxembourg" }, { "value": 4, "name": "United Arab Emirates" }, { "value": 5, "name": "Singapore" }, { "value": 11, "name": "Vietnam" }, { "value": 95, "name": "Russia" }, { "value": 3, "name": "Finland" }, { "value": 1, "name": "Kazakhstan" }, { "value": 3, "name": "Austria" }, { "value": 25, "name": "Greece" }, { "value": 10, "name": "Jordan" }, { "value": 30, "name": "Italy" }, { "value": 7, "name": "Germany" }, { "value": 88, "name": "Belgium" }, { "value": 1, "name": "New Zealand" }, { "value": 1, "name": "Chile" }, { "value": 106, "name": "United States" }, { "value": 1, "name": "Gambia" }, { "value": 1, "name": "Costa Rica" }, { "value": 16, "name": "France" }, { "value": 1, "name": "Kuwait" }, { "value": 1, "name": "Georgia" }, { "value": 22, "name": "Denmark" }] }, { "id": "N09", "rose": [{ "value": 36, "name": "Sweden" }, { "value": 5, "name": "Hungary" }, { "value": 15, "name": "China" }, { "value": 1, "name": "Estonia" }, { "value": 2, "name": "Portugal" }, { "value": 3, "name": "Czech Republic" }, { "value": 70, "name": "Iceland" }, { "value": 30, "name": "Netherlands" }, { "value": 1, "name": "Brazil" }, { "value": 4, "name": "Israel" }, { "value": 3, "name": "India" }, { "value": 3, "name": "Algeria" }, { "value": 3, "name": "Spain" }, { "value": 99, "name": "Australia" }, { "value": 82, "name": "United Kingdom" }, { "value": 2, "name": "Switzerland" }, { "value": 5, "name": "Norway" }, { "value": 16, "name": "Canada" }, { "value": 6, "name": "Thailand" }, { "value": 30, "name": "Luxembourg" }, { "value": 4, "name": "United Arab Emirates" }, { "value": 3, "name": "Singapore" }, { "value": 1, "name": "Vietnam" }, { "value": 14, "name": "Russia" }, { "value": 2, "name": "Finland" }, { "value": 4, "name": "Austria" }, { "value": 2, "name": "Jordan" }, { "value": 1, "name": "Italy" }, { "value": 18, "name": "Germany" }, { "value": 16, "name": "Belgium" }, { "value": 1542, "name": "United States" }, { "value": 1, "name": "Costa Rica" }, { "value": 61, "name": "France" }, { "value": 2, "name": "Georgia" }, { "value": 227, "name": "Denmark" }, { "value": 3, "name": "Senegal" }] }];


function formatrdata(myrdata) {
    var rdatas = myrdata;
    for (var i = 0; i < 9; i++) 
    {
        var rl = myrdata[i].rose.length;
        var rvalue = [];
        var rname = [];
        var rd = myrdata[i].rose;
        var rtemp = [];
        var sum = 0;
        for (var j = 0; j < rl; j++) 
        {
           // console.log(rd[j].value + ' ' + rd[j].name)
            rvalue.push(rd[j].value);
            rname.push(rd[j].name);
        }

        for (var p = 0; p < rvalue.length; p++)
        {
            for(var q = p + 1; q < rvalue.length; q++)
            {
                if (rvalue[p]>rvalue[q]) 
                {
                    var temp=rvalue[p];
                    rvalue[p]=rvalue[q];
                    rvalue[q]=temp;
                    var tname = rname[p];
                    rname[p] = rname[q];
                    rname[q] = tname;
                };
            };        
        };
        //console.log(rvalue);
      //  console.log(rname);
        var rmax = Math.max.apply(null, rvalue);
        var number = Math.round(rmax * 0.5);
       // alert(number);
        var stemp = [];
        for (var k = 0; k < rvalue.length; k++) 
        {
            sum += rvalue[k];
            var tpdata;
            if(rvalue[k]<10)
            {}
           // if(rvalue[k]>1){
                stemp.push({"value":rvalue[k]+number,"name":rname[k]});
                rtemp.push({"value":rvalue[k],"name":rname[k]});
           // }
            
        }
        //console.log(rtemp);
      myrdata[i].rose = rtemp;
      rdatas[i].rose = stemp;
      rdatas[i].sum = sum;
      rdatas[i].number = number;
    }
    //console.log(myrdata);

    return rdatas;
};
//console.log(rdatas);
var rdatas = formatrdata(myrdata);

var option3 = {
    title: [{
        text: 'Nightingales Rose',
        top: '5%',
        left: '40%',
    }, {
        subtext: rdatas[0].id,
        left: '14.5%',
        top: '20%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#424242'
        },

    },
    {
        subtext: rdatas[0].sum,
        left: '14.5%',
        top: '21.5%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 12,
            //fontWeight: 'bold',
            color: '#585858'
        },

    },
    {
        subtext: rdatas[1].id,
        left: '44.5%',
        top: '20%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#424242'
        },

    },{
        subtext: rdatas[1].sum,
        left: '44.5%',
        top: '21.5%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 12,
            //fontWeight: 'bold',
            color: '#585858'
        },

    }, {
        subtext: rdatas[2].id,
        left: '74.5%',
        top: '20%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#424242'
        },

    }, {
        subtext: rdatas[2].sum,
        left: '74.5%',
        top: '21.5%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 12,
            //fontWeight: 'bold',
            color: '#585858'
        },

    },{
        subtext: rdatas[3].id,
        left: '14.5%',
        top: '48.5%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#424242'
        },

    }, {
        subtext: rdatas[3].sum,
        left: '14.5%',
        top: '50%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 12,
            //fontWeight: 'bold',
            color: '#585858'
        },

    },{
        subtext: rdatas[4].id,
        left: '44.5%',
        top: '48.5%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#424242'
        },

    }, {
        subtext: rdatas[4].sum,
        left: '44.5%',
        top: '50%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 12,
            //fontWeight: 'bold',
            color: '#585858'
        },

    },{
        subtext: rdatas[5].id,
        left: '74.5%',
        top: '48.5%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#424242'
        },

    }, {
        subtext: rdatas[5].sum,
        left: '74.5%',
        top: '50%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 12,
            //fontWeight: 'bold',
            color: '#585858'
        },

    },{
        subtext: rdatas[6].id,
        left: '14.5%',
        top: '73.5%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#424242'
        },

    },{
        subtext: rdatas[6].sum,
        left: '14.5%',
        top: '75%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 12,
            //fontWeight: 'bold',
            color: '#585858'
        },

    },{
        subtext: rdatas[7].id,
        left: '44.5%',
        top: '73.5%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#424242'
        },

    },{
        subtext: rdatas[7].sum,
        left: '44.5%',
        top: '75%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 12,
            //fontWeight: 'bold',
            color: '#585858'
        },

    }, {
        subtext: rdatas[8].id,
        left: '74.5%',
        top: '73.5%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#424242'
        },

    },{
        subtext: rdatas[8].sum,
        left: '74.5%',
        top: '75%',
        textAlign: 'center',
        subtextStyle: {
            fontSize: 12,
            //fontWeight: 'bold',
            color: '#585858'
        },

    },],
    color: defaultColor,
    tooltip: {},
    legend: {
        // left: 'center',
        // top: 'bottom',
        // data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        orient: 'vertical',
        type: 'scroll',
        right: 5,
        top: '10%',
        bottom: 20,
        //top: '10%',
        //left: 'left',
        //width: "90px",
        //height: "1400px",
        //data: ['N01', 'N02', 'N03', 'N04', 'N05']
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
         //   dataView: { show: true, readOnly: false },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: rdatas[0].id,
            type: 'pie',
            radius: [40, 180],
            center: ['15%', '21.5%'],
            roseType: 'radius',
            sort: 'ascending',
            label: {//饼图不显示文字
                show: false,
              //  position: 'inner',//饼图图上显示百分比
            //formatter: function (params) {
             //       return params.name +': '+ (params.value - rdatas[0].number);
             //   },
              //  textStyle: {
              //      fontSize: 10
              //  }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (param){
                   // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                    return rdatas[0].id +':<br>'+param.name +': '+ (param.value - rdatas[0].number);//+ ' <br>' + (((param.value - rdatas[0].number) / rdatas[0].sum) * 100).toFixed(4) + '%';
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: rdatas[0].rose
        }, {
            name: rdatas[1].id,
            type: 'pie',
            radius: [40, 180],
            center: ['45%', '21.5%'],
            roseType: 'radius',
            sort: 'ascending',
            label: {//饼图不显示文字
                show: false,
              /*  position: 'inner',//饼图图上显示百分比
                formatter: function (params) {
                    return (params.percent - 0).toFixed(0) + '%'
                },
                textStyle: {
                    fontSize: 10
                }*/
            },
            tooltip: {
                trigger: 'item',
                formatter: function (param){
                   // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                    return rdatas[1].id +':<br>'+param.name +': '+ (param.value - rdatas[1].number);//+ ' <br>' + (((param.value - rdatas[1].number) / rdatas[1].sum) * 100).toFixed(4) + '%';
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: rdatas[1].rose
        },
        {
            name: rdatas[2].id,
            type: 'pie',
            radius: [40, 180],
            center: ['75%', '21.5%'],
            roseType: 'radius',
            sort: 'ascending',
            label: {//饼图不显示文字
                show: false,
             /*   position: 'inner',//饼图图上显示百分比
                formatter: function (params) {
                    return (params.percent - 0).toFixed(0) + '%'
                },
                textStyle: {
                    fontSize: 10
                }*/
            },
            tooltip: {
                trigger: 'item',
                formatter: function (param){
                   // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                    return rdatas[2].id +':<br>'+param.name +': '+ (param.value - rdatas[2].number);//+ ' <br>' + (((param.value - rdatas[2].number) / rdatas[2].sum) * 100).toFixed(4) + '%';
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: rdatas[2].rose
        },
        {
            name: rdatas[3].id,
            type: 'pie',
            radius: [40, 180],
            center: ['15%', '50%'],
            roseType: 'radius',
            sort: 'ascending',
            label: {//饼图不显示文字
                show: false,
           /*     position: 'inner',//饼图图上显示百分比
                formatter: function (params) {
                    return (params.percent - 0).toFixed(0) + '%'
                },
                textStyle: {
                    fontSize: 10
                }*/
            },
            tooltip: {
                trigger: 'item',
                formatter: function (param){
                   // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                    return rdatas[3].id +':<br>'+param.name +': '+ (param.value - rdatas[3].number);//+ ' <br>' + (((param.value - rdatas[3].number) / rdatas[3].sum) * 100).toFixed(4) + '%';
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: rdatas[3].rose
        },
        {
            name: rdatas[4].id,
            type: 'pie',
            radius: [40, 180],
            center: ['45%', '50%'],
            roseType: 'radius',
            sort: 'ascending',
            label: {//饼图不显示文字
                show: false,
               /* position: 'inner',//饼图图上显示百分比
                formatter: function (params) {
                    return (params.percent - 0).toFixed(0) + '%'
                },
                textStyle: {
                    fontSize: 10
                }*/
            },
            tooltip: {
                trigger: 'item',
                formatter: function (param){
                   // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                    return rdatas[4].id +':<br>'+param.name +': '+ (param.value - rdatas[4].number);//+ ' <br>' + (((param.value - rdatas[4].number) / rdatas[4].sum) * 100).toFixed(4) + '%';
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: rdatas[4].rose
        },
        {
            name: rdatas[5].id,
            type: 'pie',
            radius: [40, 180],
            center: ['75%', '50%'],
            roseType: 'radius',
            sort: 'ascending',
            label: {//饼图不显示文字
                show: false,
             /*   position: 'inner',//饼图图上显示百分比
                formatter: function (params) {
                    return (params.percent - 0).toFixed(0) + '%'
                },
                textStyle: {
                    fontSize: 10
                }*/
            },
            tooltip: {
                trigger: 'item',
                formatter: function (param){
                   // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                    return rdatas[5].id +':<br>'+param.name +': '+ (param.value - rdatas[5].number);//+ ' <br>' + (((param.value - rdatas[5].number) / rdatas[5].sum) * 100).toFixed(4) + '%';
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: rdatas[5].rose
        },
        {
            name: rdatas[6].id,
            type: 'pie',
            radius: [40, 180],
            center: ['15%', '75%'],
            roseType: 'radius',
            sort: 'ascending',
            label: {//饼图不显示文字
                show: false,
             /*   position: 'inner',//饼图图上显示百分比
                formatter: function (params) {
                    return (params.percent - 0).toFixed(0) + '%'
                },
                textStyle: {
                    fontSize: 10
                }*/
            },
            tooltip: {
                trigger: 'item',
                formatter: function (param){
                   // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                    return rdatas[6].id +':<br>'+param.name +': '+ (param.value - rdatas[6].number);//+ ' <br>' + (((param.value - rdatas[6].number) / rdatas[6].sum) * 100).toFixed(4) + '%';
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: rdatas[6].rose
        },
        {
            name: rdatas[7].id,
            type: 'pie',
            radius: [40, 180],
            center: ['45%', '75%'],
            roseType: 'radius',
            sort: 'ascending',
            label: {//饼图不显示文字
                show: false,
              /*  position: 'inner',//饼图图上显示百分比
                formatter: function (params) {
                    return (params.percent - 0).toFixed(0) + '%'
                },
                textStyle: {
                    fontSize: 10
                }*/
            },
            tooltip: {
                trigger: 'item',
                formatter: function (param){
                   // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                    return rdatas[7].id +':<br>'+param.name +': '+ (param.value - rdatas[7].number);//+ ' <br>' + (((param.value - rdatas[7].number) / rdatas[7].sum) * 100).toFixed(4) + '%';
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: rdatas[7].rose
        },
        {
            name: rdatas[8].id,
            type: 'pie',
            radius: [40, 180],
            center: ['75%', '75%'],
            roseType: 'radius',
            sort: 'ascending',
            label: {//饼图不显示文字
                show: false,
             /*   position: 'inner',//饼图图上显示百分比
                formatter: function (params) {
                    return (params.percent - 0).toFixed(0) + '%'
                },
                textStyle: {
                    fontSize: 10
                }*/
            },
            tooltip: {
                trigger: 'item',
                formatter: function (param){
                   // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                    return rdatas[8].id +':<br>'+param.name +': '+ (param.value - rdatas[8].number);//+ ' <br>' + (((param.value - rdatas[8].number) / rdatas[8].sum) * 100).toFixed(4) + '%';
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: rdatas[8].rose
        },
    ]
};

chart3.setOption(option3);
/*
var options = { // put in gridstack options here
    disableOneColumnMode: true, // for jfiddle small window size
    float: false
};
var grid = GridStack.init(options);*/