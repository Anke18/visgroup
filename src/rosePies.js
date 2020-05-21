/*
 * @Descripttion: 
 * @version: 
 * @Author: Anke Wang
 * @Date: 2020-05-21 11:14:22
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-05-21 13:55:37
 */
import { defaultColor, getLatlng } from './plotSetting';

export const formatrdata = (myrdata) => {

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

}


export const drawRosePies = (myrdata) => {

    var dom3 = document.getElementById('roseGraph');
    var chart3 = echarts.init(dom3);
   // var myrdata = rdata.data;

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
                label: {
                    show: false,
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
                label: {
                    show: false,
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
                label: {
                    show: false,
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
                label: {
                    show: false,
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
                label: {
                    show: false,
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
                label: {
                    show: false,
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
                label: {
                    show: false,
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
                label: {
                    show: false,
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
                label: {
                    show: false,
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

    window.addEventListener("resize", function () {
        chart3.resize();
    });
}