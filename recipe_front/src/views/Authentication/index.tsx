import React from 'react'
import "./style.css"

export default function index() {

    const SignIn = () => {

        //          render: 로그인 화면 랜더                 //
        
                return(
                    <div id='sign-in-wrapper'>
                        <div className='authentication-header'></div>
                        <div className='sign-in-title'>{"로그인"}</div>
                        <div className='sign-in-box'>
                            <input type="text" />
                            <input type="text" />
                            <div className='input-button'>{"로그인"}</div>
                        </div>
                        <div className='input-button'>{"이메일 / 비밀번호 찾기"}</div>
                        <div className='input-button'>{"회원가입"}</div>
                    </div>            
                )
        
            }
    
    const SignUp = () => {

        //         render: 회원가입 화면 랜더               //

        return(
            <div id='sign-in-wrapper'>
                <div className='authentication-header'></div>
                <div className='sign-in-title'>{"로그인"}</div>
                <div className='sign-in-box'>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <div className='password-tip'>{"*영문/숫자/특수문자 중 2개 이상 조합하세요(8-20자)"}</div>
                    <input type="text" />
                    <div className='password-tip'>{"확인을 위해 새 비밀번호를 다시 입력해 주세요."}</div>
                    <input type="text" />
                    <input type="text" />
                    <div className='agreed-check'>{"전체동의"}</div>
                    <div className='agreed-text'>{"이용약관 및 개인정보 수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다."}</div>
                    <div className='agreed-check'>{"이용약관 동의(필수)"}</div>
                    <div className=''></div>
                    <div className='agreed-check'>{"개인정보 수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다."}</div>
                    <div className='agreed-check'>{"개인정보 처리를 위한 동의(선택)"}</div>
                    <div className='input-button'>{"가입하기"}</div>

                </div>
            </div>
        )
    }


  return (
    <>
    <SignIn />
    <SignUp />
    </>
  )
}
