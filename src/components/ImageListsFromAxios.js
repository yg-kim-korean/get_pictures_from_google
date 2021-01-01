import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-awesome-modal';
import { getSearchList } from '../module/searchlists';

function ImageLists() {
    
    const {data, loading, error} = useSelector(state=>state.searchlists.searchlists)
    const searchword = useSelector(state => state.searchword.searchword);
    const [selectedSrc,setSelectedSrc] = useState('');
    const [selectedTitle,setSelectedTitle] = useState('');
    const [visible,setVisible]  = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (searchword){
    
        dispatch(getSearchList(searchword))
        }
    }, [dispatch,searchword])
    const openModal = (select) => {
        setSelectedSrc(select.img)
        setSelectedTitle(select.title)
       setVisible(true);
    }
    const closeModal = () =>{

        setVisible(false);
    }
    if (loading&&!data) return <div className="loading">로딩 중...</div>
    if (error) return <div className="loading">에러 발생</div>
    if (!data ) return <div className="loading">검색어를 입력하세요</div>;
    return (

        <div className="ImageListsFromAxios">
                {data.map(item => (
                    
                    <div className="ImageListsFromAxios__div" key={item.index} onClick={() => {openModal(item)}}>
                        <img className="ImageListsFromAxios__div__img" src={item.img} alt={item.title}/>
                        <div className="ImageListsFromAxios__div__div"></div>
                    </div>

                ))}
                <Modal className="ImageListsFromAxios__modal" 
                width="450" height="350"
                visible={visible} effect="fadeInUp" onClickAway={() => closeModal()}>
                    <div className="ImageListsFromAxios__modal__div">
                        <img className="ImageListsFromAxios__modal__div__img" src={selectedSrc} alt={selectedTitle} />
                        <div className="ImageListsFromAxios__modal__div__div">{selectedTitle}</div>
                        
                    </div>
                </Modal>
        </div>
    )
}



export default ImageLists
