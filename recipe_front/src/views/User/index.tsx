import React from 'react';

//          component: 유저 페이지          //
export default function User() {

    //          component: 유저 정보 컴포넌트          //
    const UserInformation = () => {

        //          render: 유저 정보 컴포넌트 렌더링          //
        return (
            <div id='user-information'></div>
        )
    }
    return (
        <>
            <UserInformation />
        </>
    )

}