define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.supplier/index',
        add_url: 'system.supplier/add',
        edit_url: 'system.supplier/edit',
        delete_url: 'system.supplier/delete',
        export_url: 'system.supplier/export',
        modify_url: 'system.supplier/modify',
    };

    var Controller = {

        index: function () {
            operat_button = [                
                'edit',
                'delete',
                [
                    {
                        class: 'layui-btn layui-btn-success layui-btn-xs',
                        text: '加款',
                        method: 'open',
                        url: 'system.supplier/fund_add',
                        auth: 'fund_add',
                    },
                    {
                        class: 'layui-btn layui-btn-normal layui-btn-xs',
                        text: '扣款',
                        method: 'open',
                        url: 'system.supplier/fund_dec',
                        auth: 'fund_dec',
                    },
                    {
                        class: 'layui-btn layui-btn-success layui-btn-xs',
                        text: '支付参数',
                        method: 'open',
                        url: 'system.supplier/param',
                        auth: 'param',
                    },
                ],
            ]
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'add', 'export'],
                cols: [[
                    {field: 'name', title: '供应商名称'},
                    {field: 'code', title: '供应商编码', search_ignore: true},
                    {field: 'deposit', title: '押款', width: 300, templet:
                        function (data, option) {
                            return '押款:'+data.deposit
                                +' 入款:'+data.balance
                                +' 余额:'+(data.deposit-data.balance);
                        },
                        search_ignore: true
                    },
                    {field: 'need_deposit', title: '是否免押', templet:
                        function (data, option) {
                            if (data.need_deposit) {
                                return '<span class="layui-badge layui-bg-gray">必须押款</span>'
                            }
                            else {
                                return '<span class="layui-badge layui-bg-blue">可以免押</span>'
                            }
                        },
                        search: 'select',
                        selectList: [[1, '必须押款'], [0, '可以免押']],
                    },
                    {field: 'remark', title: '备注', templet: ea.table.text},
                    {field: 'status', search: 'select', selectList: ["禁用","启用"], title: '状态', templet: ea.table.switch, search_ignore: true},
                    {width: 300, title: '操作', operat: operat_button, templet: ea.table.tool},
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
        fund_add: function () {
            ea.listen();
        },
        fund_dec: function () {
            ea.listen();
        },
        param: function () {
            ea.listen();
        },
    };
    return Controller;
});