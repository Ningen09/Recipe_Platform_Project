import React, { useState } from "react";
import "./style.css";
import { ChefInfoItem } from "types";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

//          interface: Chef 리스트 아이템 컴포넌트 Props         //
interface Props {
  chefItem: ChefInfoItem;
}

//          component: Chef 리스트 아이템 컴포넌트          //
export default function ChefItem({ chefItem }: Props) {
  //          state: Propertites          //
  const { email, profileImage, nickname } = chefItem;
  //          state: 구독 상태          //
  const [ subscription, setSubscription] = useState<boolean>(false);
  //          state: 쿠키 상태          //
  const [cookies, setCookies] = useCookies();

  //          function: 네비게이트 함수         //
  const navigator = useNavigate();

  //          event handler: 구독 버튼 클릭 이벤트 처리 함수          //
  const onSubscriptionClickHandler = () => {
    if(!cookies.email){
      alert('로그인이 필요합니다')
      return;
    }
    setSubscription(!subscription);
  }

  //          event handler: Chef Click 이벤트 처리 함수          //
  const onChefClickHandler = () => {
    navigator(`/user/${email}`);
  };
  //          render: Chef 리스트 아이템 컴포넌트 렌더링          //
  return (
    <div className="chef-list-center-bottom-info-box">
      <div
        className="chef-list-center-bottom-profile-image-box"
        onClick={onChefClickHandler}
      >
        <div
          className="chef-list-center-bottom-profile-image"
          style={{ backgroundImage: `url(${profileImage})` }}
        ></div>
        <div className="chef-list-center-bottom-nickname">{nickname}</div>
      </div>
      <div onClick={onSubscriptionClickHandler}>
        {subscription ? (
        <div className="chef-list-center-bottom-subscription-on">{"구독중"}</div>
        ):(
        <div className="chef-list-center-bottom-subscription">{"구독하기"}</div>
        )}
      </div>
    </div>
  );
}
