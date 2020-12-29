// const cheerio = require('cheerio');
// const axios = require('axios');

// axios.request('https://search.naver.com/search.naver?&where=news&query=%EB%8D%B8%ED%94%BC%EC%97%90%EB%A1%9C')
//     .then((response)=>{        
//         const $ = cheerio.load(response.data);
//         const da = []
//         $('.news_wrap.api_ani_send').each(function(i,data){
//             // const y = $(data).find('a.news_tit').attr('title');
//             if (i<3){
//             da.push({
//                 img : $(data).find('img.thumb.api_get').attr('src'),
//                 title : $(data).find('a.news_tit').attr('title'),
//                 link : $(data).find('a.news_tit').attr('href')
//             })
//         }
              
//         })
//         console.log(da);   
//     })
//     .catch(function(e){
//         console.log(e);
//     })

// const cheerio = require('cheerio');
// const axios = require('axios');
// axios.get('https://www.google.com/search?newwindow=1&tbm=isch&sxsrf=ALeKk02ArtsYlTH2TIydhODlm254Ms1Hxg%3A1609165126104&source=hp&biw=1920&bih=937&ei=RunpX_36A8j_wAOcxrDYAw&q=del+piero&oq=del+pi&gs_lcp=CgNpbWcQAxgAMgQIIxAnMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgcIIxDqAhAnUOMfWI08YNFFaARwAHgAgAGIAogB9gySAQUwLjUuNJgBAKABAaoBC2d3cy13aXotaW1nsAEK&sclient=img')
//     .then((response)=>{
//         const $ = cheerio.load(response.data);
//         const da = []
//         console.log(response.data);
//         $('.img_cont.hoff').each(function(i,data){
//             // console.log(data);
//             // const y = $(data).find('a.news_tit').attr('title');
//             da.push({
//                 imgSrc:$(data).find('img.mimg').attr('src'),
//                 title : $(data).find('img.mimg').attr('alt')
//             })
            
//             // console.log(da);     
//         })
//     })
//     .catch(function(e){
//         console.log(e);
//     })

