import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

export default function SearchBottomTop() {
  
  const[section, setSection] = useState<string>();

    return(
        <div id='search-board-top-box'>
          <div className='search-board-top-title'>{'총 N개의 레시피가 있습니다' }</div>
          <div className='search-board-top-type-box'>
            <div className='search-board-top-type-latest-box'>
              <div className={section === '최신순' ? 'search-board-top-type-section' : 'search-board-top-type-latest-title'} onClick={() => setSection('최신순')}>{'최신순'}</div>
            </div>
            <div className='search-board-top-type-favorite-box'>
            <div className={section === '좋아요순' ? 'search-board-top-type-section' : 'search-board-top-type-favorite-title'}onClick={() => setSection('좋아요순')}>{'좋아요순'}</div>
            </div>
            <div className='search-board-top-type-view-box'>
            <div className={section ==='조회순' ? 'search-board-top-type-section' : 'search-board-top-type-view-title'}onClick={() => setSection('조회순')}>{'조회순'}</div>
            </div>
          </div>
        </div>
    )
  }
 