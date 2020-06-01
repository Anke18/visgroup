/*
 * @Descripttion: 
 * @version: 
 * @Author: Anke Wang
 * @Date: 2020-05-21 11:13:15
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-06-01 17:24:51
 */

export const drawContPies = (cdatas) => {
    
    let dom2 = document.getElementById('mainc');
    let chart2 = echarts.init(dom2);
    let option2 = {
        title: [{
            top: '2%',
            text: 'Continents'
        }, {
            subtext: cdatas[0].id,
            left: '7.5%',
            top: '70%',
            textAlign: 'center',
            subtextStyle: {
                color: '#424242'
            },
        }, {
            subtext: cdatas[1].id,
            left: '25%',
            top: '70%',
            textAlign: 'center',
            subtextStyle: {
                color: '#424242'
            },
        }, {
            subtext: cdatas[2].id,
            left: '41%',
            top: '70%',
            textAlign: 'center',
            subtextStyle: {
                color: '#424242'
            },
        },
        {
            subtext: cdatas[3].id,
            left: '57.5%',
            top: '70%',
            textAlign: 'center',
            subtextStyle: {
                color: '#424242'
            },
        }, {
            subtext: cdatas[4].id,
            left: '74.5%',
            top: '70%',
            textAlign: 'center',
            subtextStyle: {
                color: '#424242'
            },
        }, {
            subtext: cdatas[5].id,
            left: '91%',
            top: '70%',
            textAlign: 'center',
            subtextStyle: {
                color: '#424242'
            },
        },],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ['#787D7B', '#86A697', "#3A8FB7", '#86C166', "#7DB9DE", "#DAC9A6", "#F6C555", "#FAD689", "#F17C67",],
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
            label: {//do not show text
                show: true,
                position: 'inner',//show % inside pies
                formatter: function (params) {
                    return (params.percent - 0).toFixed(0) + '%'
                },
                textStyle: {
                    fontSize: 10
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
            label: {
                show: true,
                position: 'inner',
                formatter: function (params) {
                    return (params.percent - 0).toFixed(0) + '%'
                },
                textStyle: {
                    fontSize: 10
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
            label: {
                show: true,
                position: 'inner',
                formatter: function (params) {
                    return (params.percent - 0).toFixed(0) + '%'
                },
                textStyle: {
                    fontSize: 10
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
            label: {
                show: true,
                position: 'inner',
                formatter: function (params) {
                    return (params.percent - 0).toFixed(0) + '%'
                },
                textStyle: {
                    fontSize: 10
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
            label: {
                show: true,
                position: 'inner',
                formatter: function (params) {
                    return (params.percent - 0).toFixed(0) + '%'
                },
                textStyle: {
                    fontSize: 10
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
            label: {
                show: true,
                position: 'inner',
                formatter: function (params) {
                    return (params.percent - 0).toFixed(0) + '%'
                },
                textStyle: {
                    fontSize: 10
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
    window.addEventListener("resize", function () {
        chart2.resize();
    });
}