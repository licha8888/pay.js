define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.product/index',
        add_url: 'system.product/add',
        edit_url: 'system.product/edit',
        delete_url: 'system.product/delete',
        export_url: 'system.product/export',
        modify_url: 'system.product/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'add', 'export'],
                cols: [[
                    {field: 'name', title: '产品名称'},
                    {field: 'code', title: '产品标识'},
                    {field: 'percent', title: '运营费率', search_ignore: true},
                    {field: 'remark', title: '备注说明', templet: ea.table.text},
                    {field: 'status', search: 'select', selectList: ["禁用","启用"], title: '状态', templet: ea.table.switch, search_ignore: true},
                    {width: 250, title: '操作', templet: ea.table.tool,
                        operat:['edit', 'delete',
                            [
                                {
                                    class: 'layui-btn layui-btn-normal layui-btn-xs',
                                    text: '风控设置',
                                    method: 'open',
                                    url: 'system.product/risk',
                                    auth: 'risk',
                                },
                            ],
                        ],
                    },                        
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
        risk: function () {
            ea.listen();
        },
    };
    return Controller;
});