define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.order/index',
        add_url: 'system.order/add',
        edit_url: 'system.order/edit',
        delete_url: 'system.order/delete',
        export_url: 'system.order/export',
        modify_url: 'system.order/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh'],
                cols: [[
                    {field: 'account.username', title: '商户号'},
                    {field: 'orderid', title: '商户单号'},
                    {width: 300, field: 'p_orderid', title: '平台单号'},
                    {field: 'code', title: '支付通道'},
                    {field: 'order_amount', title: '订单金额', search_ignore: true},
                    {field: 'amount', title: '实付金额', search_ignore: true},
                    {field: 'status', title: '订单状态', templet:
                        function (data, option) {
                            var status = ['正在回调', '待支付', '支付成功', '回调成功', '回调失败', '创建失败']
                            return status[data.status]
                        },
                        search: 'select', selectList: statusList,
                    },
                    {width: 180, field: 'create_time', title: '创建时间', search: 'range'},
                    {width: 200, title: '操作', templet: ea.table.tool, operat:[
                        [
                            {
                                class: 'layui-btn layui-btn-normal layui-btn-xs',
                                text: '查看详情',
                                method: 'open',
                                url: 'system.order/view',
                                auth: 'view',
                            },
                            {
                                class: 'layui-btn layui-btn-normal layui-btn-xs',
                                text: '手动回调',
                                title: '确定手动回调订单吗?',
                                method: 'get',
                                url: 'system.order/callback',
                                auth: 'callback',
                            },
                        ]
                    ]},
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