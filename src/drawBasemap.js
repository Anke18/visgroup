/*
 * @Descripttion: 
 * @version: 
 * @Author: Anke Wang
 * @Date: 2020-05-13 14:43:10
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-05-21 13:59:03
 */

export const drawMap = () => {

    let bounds = new L.LatLngBounds(new L.LatLng(-85, -173), new L.LatLng(85, 450));

    let mbAttr = 'Map data &copy; <a href="www.tianditu.gov.cn">Tianditu</a>';
    
    // load the map
    let mymap = L.map('mainmap', {
        center: [35, 150],
        zoom: 2,
        minZoom: 1,
        maxZoom: 10,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0,
        //  layers: grayscale
    });

    // load the tiles
    let baseLayers = {

        "Original": L.layerGroup([
            L.tileLayer('https://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=c044ae411c12b9585d2f114dd86b2f1f', { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'], attribution: mbAttr }),
            //  L.tileLayer('http://t{s}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=c044ae411c12b9585d2f114dd86b2f1f', { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] }),
            L.tileLayer('https://t{s}.tianditu.gov.cn/eva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=eva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=c044ae411c12b9585d2f114dd86b2f1f', { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] }),
        ]).addTo(mymap),
        "Satellite": L.layerGroup([
            L.tileLayer('https://t{s}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=c044ae411c12b9585d2f114dd86b2f1f', { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'], attribution: mbAttr }),
            L.tileLayer('https://t{s}.tianditu.gov.cn/eia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=eia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=c044ae411c12b9585d2f114dd86b2f1f', { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] }),
        ]),
        "Terrain": L.layerGroup([
            L.tileLayer('https://t{s}.tianditu.gov.cn/ter_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=c044ae411c12b9585d2f114dd86b2f1f', { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'], attribution: mbAttr }),
            L.tileLayer('https://t{s}.tianditu.gov.cn/eta_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=eta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=c044ae411c12b9585d2f114dd86b2f1f', { subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] })
        ]),

    };

    L.control.layers(baseLayers, {}, { position: "topright" }).addTo(mymap);

    return mymap;

}