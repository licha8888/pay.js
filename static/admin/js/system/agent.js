define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.agent/index',
        add_url: 'system.agent/add',
        edit_url: 'system.agent/edit',
        delete_url: 'system.agent/delete',
        export_url: 'system.agent/export',
        modify_url: 'system.agent/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'export'],
                cols: [[
                    {field: 'account.username', title: '商户号'},
                    {field: 'agent.username', title: '所属代理', templet:
                    function (data, option) {
                        if (data.agent_id == 1) {
                            return '<span class="layui-badge layui-bg-gray">直营商户</span>'
                        }
                        else {
                            return '<span class="layui-badge layui-bg-blue">'+data.agent.username+' ' + data.agent.account_name+'</span>'
                        }
                    },},
                    {field: 'create_time', title: '创建时间', search_ignore:true},
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