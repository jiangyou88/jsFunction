// 基础的树：包括基础的点击事件、刷新数据
var baseTree = $( '#jstree_base_div');
// 带有复选框的树
var checkboxTree=$('#jstree_checkbox_div');
// 可拖拽的树
var dragTree=$('#jstree_drag_div');

//jsTree初始化事件
// 在plugins加上wholerow就会没有虚线
// plugins加上dnd就是可拖拽的树
// plugins加上contextmenu就可以加上右键菜单
var initBaseTree = function (jsondata) {
	baseTree.jstree({
		'plugins': ['types',"contextmenu","search","changed"],
		'types': {
			'default': {
				'icon': 'fa fa-folder'
			},
			'html': {
				'icon': 'fa fa-file-code-o'
			},
			'svg': {
				'icon': 'fa fa-file-picture-o'
			},
			'css': {
				'icon': 'fa fa-file-code-o'
			},
			'img': {
				'icon': 'fa fa-file-image-o'
			},
			'js': {
				'icon': 'fa fa-file-text-o'
			}
		},
		'core': {
			//"multiple" : true,//多选
			"animation" : true,//动画
			"data" : jsondata
		}
	});
}

var initCheckboxTree=function(jsondata){
	checkboxTree.jstree({
		'plugins': ["types", "checkbox" ],
		'types': {
			'default': {
				'icon': 'fa fa-folder'
			},
			'html': {
				'icon': 'fa fa-file-code-o'
			},
			'svg': {
				'icon': 'fa fa-file-picture-o'
			},
			'css': {
				'icon': 'fa fa-file-code-o'
			},
			'img': {
				'icon': 'fa fa-file-image-o'
			},
			'js': {
				'icon': 'fa fa-file-text-o'
			}
		},
		'core': {
			//"multiple" : true,//多选
			"animation" : true,//动画
			"data" : jsondata
		},
		"checkbox" : {
			"keep_selected_style" : false
		}
	});

}

var initDragTree=function(jsondata){
	dragTree.jstree({
		'plugins': ['types',"dnd","search"],
		'types': {
			'default': {
				'icon': 'fa fa-folder'
			},
			'html': {
				'icon': 'fa fa-file-code-o'
			},
			'svg': {
				'icon': 'fa fa-file-picture-o'
			},
			'css': {
				'icon': 'fa fa-file-code-o'
			},
			'img': {
				'icon': 'fa fa-file-image-o'
			},
			'js': {
				'icon': 'fa fa-file-text-o'
			}
		},
		'core': {
			"check_callback" : true,  //在对树进行拖拽时，check_callback必须设置true
			//"multiple" : true,//多选
			"animation" : true,//动画
			"data" : jsondata
		}
	});

}
//绑定事件
baseTree.on('changed.jstree', function (e, data) {
	// console.log(data)
	alert(data?(data.node?(data.node.text?data.node.text:""):""):"");
});
$('#baseTreeRefresh').on('click', function(event) {
	baseTree.jstree(true).settings.core.data = jsonDemoChangedTree;
	//刷新数据
	baseTree.jstree(true).refresh();
});

$('#checkBoxTreeChosen').on('click', function(event) {
	var nodes=checkboxTree.jstree("get_checked");
	alert(nodes);
});

// 可拖拽树的回调事件
dragTree.on('move_node.jstree', function(e,data){
	// 可以拿到本身的ID、text和parent；旧的parent
	console.log(data);
})

$(document).ready(function () {
	// 初始化基础树
	initBaseTree(jsonDemoTree);
	// 初始化带有多选框的树
	initCheckboxTree(jsonDemoTree); 
	// 初始化可拖拽的树
	initDragTree(jsonDemoTree);

});