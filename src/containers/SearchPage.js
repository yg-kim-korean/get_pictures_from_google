import React from 'react'
import { Helmet } from 'react-helmet'
import SearchFieldForSearch from '../components/SearchFieldForSearch'
import MiddleBarForSearch from '../components/MiddleBarForSearch'
import SearchResult from '../components/SearchResult'
import Footer from '../components/Footer'
function SearchPage() {
    return (
        <main className='SearchPage'>
            <Helmet>
                <title>Search Page</title>
                <meta
                    name='description'
                    content='검색 결과 페이지'
                />
            </Helmet>
            <section className='SearchPage__nav'>
                <SearchFieldForSearch />
            </section>
            <section>
                <MiddleBarForSearch />
            </section>
            <section className='SearchPage__lists'>
                <SearchResult />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}

export default SearchPage
