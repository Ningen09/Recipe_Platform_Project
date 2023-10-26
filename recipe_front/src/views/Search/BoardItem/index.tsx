import React from 'react'
import './style.css';

export default function BoardItem() {


  //          component: 리스트 아이템 컴포넌트          //
  const ListItme = () => {

    return (
        <div className='search-list-item1'>
          <div className='search-list-item-image-box1'>
            <div className='search-list-item-image1'></div>
          </div>
          <div className='search-list-itme-sub-box1'>
            <div className='search-list-item-title-box1'>
              <div className='search-list-item-title1'>{'라면 만드는 법'}</div>
            </div>
            <div className='search-list-item-middle-box1'>
              <div className='search-list-item-user1'>
                <div className='search-list-itme-userimage1'></div>
                <div className='search-list-itme-nickname1'>{'최끼니꾸'}</div>
              </div>
              <div className='search-list-item-view-favorit-count-box1'>
                <div className='search-list-item-view-count-box1'>
                  <div className='search-list-item-view-count-text1'>{'조회수 200'}</div>
                </div>
                <div className='search-list-item-favorit-box1'>
                  <div className='search-list-item-favorit-image1'></div>
                  <div className='search-list-item-favorit-count1'>{'200'}</div> 
                </div>
              </div>
            </div>
            <div className='search-list-itme-star-rating-box1'>
              <div className='search-list-item-star-rating-image-a1'></div>
              <div className='search-list-item-star-rating-image-b1'></div>
              <div className='search-list-item-star-rating-image-c1'></div>
              <div className='search-list-item-star-rating-image-d1'></div>
              <div className='search-list-item-star-rating-image-e1'></div>
              <div className='search-list-item-star-rating-count-text1'>{'(2)'}</div>
            </div>
          </div>
        </div>
    )
  }
 //          render: 검색 페이지 렌더링          //
 return (
  <div id='search-list-item-line-box'>
    <ListItme />
    <ListItme />
    <ListItme />
    <ListItme />
    <ListItme />
    <ListItme />
    <ListItme />
    <ListItme />
    <ListItme />
    <ListItme />
    <ListItme />
    <ListItme />
    <ListItme />
    <ListItme />
    <ListItme />
    <ListItme />
  </div>
)
}
