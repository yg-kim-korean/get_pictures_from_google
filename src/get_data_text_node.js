// const cheerio = require('cheerio');
// const axios = require('axios');

// axios.request('https://search.naver.com/search.naver?&where=news&query=%EB%8D%B8%ED%94%BC%EC%97%90%EB%A1%9C&sm=tab_tmr&frm=mr&nso=so:r,p:all,a:all&sort=0')
//     .then((response)=>{        
//         const $ = cheerio.load(response.data);
//         const da = []
//         $('.news_wrap.api_ani_send').each(function(i,data){
//             // const y = $(data).find('a.news_tit').attr('title');
//             da.push({
//                 img : $(data).find('img.thumb.api_get').attr('src'),
//                 title : $(data).find('a.news_tit').attr('title'),
//                 link : $(data).find('a.news_tit').attr('href')
//             })
            
//             console.log(da);     
//         })
//     })
//     .catch(function(e){
//         console.log(e);
//     })

const cheerio = require('cheerio');
const axios = require('axios');
axios.get('https://www.bing.com/images/search?q=%EB%8D%B8%ED%94%BC%EC%97%90%EB%A1%9C&form=QBLH&sp=-1&pq=%EB%8D%B8%ED%94%BC%EC%97%90%EB%A1%9C&sc=1-4&qs=n&cvid=8554A7E4B7E142258ECDA6706C082FD2&first=1&tsc=ImageBasicHover')
    .then((response)=>{
        const $ = cheerio.load(response.data);
        const da = []
        console.log(response.data);
        $('.img_cont.hoff').each(function(i,data){
            // console.log(data);
            // const y = $(data).find('a.news_tit').attr('title');
            da.push({
                imgSrc:$(data).find('img.mimg').attr('src'),
                title : $(data).find('img.mimg').attr('alt')
            })
            
            // console.log(da);     
        })
    })
    .catch(function(e){
        console.log(e);
    })
