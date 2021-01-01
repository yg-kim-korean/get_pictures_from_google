import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImageLists } from '../module/imagelists';
import Modal from 'react-awesome-modal';


function ImageLists() {
    const {data, loading, error} = useSelector(state=>state.imagelists.imagelists);
    const searchword = useSelector(state => state.searchword.searchword);
    const [selectedSrc,setSelectedSrc] = useState('');
    const [selectedTitle,setSelectedTitle] = useState('');
    const [visible,setVisible]  = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (searchword){
        dispatch(getImageLists(searchword))
        }
    }, [dispatch,searchword])
    const openModal = (select) => {
        setSelectedSrc(select.link)
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

        <div className="ImageLists">
                {data.map((item,index) => (
                    index ? (
                    <div className="ImageLists__div" key={index} onClick={() => {openModal(item)}}>
                        <img className="ImageLists__div__img" src={item.link} alt={item.title}/>
                        <div className="ImageLists__div__div" src={item.link}></div>
                    </div>
                    ) :null
                ))}
                <Modal className="ImageLists__modal" 
                    width="400"
                    height="350" 
                    visible={visible} 
                    effect="fadeInUp" 
                    onClickAway={() => closeModal()}>
                    <div className="ImageLists__modal__div">
                        <img className="ImageLists__modal__div__img" src={selectedSrc} alt={selectedTitle} />
                        <div className="ImageLists__modal__div__div">{selectedTitle}</div>
                        
                    </div>
                </Modal>
        </div>
    )
}



export default ImageLists
