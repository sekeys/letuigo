const team=[
    {
        title:"团队管理",
        children:[
            {
                id:"/m/team/information",
                title:"基本资料",
                href:"/m/team/information"
            },
            {
                id:"/m/team/members",
                title:"成员管理",
                href:"/m/team/members"
            },
        ]
    },
]

const promotion=[
    {
        id:"/m/promotion",
        title:"商品推广",
        children:[
            {
                id:"/m/promotion/supersearch",
                title:"超级搜索",
                href:"/m/promotion/supersearch"
            },
            {
                id:"/m/promotion/collect",
                title:"我的收藏",
                href:"/m/promotion/collect"
            },
            {
                id:"/m/promotion/subscribe",
                title:"我的订阅",
                href:"/m/promotion/subscribe",
                isShowBadge:true,
                reqBadgeUrl:"",
            },
        ]

    },
];

const provider=[
    {
        
        id:"/m/provider",
        title:"商品管理",
        children:[
            {
                id:"/m/provider/product/list",
                title:"商品列表",
                href:"/m/provider/product/list"
            }
        ]
    },
    {
        id:"/m/provider/promotion",
        title:"推广管理",
        children:[
            {
                id:"/m/provider/promotion/list",
                title:"推广列表",
                href:"/m/provider/promotion/list"
            }
        ]
    },
    {
        id:"/m/provider/orders",
        title:"订单管理",
        children:[
            {
                id:"/m/provider/orders/done",
                title:"已完成订单",
                href:"/m/provider/product/done"
            },
            {
                id:"/m/provider/orders/send",
                title:"已发货订单",
                href:"/m/provider/product/send"
            },
            {
                id:"/m/provider/product/unsend",
                title:"未发货订单",
                href:"/m/provider/product/unsend"
            },
            {
                id:"/m/provider/product/refund",
                title:"退款订单",
                href:"/m/provider/product/refund"
            }
        ]
    }
];


const report=[
    {
        id:"/m/report",
        title:"整体报表",
        href:"/m/report",
    },
    {
        id:"/m/report/details",
        title:"订单明细报表",
        href:"/m/report/details",
    },
    {
        id:"/m/report/revenue",
        title:"收益报表",
        href:"/m/report/revenue",
    },
    {
        id:"/m/report/sever",
        title:"服务费报表",
        href:"/m/report/sever",
    },
];


const account=[
    {
        id:"/m/account",
        title:"账号管理",
        children:[
            {
                id:"/m/account/information",
                title:"账号信息",
                href:"/m/account/information"
            },
            {
                id:"/m/account/certify",
                title:"身份认证",
                href:"/m/account/certify"
            },
            {
                id:"/m/account/provider",
                title:"供货商认证",
                href:"/m/account/provider"
            }
        ]
    },
    {
        id:"/m/account/talent",
        title:"推广达人",
        children:[
            {
                id:"/m/account/talent/media",
                title:"媒体账号",
                href:"/m/account/talent/media"
            },
            {
                id:"/m/account/video",
                title:"视频集",
                href:"/m/account/video"
            }
        ]
    },
];


export default function(category){
    if(category =="promotion"){
        return promotion;
    }
    else if(category == "team"){
        return team;
    }
    else if(category == "provider"){
        return provider;
    }
    else if(category == "report"){
        return report;
    }
    else if(category == "account"){
        return account;
    }
};