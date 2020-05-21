/*
 * @Descripttion: 
 * @version: 
 * @Author: Anke Wang
 * @Date: 2020-05-08 13:27:01
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-05-21 13:44:18
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


$.getJSON('https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date=group_data&area=countrys').done(function (cdata) {  

    setMapiesOption(cdata.data)

});


$.getJSON('https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date=group_data&area=continents').done(function (data) {   
    
    drawContPies(data.data)

});


$.getJSON('https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date=group_data&area=rose').done(function (rdata) {

    drawRosePies(rdata.data);

})

