import React from 'react'
import { Helmet } from 'react-helmet'
import SearchFieldForSearch from '../components/SearchFieldForSearch'
import ImageLists from '../components/ImageLists'
import MiddleBarForSearch from '../components/MiddleBarForSearch'
function ImageSearchPage() {
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
                <ImageLists />
            </section>
        </main>
    )
}

export default ImageSearchPage
