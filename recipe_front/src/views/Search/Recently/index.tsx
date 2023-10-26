import React from 'react'
import './style.css';

export default function Recently() {
  return (
    <div className='recently-board-item-list-main-box'>
      <div className='recently-board-item-list-box-title'>{'최근 본 게시물'}</div>
      <div className='up-button'></div>
      <div className='recently-board-item-list-sub-box'>
        <div className='user-recently-board1'></div>
        <div className='user-recently-board2'></div>
        <div className='user-recently-board3'></div>
        <div className='user-recently-board4'></div>
      </div>
      <div className='down-button'></div>
    </div>
  )
}
