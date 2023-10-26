import React from 'react'
import './style.css';

export default function Pagination() {
  return (
    <div className='pagination-container'>
        <div className='pagination-change-link-box'>
            <div className='pagination-change-link-icon-box'>
                <div className='left-light-icon'></div>
            </div>
        </div>
        <div className='pagination-divider'>{'\|'}</div>
        <div className='pagination-divider'>{'\|'}</div>
        <div className='pagination-change-link-box'>
            <div className='pagination-change-link-icon-box'>
                <div className='right-light-icon'></div>
            </div>
        </div>
    </div>
  )
}
