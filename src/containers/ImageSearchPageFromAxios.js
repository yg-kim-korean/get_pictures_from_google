import React from 'react'
import { Helmet } from 'react-helmet'
import SearchFieldForSearch from '../components/SearchFieldForSearch'
import ImageListsFromAxios from '../components/ImageListsFromAxios'
import MiddleBarForSearch from '../components/MiddleBarForSearch'
import Footer from '../components/Footer'
function ImageSearchPageFromAxios() {
    return (
        <main className='home'>
            <Helmet>
                <title>Image Search Page</title>
                <meta
                    name='description'
                    content='이미지 페이지'
                />
            </Helmet>
            <section className='SearchPage__nav'>
                <SearchFieldForSearch />
            </section>
            <section>
                <MiddleBarForSearch />
            </section>
            <section className='SearchPage__lists'>
                <ImageListsFromAxios />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}

export default ImageSearchPageFromAxios
