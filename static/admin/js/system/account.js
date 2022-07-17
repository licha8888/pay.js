define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.account/index',
        add_url: 'system.account/add',
        edit_url: 'system.account/edit',
        delete_url: 'system.account/delete',
        export_url: 'system.account/export',
        modify_url: 'system.account/modify',
        edit_height: '650px',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                toolbar: ['refresh', 'add', 'export'],
                cols: [[
                    {field: 'username', title: '商户号'},
                    {field: 'account_name', title: '商户名称'},
                    {field: 'deposit', title: '押款', width: 300, templet:
                        function (data, option) {
                            return '押款:'+data.deposit
                                + ' 入款:'+data.balance
                                +' 余额:'+(data.deposit-data.balance);
                        },
                        search_ignore: true
                    },
                    {field: 'is_agent', title: '代理权限', templet:
                        function (data, option) {
                            if (data.is_agent) {
                                return '<span class="layui-badge layui-bg-blue">代理商户</span>'
                            }
                            else {
                                return '<span class="layui-badge layui-bg-gray">普通商户</span>'
                            }
                        },
                        search: 'select',
                        selectList: [[0, '普通商户'], [1, '代理商户']],
                    },
                    {width:200, field: 'profit', title: '分润', search_ignore: true, templet:
                        function (data, option) {
                            return (data.is_agent) ? 
                                '点位: '+data.profit+' 余额: '+data.agent_balance : '';
                        },
                    },
                    {field: 'pid_text', title: '所属代理'},
                    {field: 'remark', title: '备注', templet: ea.table.text, search_ignore: true},
                    {field: 'status', search: 'select', selectList: ["禁用","启用"], title: '状态', templet: ea.table.switch, search_ignore: true},
                    {width: 300, title: '操作', templet: ea.table.tool, operat:['edit', 'delete',
                        [
                            {
                                class: 'layui-btn layui-btn-success layui-btn-xs',
                                text: '加款',
                                method: 'open',
                                url: 'system.account/fund_add',
                                auth: 'fund_add',
                            },
                            {
                                class: 'layui-btn layui-btn-normal layui-btn-xs',
                                text: '扣款',
                                method: 'open',
                                url: 'system.account/fund_dec',
                                auth: 'fund_dec',
                            },
                            {
                                class: 'layui-btn layui-btn-normal layui-btn-xs',
                                text: '设置代理',
                                method: 'open',
                                url: 'system.account/agent',
                                auth: 'agent',
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
            ea.listen(function (data, filter) {
                if (filter == 'getPassword') {
                    $.get("getPassword", function (data,status){
                        $("#password").val(data.password)
                    })
                    return true;
                }
                
                if (filter == 'getSecret') {
                    $.get("getSecret", function (data,status){
                        $("#secret").val(data.secret)
                    })
                    return true;
                }
                
                if (filter == 'getGoogleSecret') {
                    $("#google_key").val('')
                    return true;
                    $.get("getGoogleSecret", function (data,status){
                        $("#google_key").val(data.secret)
                    })
                    return true;
                }
                return data;
            });
        },
        agent: function () {
            ea.listen({
                radio: function (data) {
                    $("input[name='profit']").val(
                        profit
                        //(data.value == 0) ? 0 : profit //profit 是 agent.html 中生成的一个 js 全局变量
                    )
                },
            })
        },
        fund_add: function () {
            ea.listen();
        },
        fund_dec: function () {
            ea.listen();
        },
    };
    return Controller;
});