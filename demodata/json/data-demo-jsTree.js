/*
* json数据 - 导航菜单
* 结构：
*		id			菜单项标识
*		label		菜单名/标签
*		parent		父节点标识		#为顶级
*		href		菜单链接		#为无链接
*		iconClass	菜单项样式
*
*/
var jsonDemoTree =
[
    {
        "id" : "root",
        "text" : "辖区范围",
        "parent" : "#",
        "state" : { opened : true },
        "level" : "0",
        "action" : "load",
        "gdb" : "demodata/gdb/base/sub1/重油公司辖区范围新.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n01",
        "text" : "中拐探区",
        "parent" : "root",
        "state" : { opened : true },
        "level" : "1",
        "action" : "load",
        "lpszID" : "#"
    },
    {
        "id" : "n02",
        "text" : "老区",
        "parent" : "root",
        "state" : { opened : true },
        "level" : "1",
        "action" : "load",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0201",
        "text" : "九6区",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "九6"
    },
    {
        "id" : "n0202",
        "text" : "九7区",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "九7"
    },
    {
        "id" : "n0203",
        "text" : "九8区",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "九8"
    },
    {
        "id" : "n0204",
        "text" : "九9区",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "九9"
    },
    {
        "id" : "n0205",
        "text" : "九浅11井区块",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0206",
        "text" : "九浅41井区块",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0207",
        "text" : "克浅109井区块",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0208",
        "text" : "克浅10井区块",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0209",
        "text" : "六1区",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0210",
        "text" : "六2区",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0211",
        "text" : "六浅1井区块",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0212",
        "text" : "检230井区块",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "检230井区"
    },
    {
        "id" : "n0213",
        "text" : "检443井区块",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0214",
        "text" : "检448井区块",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0215",
        "text" : "检451井区块",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "检451井区"
    }
];

var jsonDemoChangedTree =
[
    {
        "id" : "root",
        "text" : "辖区范围2",
        "parent" : "#",
        "state" : { opened : true },
        "level" : "0",
        "action" : "load",
        "gdb" : "demodata/gdb/base/sub1/重油公司辖区范围新.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n01",
        "text" : "中拐探区2",
        "parent" : "root",
        "state" : { opened : true },
        "level" : "1",
        "action" : "load",
        "lpszID" : "#"
    },
    {
        "id" : "n02",
        "text" : "老区2",
        "parent" : "root",
        "state" : { opened : true },
        "level" : "1",
        "action" : "load",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0201",
        "text" : "九6区2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "九6"
    },
    {
        "id" : "n0202",
        "text" : "九7区2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "九7"
    },
    {
        "id" : "n0203",
        "text" : "九8区2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "九8"
    },
    {
        "id" : "n0204",
        "text" : "九9区2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "九9"
    },
    {
        "id" : "n0205",
        "text" : "九浅11井区块2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0206",
        "text" : "九浅41井区块2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0207",
        "text" : "克浅109井区块2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0208",
        "text" : "克浅10井区块2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0209",
        "text" : "六1区2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0210",
        "text" : "六2区2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0211",
        "text" : "六浅1井区块2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0212",
        "text" : "检230井区块2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "检230井区"
    },
    {
        "id" : "n0213",
        "text" : "检443井区块2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0214",
        "text" : "检448井区块2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "#"
    },
    {
        "id" : "n0215",
        "text" : "检451井区块2",
        "parent" : "n02",
        "level" : "2",
        "action" : "select",
        "gdb" : "demodata/gdb/base/sub1/重油公司全图.GDBX",
        "lpszID" : "检451井区"
    }
];