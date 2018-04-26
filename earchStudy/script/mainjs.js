var resultData = '';//全局的数据
$(function(){
    resultData = data;
    histogram('histogramParent__zhexian', resultData.monthSalsePickPrePart[0]);
});


/**
 * @date:2018/4/24 14:17
 * 作者:GaoXiaoXiong
 * 功能: 绘画柱状图
 * @id 父元素的id
 * @path obj 对象
 */
function histogram(id, obj) {
    var yearList = [], qtyList = [];//年份，重量集合
    var color = "#92DCFB";
    for (var i in obj.detail) {
        yearList.push(obj.detail[i].title);
        qtyList.push(obj.detail[i].value);
    }

    var myChart = echarts.init($api.byId(id));
    var app = {};
    option = null;
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {//坐标轴指示器配置项
                type: 'line'
            },
        },
        toolbox: {
            show: true,
        },
        grid: {//直角坐标系内绘图网格
            left: '1%',
            height: 200,
            containLabel: true//grid 区域是否包含坐标轴的刻度标签。
        },
        xAxis: [{
            type: 'category',//坐标轴类型。
            boundaryGap: false,
            data: yearList,
            axisLabel: {//刻度标签文字的颜色
                color: color,
                interval: yearList.length == 12 ? 2 : 0 //坐标轴刻度标签的显示间隔，在类目轴中有效。可以设置成 0 强制显示所有标签。
            },
            axisLine: {//坐标轴颜色
                lineStyle: {//坐标轴颜色
                    color: color,
                },
            },
        }],
        yAxis: [{
            name: '吨',
            type: 'value',//坐标轴类型。
            axisLabel: {//刻度标签文字的颜色
                textStyle: {
                    color: color,
                    fontSize: '12'
                },
            },
            axisLine: {
                lineStyle: {//坐标轴颜色
                    color: color,
                },
            },
        }],
        series: [{
            data: qtyList,
            name: '出货量',
            type: 'line',
            showAllSymbol: true,//显示折线图上的那些所有小标签
            symbolSize: 5,//标记的大小
            smooth: true,//是否平滑的显示
            /* label: {//图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
             normal: {
             show: true,//是否显示标签。
             position: 'insideBottom',//标签的位置。
             fontSize: 12,//文字的字体大小
             color: color,//文字的颜色。
             formatter: function (value, index) {
             return value.value;
             }
             },
             },*/
            itemStyle: {//线条的样式
                normal: {
                    color: color,
                    lineStyle: {
                        width: 2,
                    }
                }
            },
            areaStyle: {//区域填充样式
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(146, 220, 251, 0.8)'
                    }, {
                        offset: 1,
                        color: 'rgba(146, 220, 251, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },

        }]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}


