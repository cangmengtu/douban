//接口 api
//固定头部
const BaseUrl='https://api.douban.com/v2/';

const DoubanApi={
    /* 
        图书搜索
        image:图书缩略图
        title:图书名字
        punlish:出版社
        author:作者
        price:价格
        pages:页数
    */
    book_search:`${BaseUrl}book/search`,
    /* 
        图书详情
        image:图书缩略图
        title:图书名字
        punlish:出版社
        author intro:作者简介
        price:价格
        pages:页数
        summary:图书简介
    */
    book_detail_id:`${BaseUrl}book/`,
    /*
        电影搜索
        images.medium 电影图像
        title 电影名称
        casts 电影演员
        tating.average 电影评分
        year 上映时间
        genres 电影标签
        mobile_url 电影详情URL
	*/
    movie_search:`${BaseUrl}movie/search`
}

export default DoubanApi;
