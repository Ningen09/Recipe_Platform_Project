import React, { useState, useEffect } from 'react'
import BoardItem from './BoardItem'
import Catagory from './Catagory'
import SearchBottomTop from './SearchBottomTop'
import './style.css';
import Pagination from 'components/Pagination';
import { useNavigate } from 'react-router-dom';
import { popularWordListMock } from 'mocks';
import Recently from './Recently';
import GetPopulerListResponseDto from 'apis/dto/response/get-populer-list-respons.dto';
import ResponseDto from 'apis/dto/response';
import { SEARCH_PATH } from 'constant';



export default function Search() {
  //          state: 인기 검색어 리스트 상태          //
  const [popularWordList, setPopularWordList] = useState<string[]>([]);
  //          function: 네비게이트 함수          //
  const navigater = useNavigate();

//          function: get popular list response 처리 함수          //
const getPopularListResponse = (responseBody: GetPopulerListResponseDto | ResponseDto) =>{
  const{code}= responseBody;
  if(code === 'DBE') alert ('데이터베이스 오류입니다')
  if(code !== 'SU') return;

  const{ popularWordList } = responseBody as GetPopulerListResponseDto;
  setPopularWordList(popularWordList);
}

//              event handler: 인기 검색어 뱃지 클릭 이벤트 처리         //
const onPopulerWordBadgeClickHandler = (word: string) => {
  navigater(SEARCH_PATH(word));
}

  useEffect(() => {
    setPopularWordList(popularWordListMock);
  }, []);

  return (
    <div id='search-wrapper'>
      <Catagory/>
      <div className='search-middle'>
        <div>
          <SearchBottomTop />
          <BoardItem />
        </div>
        <div>
          <div className='search-bottom-populer-word-box'>
            <div className='search-bottom-populer-word-card'>
              <div className='search-bottom-popular-card-box'>
                <div className='search-bottom-popular-card-title'>{'인기 검색어'}</div>
                <div className='search-bottom-popular-card-contents'>
                  {popularWordList.map(word => <div className='word-badge' onClick={() => onPopulerWordBadgeClickHandler(word)}>{word}</div>)}
                </div>
              </div>
            </div>
          </div>
        <Recently/>
        </div>
      </div>
    </div>
  )
}
