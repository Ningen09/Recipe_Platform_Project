import React from 'react'
import "./style.css"

export default function index() {
    

    const Membership_Withdrawal = () => {
//          render: 회원탈퇴 랜더                 //

        return(
            <div id='withdrawal-wrapper'>
                <div className='authentication-header'></div>
                <div className='withdrawl-title'>회원탈퇴</div>
                <div className='withdrawl-box'>
                    <div className='withdrawl-text'>{"회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요"}</div>
                    <div className='withdrawl-text'>{"사용하고 계신 아이디(이메일 대입)는 탈퇴 할 경우 복구가 불가능합니다."}</div>
                    <div className='withdrawl-text'>{"회원정보는 모두 삭제되며, 삭제된 데이터는 복구되지 않으니 신중하게 선택하시기 바랍니다. 삭제되는 내용을 확인하시고 필요한 데이터는 미리 백업해주세요"}</div>
                    <div className='withdrawl-text'>{"가입 정보를 변경하고 싶으시다면 회원정보수정 에서 변경할 수 있습니다."}</div>
                    <div className='withdrawl-text'>{"게시물은 탈퇴 후 삭제되지 않습니다."}</div>
                    <div className='withdrawl-text'>{"작성하신 게시물 및 댓글은 탈퇴 시 자동으로 삭제되지 않고 그대로 남아있습니다. 삭제를 원하시는 게시글이 있다면 반드시 탈퇴전 비공개 처리를 하거나 삭제하시기 바랍니다."}</div>
                    <div className='withdrawl-text'>{"안내사항을 모두 확인하셨다면 아래 버튼을 눌러주세요."}</div>
                    <div className='withdrawl-button'>{"회원탈퇴"}</div>
                </div>
            </div>            
        )

    }


    const PasswordChange = () => {

//          render: 패스워드 변경 랜더             //
        return(
        <div id='user-update-wrapper'>
            <div className='authentication-header'></div>
                <div className='update-title'>비밀번호변경</div>
                <div className='password-change-box'>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <div className='passowrd-change-tip'>비밀번호 안정성</div>
                    <div className='update-button'></div>
                </div>
        </div>
        
        )
    }

    return (
    <>
    <PasswordChange />
    <Membership_Withdrawal />
    </>
  )

}