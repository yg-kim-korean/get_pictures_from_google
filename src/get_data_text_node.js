const cheerio = require('cheerio');
const axios = require('axios');
axios.get('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EB%8D%B8%ED%94%BC%EC%97%90%EB%A1%9C')
.then((response)=>{
    const $ = cheerio.load(response.data);
    $('.news_tit').each(function(i,data){
        
        const y = $(data).find('a.news_tit').attr('title');
        console.log(y);     
    }).catch(function(e){
        console.log(e);
    })
})

// d.push({img : $(e).find('img.thumb').attr('stc'),
// title : $(e).find('a.news_tit').attr('title'),
// link : $(e).find('a.news_tit').attr('href')})