define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.withdraw/index',
        add_url: 'system.withdraw/add',
        edit_url: 'system.withdraw/edit',
        delete_url: 'system.withdraw/delete',
        export_url: 'system.withdraw/export',
        modify_url: 'system.withdraw/modify',
        add_title: '申请提款',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'add', 'export'],
                cols: [[
                    {field: 'account.username', title: '提款商户'},
                    {field: 'bank_owner', title: '开户人'},
                    {field: 'bank_account', title: '银行账号', search_ignore:true},
                    {field: 'bank_name', title: '开户银行', search_ignore:true},
                    {field: 'amount', title: '提款金额', search_ignore:true},
                    {field: 'withdraw_type', title: '提款类型', search_ignore:true, templet:
                        function (data, option) {         
                            var withdraw_type = ['代理分润', '订单入款']
                            return withdraw_type[data.withdraw_type]
                        },
                    },
                    {field: 'status', title: '提款状态', search: 'select',
                        selectList: [[0, '待处理'], [1, '已出款'], [1, '已拒绝']],                        
                        templet:
                        function (data, option) {
                            var status = ['待处理', '已出款', '已拒绝']
                            return status[data.status];
                        },
                    },
                    {field: 'create_time', title: '创建时间', search: 'range'},
                    {width: 250, title: '操作', templet: ea.table.tool, operat:[
                        [
                            {
                                class: 'layui-btn layui-btn-success layui-btn-xs',
                                text: '已出款',
                                title: '确定出款吗?',
                                method: 'get',
                                url: 'system.withdraw/agree',
                                auth: 'agree',
                                exist_field: function(data){
                                    return (data.status == 0);
                                }
                            },
                            {
                                class: 'layui-btn layui-btn-normal layui-btn-xs',
                                style: function (data) {
                                    return (data.status != 0) ? "margin-left:55px" : "";
                                },
                                text: '拒绝出款',
                                title: '确定拒绝出款吗?',
                                method: 'get',
                                url: 'system.withdraw/reject',
                                auth: 'reject',
                                exist_field: function(data){
                                    return (data.status != 2);
                                }
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