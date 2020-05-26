/*
 * @Descripttion: 
 * @version: 
 * @Author: Anke Wang
 * @Date: 2020-05-08 13:27:01
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-05-26 17:12:43
 */

import './css/index.css'
import 'jquery';
import echarts from 'echarts'
import 'leaflet';
import 'echarts-leaflet';
import { defaultColor, getLatlng } from './plotSetting';
import { drawMap } from './drawBasemap';
import { setMapiesOption } from './mapPies';
import { drawContPies } from './contPies';
import { drawRosePies } from './rosePies';

//0.001
$.getJSON('https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date=groupdata&area=countrys&frequency=0.0005').done(function (cdata) {  

    setMapiesOption(cdata.data)

});


$.getJSON('https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date=groupdata&area=continents&frequency=0.0005').done(function (data) {   
    
    drawContPies(data.data)

});


$.getJSON('https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date=groupdata&area=rose&frequency=0.0005').done(function (rdata) {

    drawRosePies(rdata.data);

})

