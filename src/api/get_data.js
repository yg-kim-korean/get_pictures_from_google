import React from 'react'
import axios from 'axios'
import cheerio from 'cheerio'
export async function get_data_list(search_word) {
    const html = await axios.get(`https://search.naver.com/search.naver?where=nexearch&sm=tab_jum&query=${search_word}`);
    const $ = await cheerio.load(html.data)
    const data = []
    $('.news_tit').each((i,e) => {
        if (i<=3){
            data.push({
                img : $(e).find('img.thumb').attr('src'),
                title : $(e).find('a.news_tit').attr('title'),
                link : $(e).find('a.news_tit').attr('href')
                //      title: $(elem).find('h2.entry-title').text(),
            })
        }
    })
    return data
}

export async function get_data_Image_list(search_word) {
    const html = await axios.get(`https://search.naver.com/search.naver?where=image&sm=tab_jum&query=${search_word}`);
    const $ = await cheerio.load(html.data)
    const data = []
    $('.news_tit').each(function(i,e){

    })

}

