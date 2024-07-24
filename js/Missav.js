var rule = {
    title:'Missav',
    host:'https://missav.com',
    url:'/cn/fyclass/page/fypage',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'FC2本月&FC2本周&FC2今日&FC2最新&FC2收藏数&流出本月&流出收藏数',//静态分类名称拼接
    class_url:'fc2?sort=monthly_views&fc2?sort=weekly_views&fc2?sort=today_views&FC2&fc2?sort=saved&uncensored-leak?sort=monthly_views&uncensored-leak?sort=saved',//静态分类标识拼接
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.grid.grid-cols-2 div&&a;.lozad.w-full&&alt;.lozad.w-full&&data-src;.absolute.bottom-1&&Text;a&&href',
    二级:'*',
}
