import axios from 'axios'
import cheerio from 'cheerio'
export async function get_data_list(search_word) {
    //https://cors-anywhere.herokuapp.com/ 추가로 cors 에러 삭제
    const html = await axios.get(`https://cors-anywhere.herokuapp.com/https://search.naver.com/search.naver?&where=news&query=${search_word}`);
    const $ = await cheerio.load(html.data)
    const data = []
    $('.news_wrap.api_ani_send').each((i,e) => {
        data.push({
                index : i,
                img : $(e).find('img.thumb').attr('src'),
                title : $(e).find('a.news_tit').attr('title'),
                link : $(e).find('a.news_tit').attr('href')
                //      title: $(elem).find('h2.entry-title').text(),
        })

    })
    return data
}

export async function get_data_Image_list(search_word) {
    const html = await axios.get(`https://search.naver.com/search.naver?where=image&sm=tab_jum&query=${search_word}`);
    const $ = await cheerio.load(html.data)
    const data = []
    $('.photo_bx api_ani_send _photoBox').each(function(i,e){
        if (i<=3){
            data.push({
                img : $(e).find('img._image _listImage').attr('src'),
                title : $(e).find('img._image _listImage').attr('alt'),

                // link : $(e).find('a.news_tit').attr('href')
                //      title: $(elem).find('h2.entry-title').text(),
            })
        }
    })


}
