// 饼图
function initCustomizedPie(){
  var customizedPie=echarts.init(document.getElementById('customizedPie'));
  var option = {
     title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
               emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
      ]
    };
    customizedPie.setOption(option);
}
// 柱状图
function initBar(){
	var bar=echarts.init(document.getElementById('bar'));
	var option = {
		title: {
			text: ''
		},
		tooltip: {},
		legend: {
			data: []
		},
		xAxis: {
			//data: histogramTypeName
          data:['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放']
      },
      yAxis: {},
      series: [{
         name: '',
         type: 'bar',
        	//data: histogramCount,
          data:[220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
      }]
  }
  bar.setOption(option);
}

$(document).ready(function () {
    initCustomizedPie();
    initBar();
});