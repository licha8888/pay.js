define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.channel/index',
        add_url: 'system.channel/add',
        edit_url: 'system.channel/edit',
        delete_url: 'system.channel/delete',
        export_url: 'system.channel/export',
        modify_url: 'system.channel/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'add', 'export'],
                cols: [[
                    {field: 'supplier.name', title: '供应商', search: 'select', selectList: supplierList},
                    {field: 'name', title: '通道名称', search_ignore: true},
                    {field: 'code', title: '通道编码'},
                    {field: 'percent', title: '成本费率', search_ignore: true},
                    {field: 'product.percent', title: '运营费率', search_ignore: true},
                    {field: 'product.name', title: '对应产品',
                        search: 'select',
                        selectList: productList,
                        templet:
                        function (data, option) {
                            return data.product.name+' '+data.product.code;
                        },
                    },
                    {field: 'weight', title: '权重', search_ignore: true},
                    {field: 'remark', title: '备注', templet: ea.table.text},
                    {field: 'status', search: 'select', selectList: ["禁用","启用"], title: '状态', templet: ea.table.switch, search_ignore: true},
                    {width: 250, title: '操作', templet: ea.table.tool},
                ]],
            });

            ea.listen();
        },
        add: function () {
            ea.listen();
        },
        edit: function () {
            ea.listen();
        },
    };
    return Controller;
});