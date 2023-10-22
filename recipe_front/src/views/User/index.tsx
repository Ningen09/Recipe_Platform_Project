import React from 'react'
import "./style.css"

export default function index() {

    const UserInfo = () => {


        //                  render: 사용자 정보 컴포넌트 랜더링                    //
        return(
            <div id='user-update-wrapper'>
                <div className='Authentication-header'></div>
                <div className='update-title'>{"회원정보수정"}</div>
                <div className='update-profile-title'>{"내프로필"}</div>
                <div className='update-profile-image-container'>
                    <div className='update-tip'>{"프로필사진을수정할수있습니다"}</div>
                    <div className='profile-update-text'></div>
                    <div className='update-profile-image'>
                        <div className='user-info-profile-icon-box'>
                            <div className='image-box-white-icon'></div>
                        </div>
                    </div>
                        <div className='icon-button-update'>{"사진변경"}</div>
                        <div className='icon-button-delete'>{"사진삭제"}</div>
                    <div className='update-nickname-password-container'>
                        <div className='update-nickname-password-title'></div>
                        <div className='update-tip'>{"닉네임과 비밀번호를 변경 할 수 있습니다"}</div>
                        <div className='nickname-update-text'></div>
                        <input type="text" />
                        <div className='icon-button-update'>{"수정"}</div>
                        <div className='password-update-text'></div>
                        <div className='icon-button-update'>{"수정"}</div>
                    </div>
                    <div className='withdrawal-container'>
                        <div className='withdrawal-title'></div>
                        <div className='update-tip'>{"회원탈퇴 페이지로 이동합니다."}</div>
                        <div className='withdrawl-text'></div>
                        <div className='icon-button-update'>{"수정"}</div>

                    </div>
                    
                </div>
            </div>
        );

    }

    return (
        <>
          <UserInfo />
        </>
      )
}
