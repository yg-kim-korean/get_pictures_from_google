import axios from 'axios'
import cheerio from 'cheerio'

// export async function get_data_imagelist(search_word) {
//     const data = []
//     // for (let x = 1; x < 20; x+=10){
//         //https://cors-anywhere.herokuapp.com/ 추가로 cors 에러 삭제
//         // const html = await axios.get(`https://cors-anywhere.herokuapp.com/https://search.naver.com/search.naver?&where=news&query=${search_word}&sm=tab_pge&sort=0&photo=0&field=0&reporter_article=&pd=0&ds=&de=&docid=&nso=so:r,p:all,a:all&mynews=0&cluster_rank=0&start=${x}&refresh_start=0`);
//         const html = await axios.get(`https://cors-anywhere.herokuapp.com/https://search.naver.com/search.naver?&where=news&query=${search_word}`);
//         const $ = await cheerio.load(html.data)
//         $('.news_wrap.api_ani_send').each((i,e) => {
//             data.push({
//                     // index : i+x,
//                     index : i,
//                     img : $(e).find('img.thumb').attr('src'),
//                     title : $(e).find('a.news_tit').attr('title'),
//                     link : $(e).find('a.news_tit').attr('href')
//                     //      title: $(elem).find('h2.entry-title').text(),
//             })

//         })
        
//     // }
//     return data
// }

export async function get_data_list(search_word) {
    const data = []
    for (let x = 1; x < 20; x+=10){
        //https://cors-anywhere.herokuapp.com/ 추가로 cors 에러 삭제
        const html = await axios.get(`https://cors-anywhere.herokuapp.com/https://search.naver.com/search.naver?&where=news&query=${search_word}`);
        const $ = await cheerio.load(html.data)
        $('.news_wrap.api_ani_send').each((i,e) => {
            data.push({
                    index : i+x,
                    img : $(e).find('img.thumb').attr('src'),
                    title : $(e).find('a.news_tit').attr('title'),
                    link : $(e).find('a.news_tit').attr('href'),
                    text: $(e).find('a.api_txt_lines.dsc_txt_wrap').text()
                    //      title: $(elem).find('h2.entry-title').text(),
            })

        })
    }
    return data
}

export async function get_image_list(search_word) {
    const IdKey = 'upDSQXUZEo0WIKF0P34h'
    const SecretKey ='CcHRc5JmM0'
    //https://cors-anywhere.herokuapp.com/ 추가로 cors 에러 삭제
    //네이버 API사용
    const {data:{items}} = 
            await axios.get(`https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/image.json`,{
                                params:{
                                query:search_word,
                                display:40
                                },
                                headers:{
                                'X-Naver-Client-Id':IdKey,
                                'X-Naver-Client-Secret' : SecretKey
                                }
                            });
    return items
}