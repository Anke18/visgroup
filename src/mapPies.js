/*
 * @Descripttion: 
 * @version: 
 * @Author: Anke Wang
 * @Date: 2020-05-21 11:12:22
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-05-21 12:59:17
 */

import echarts from 'echarts'
import 'leaflet';
import { drawMap } from './drawBasemap';
import { getLatlng } from './plotSetting';


export const echartsIcon = (map, latlngs, option) => {
    //function echartsIcon(map, latlngs, option) {
    for (var i = 0; i < latlngs.length; i++) {
        var latlng = latlngs[i];
        var newClassName = 'icon-' + latlng.join('-');
        // console.log(latlng);
        // console.log(newClassName );
        var myIcon = L.divIcon({
            className: 'my-div-icon',
            html: "<div class='echarts-icon " + newClassName + "'></div>"
        });
        // can set .my-div-icon styles in CSS
        L.marker(latlng, { icon: myIcon }).addTo(map);

        var myChart = echarts.init(document.getElementsByClassName(newClassName)[0]);

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

export const getLatlngArr = (data) => {
    //function getLatlngArr(data) {

    let latlngs = [];//[51.165691, 10.451526],

    data.forEach(function (k) {
        if (getLatlng[k.id] == undefined) { console.log(k.id); }
        latlngs.push(getLatlng[k.id]);
        //getLatlng[c.name] = {"lat":c.lat,"lng":c.lng}
    });

    return latlngs;

}

export const setMapiesOption = (data) => {
    //function setMapiesOption(data) {
    // basic
    let option = {
        title: {},
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ['#787D7B', '#86A697', '#3A8FB7', "#7DB9DE", "#DAC9A6", "#FAD689", "#F17C67", "#86C166", "#F6C555"],
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
            itemStyle: {//customization
                normal: {
                    color: function (params) {
                        var colorList = ['#787D7B', '#86A697', "#3A8FB7", '#86C166', "#7DB9DE", "#DAC9A6", "#F6C555", "#FAD689", "#F17C67",];
                        //console.log(params.dataIndex);
                        return colorList[params.dataIndex];
                    },
                }
            },
        }]
    };

    //data
    option.datas = data;

    //r,position...& final add to map
    let mymap = drawMap(); //add basemap
    let latlngs = getLatlngArr(option.datas);
    echartsIcon(mymap, latlngs, option);

}