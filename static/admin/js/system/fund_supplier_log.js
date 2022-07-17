define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.fund_supplier_log/index',
        add_url: 'system.fund_supplier_log/add',
        edit_url: 'system.fund_supplier_log/edit',
        delete_url: 'system.fund_supplier_log/delete',
        export_url: 'system.fund_supplier_log/export',
        modify_url: 'system.fund_supplier_log/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {field: 'supplier.name', title: '供应商'},
                    {field: 'change', title: '账变金额', search_ignore: true},
                    {width:300, field: 'balance', title: '供应商押款余额', search_ignore: true, templet:
                        function (data, option) {
                            return '押款:'+data.deposit
                                +' 入款:'+data.balance
                                +' 余额:'+(data.deposit-data.balance);
                        },
                    },
                    {width:300, field: 'p_orderid', title: '订单编号', search_ignore: true},
                    {field: 'username', title: '操作人'},
                    {field: 'change_type', title: '账变类型',
                        search: 'select',
                        selectList: [[0, '订单入款'], [1, "后台加款"],[2, "后台扣款"]],
                        templet:
                        function (data, option) {
                            var change_type =[
                                '<span class="layui-badge layui-bg-gray">订单入款</span>',
                                '<span class="layui-badge layui-bg-green">后台加款</span>',
                                '<span class="layui-badge layui-bg-blue">后台扣款</span>',
                            ]
                            return change_type[data.change_type]
                        },
                    },
                    {field: 'create_time', title: '创建时间', search: 'range'},
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