import { ChangeEvent, KeyboardEvent, useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { MAIN_PATH, SIGN_IN_PATH, SIGN_UP_PATH } from "constant";

//          component: 헤더 컴포넌트          //
export default function Header() {
  //          function: 네비게이트 함수          //
  const navigator = useNavigate();

  //          event handler: 메인 로고 및 네비 메인 버튼 클릭 이벤트 처리         //
  const onMainClickHandler = () => {
    navigator(MAIN_PATH);
  };

  //          event handler: 검색 버튼 클릭 이벤트 처리         //
  const onSearchButtonClickHandler = () => {
    navigator("/search");
  };

  //          event handler: 검색 인풋 Enter key down 이벤트 처리          //
  const onSearchEnterKeyDownHandler = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key !== "Enter") return;
    // if (!searchValue) return;
    navigator("/search");
  };

  //          component: 로그인 상태에 따라 로그인 혹은 마이페이지 버튼 컴포넌트          //
  const LoginMyPage = () => {
    //          event handler: 로그인 버튼 클릭 이벤트 처리         //
    const onSignInButtonClickHandler = () => {
      navigator(SIGN_IN_PATH);
    };
    //          event handler: 회원가입 버튼 클릭 이벤트 처리         //
    const onSignUpButtonClickHandler = () => {
      navigator(SIGN_UP_PATH);
    };
    //          event handler: 마이페이지 버튼 클릭 이벤트 처리         //
    const onMyPageButtonClickHandler = () => {
      navigator("/user");
      // TODO: 경로수정
    };
    //          event handler: 로그아웃 버튼 클릭 이벤트 처리         //
    const onLogoutButtonClickHandler = () => {
      navigator(MAIN_PATH);
    };

    //          render: 로그인 회원가입 버튼 컴포넌트 렌더링 (로그인 상태가 아닐 때)         //
    return (
      <>
        <div className="header-top-right-sign-in" onClick={onSignInButtonClickHandler}>{"로그인"}</div>
        <div className="header-top-right-divider">{"|"}</div>
        <div className="header-top-right-sign-up" onClick={onSignUpButtonClickHandler}>{"회원가입"}</div>
      </>
    );
    //          render: 마이페이지 로그아웃 버튼 컴포넌트 렌더링 (로그인 상태일 때)         //
    return (
      <>
        <div className="header-top-right-sign-in" onClick={onMyPageButtonClickHandler}>{"마이페이지"}</div>
        <div className="header-top-right-divider">{"|"}</div>
        <div className="header-top-right-sign-up" onClick={onLogoutButtonClickHandler}>{"로그아웃"}</div>
      </>
    );  
  };

  //          event handler: 레시피 등록 버튼 클릭 이벤트 처리         //
  const onUploadButtonClickHandler = () => {
    navigator("/board/write");
  };

  //          render: 헤더 컴포넌트 렌더링         //
  return (
    <div id="header">
      <div className="header-top">
        <div className="header-top-box">
          <div className="header-top-left-box">
            <div className="header-logo-box" onClick={onMainClickHandler}>
              <div className="header-logo"></div>
            </div>
          </div>
          <div className="header-top-center-box">
            <div className="header-top-center-search">
              <input
                className="header-top-center-search-bar"
                type="text"
                spellCheck="false"
                onKeyDown={onSearchEnterKeyDownHandler}
              />
              <div className="icon-button" onClick={onSearchButtonClickHandler}>
                <div className="search-icon"></div>
              </div>
            </div>
          </div>
          <div className="header-top-right-box">
            <LoginMyPage />
            <div className="header-top-right-upload-button-box">
              <div
                className="header-top-right-upload-button"
                onClick={onUploadButtonClickHandler}
              >
                {"레시피 등록"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="header-bottom">
        <div className="header-navi-bar">
          <div className="navi-menu-box">
            <div className="navi-menu" onClick={onMainClickHandler}>{"메인"}</div>
          </div>
          <div className="navi-menu-box">
            <div className="navi-menu">{"분류"}</div>
          </div>
          <div className="navi-menu-box">
            <div className="navi-menu">{"랭킹"}</div>
          </div>
          <div className="navi-menu-box">
            <div className="navi-menu">{"쉐프"}</div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
