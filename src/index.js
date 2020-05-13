/*
 * @Descripttion: 
 * @version: 
 * @Author: Anke Wang
 * @Date: 2020-05-08 13:27:01
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-05-13 15:50:12
 */

import './css/index.css'
import 'jquery';
import echarts from 'echarts'
import 'leaflet';
import 'echarts-leaflet';
import { defaultColor, getLatlng } from './plotSetting';
import { drawMap } from './drawBasemap';


let color = ['#787D7B', '#86A697', '#3A8FB7', "#7DB9DE", "#DAC9A6", "#FAD689", "#F17C67", "#86C166", "#F6C555"];

$.getJSON('https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date=group_data&area=countrys').done(function (cdata) {   

    function echartsIcon(map, latlngs, option) {
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

    let option = {
        title: {},
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: color,
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
                    color: function (params) {
                        var colorList = ['#787D7B', '#86A697', "#3A8FB7", '#86C166', "#7DB9DE", "#DAC9A6", "#F6C555", "#FAD689", "#F17C67",];
                        //console.log(params.dataIndex);
                        return colorList[params.dataIndex];
                    },
                }
            },
        }]
    };

    option.datas = cdata.data;

    let latlngs = [];//[51.165691, 10.451526],

    
    //console.log(cdata);
    option.datas.forEach(function (k) {
        if(getLatlng[k.id]==undefined)
        {console.log(k.id);}
        latlngs.push(getLatlng[k.id]);
        //getLatlng[c.name] = {"lat":c.lat,"lng":c.lng}
    });
    
    let r = [];
    option.datas.forEach(function (kk) {
        r.push(kk.r);
        //getLatlng[c.name] = {"lat":c.lat,"lng":c.lng}
    });

    let mymap = drawMap();

    echartsIcon(mymap, latlngs, option);

});





$.getJSON('https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date=group_data&area=continents').done(function (data) {   
    var dom2 = document.getElementById('mainc');
    var chart2 = echarts.init(dom2);
        var cdatas = data.data;
        var option2 = {
            title: [{
                top: '2%',
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
            color: color,
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

$.getJSON('https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date=group_data&area=rose').done(function (rdata) {

    var dom3 = document.getElementById('roseGraph');
    var chart3 = echarts.init(dom3);
    var myrdata = rdata.data;
    
    function formatrdata(myrdata) {
        var rdatas = myrdata;
        for (var i = 0; i < 9; i++) {
            var rl = myrdata[i].rose.length;
            var rvalue = [];
            var rname = [];
            var rd = myrdata[i].rose;
            var rtemp = [];
            var sum = 0;
            for (var j = 0; j < rl; j++) {
                // console.log(rd[j].value + ' ' + rd[j].name)
                rvalue.push(rd[j].value);
                rname.push(rd[j].name);
            }
    
            for (var p = 0; p < rvalue.length; p++) {
                for (var q = p + 1; q < rvalue.length; q++) {
                    if (rvalue[p] > rvalue[q]) {
                        var temp = rvalue[p];
                        rvalue[p] = rvalue[q];
                        rvalue[q] = temp;
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
            for (var k = 0; k < rvalue.length; k++) {
                sum += rvalue[k];
                var tpdata;
                if (rvalue[k] < 10) { }
                // if(rvalue[k]>1){
                stemp.push({ "value": rvalue[k] + number, "name": rname[k] });
                rtemp.push({ "value": rvalue[k], "name": rname[k] });
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
            top: '3%',
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
    
        }, {
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
    
        }, {
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
    
        }, {
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
    
        }, {
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
    
        }, {
            subtext: rdatas[6].id,
            left: '14.5%',
            top: '73.5%',
            textAlign: 'center',
            subtextStyle: {
                fontSize: 25,
                fontWeight: 'bold',
                color: '#424242'
            },
    
        }, {
            subtext: rdatas[6].sum,
            left: '14.5%',
            top: '75%',
            textAlign: 'center',
            subtextStyle: {
                fontSize: 12,
                //fontWeight: 'bold',
                color: '#585858'
            },
    
        }, {
            subtext: rdatas[7].id,
            left: '44.5%',
            top: '73.5%',
            textAlign: 'center',
            subtextStyle: {
                fontSize: 25,
                fontWeight: 'bold',
                color: '#424242'
            },
    
        }, {
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
    
        }, {
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
                    formatter: function (param) {
                        // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                        return rdatas[0].id + ':<br>' + param.name + ': ' + (param.value - rdatas[0].number);//+ ' <br>' + (((param.value - rdatas[0].number) / rdatas[0].sum) * 100).toFixed(4) + '%';
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
                    formatter: function (param) {
                        // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                        return rdatas[1].id + ':<br>' + param.name + ': ' + (param.value - rdatas[1].number);//+ ' <br>' + (((param.value - rdatas[1].number) / rdatas[1].sum) * 100).toFixed(4) + '%';
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
                    formatter: function (param) {
                        // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                        return rdatas[2].id + ':<br>' + param.name + ': ' + (param.value - rdatas[2].number);//+ ' <br>' + (((param.value - rdatas[2].number) / rdatas[2].sum) * 100).toFixed(4) + '%';
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
                    formatter: function (param) {
                        // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                        return rdatas[3].id + ':<br>' + param.name + ': ' + (param.value - rdatas[3].number);//+ ' <br>' + (((param.value - rdatas[3].number) / rdatas[3].sum) * 100).toFixed(4) + '%';
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
                    formatter: function (param) {
                        // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                        return rdatas[4].id + ':<br>' + param.name + ': ' + (param.value - rdatas[4].number);//+ ' <br>' + (((param.value - rdatas[4].number) / rdatas[4].sum) * 100).toFixed(4) + '%';
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
                    formatter: function (param) {
                        // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                        return rdatas[5].id + ':<br>' + param.name + ': ' + (param.value - rdatas[5].number);//+ ' <br>' + (((param.value - rdatas[5].number) / rdatas[5].sum) * 100).toFixed(4) + '%';
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
                    formatter: function (param) {
                        // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                        return rdatas[6].id + ':<br>' + param.name + ': ' + (param.value - rdatas[6].number);//+ ' <br>' + (((param.value - rdatas[6].number) / rdatas[6].sum) * 100).toFixed(4) + '%';
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
                    formatter: function (param) {
                        // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                        return rdatas[7].id + ':<br>' + param.name + ': ' + (param.value - rdatas[7].number);//+ ' <br>' + (((param.value - rdatas[7].number) / rdatas[7].sum) * 100).toFixed(4) + '%';
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
                    formatter: function (param) {
                        // console.log(param.name+' '+param.name+' '+param.sum+' '+param.number)
                        return rdatas[8].id + ':<br>' + param.name + ': ' + (param.value - rdatas[8].number);//+ ' <br>' + (((param.value - rdatas[8].number) / rdatas[8].sum) * 100).toFixed(4) + '%';
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


})



/*
var options = { // put in gridstack options here
    disableOneColumnMode: true, // for jfiddle small window size
    float: false
};
var grid = GridStack.init(options);*/