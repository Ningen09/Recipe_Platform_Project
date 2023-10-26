import { ChangeEvent, KeyboardEvent, useState, useEffect } from "react";
import "./style.css";
<<<<<<< HEAD
import { useLocation, useNavigate } from "react-router-dom";
import { CHEF_LIST_PATH, MAIN_PATH, RANKING_PATH, RECIPE_LIST_PATH, RECIPE_WRITE_PATH, SIGN_IN_PATH, SIGN_UP_PATH, USER_PATH } from "constant";
import { useCookies } from "react-cookie";
import { useUserStore } from "stores";
=======
import { useNavigate } from "react-router-dom";
import { MAIN_PATH, SIGN_IN_PATH, SIGN_UP_PATH } from "constant";
>>>>>>> f3be6d543e5fa74fe18303d04847d6b929fb578f

//          component: 헤더 컴포넌트          //
export default function Header() {
  //          function: 네비게이트 함수          //
  const navigator = useNavigate();

<<<<<<< HEAD
  //            state: path name 상태         //
  const {pathname} = useLocation();
  //            state: 쿠키 상태          //
  const [cookies, setCookies] = useCookies();
  //            state: 로그인 유저 상태         //
  const {user, setUser} = useUserStore();
  //            state: 검색 값 상태         //
  const [searchValue, setSearchValue] = useState<string>("");

  //          variable: 메인 페이지 논리 변수         //
  const isMainPage = pathname === MAIN_PATH;
  //          variable: 분류 페이지 논리 변수         //
  const isRecipeListPage = pathname.startsWith(RECIPE_LIST_PATH(''));
  //          variable: 랭킹 페이지 논리 변수         //
  const isRankingPage = pathname === RANKING_PATH;
  //          variable: 셰프 페이지 논리 변수         //
  const isChefPage = pathname.startsWith(CHEF_LIST_PATH);
  

  //          event handler: 검색 값 변경 이벤트 처리           //
  const onSearchValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchValue(searchValue);
  };

  //          event handler: 메인 로고 클릭 이벤트 처리         //
  const onMainClickHandler = () => {
    navigator(MAIN_PATH);
  };



  //          event handler: 검색 버튼 클릭 이벤트 처리         //
  const onSearchButtonClickHandler = () => {
    navigator(RECIPE_LIST_PATH(searchValue));
    if (!searchValue) return;
    setSearchValue("");
=======
  //          event handler: 메인 로고 및 네비 메인 버튼 클릭 이벤트 처리         //
  const onMainClickHandler = () => {
    navigator(MAIN_PATH);
  };

  //          event handler: 검색 버튼 클릭 이벤트 처리         //
  const onSearchButtonClickHandler = () => {
    navigator("/search");
>>>>>>> f3be6d543e5fa74fe18303d04847d6b929fb578f
  };

  //          event handler: 검색 인풋 Enter key down 이벤트 처리          //
  const onSearchEnterKeyDownHandler = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key !== "Enter") return;
<<<<<<< HEAD
    if (!searchValue) return;
    navigator(RECIPE_LIST_PATH(searchValue));
    setSearchValue("");
=======
    // if (!searchValue) return;
    navigator("/search");
>>>>>>> f3be6d543e5fa74fe18303d04847d6b929fb578f
  };

  //          component: 로그인 상태에 따라 로그인 혹은 마이페이지 버튼 컴포넌트          //
  const LoginMyPage = () => {
    //          event handler: 로그인 버튼 클릭 이벤트 처리         //
    const onSignInButtonClickHandler = () => {
<<<<<<< HEAD
      setCookies('email', 'email@email.com');
=======
>>>>>>> f3be6d543e5fa74fe18303d04847d6b929fb578f
      navigator(SIGN_IN_PATH);
    };
    //          event handler: 회원가입 버튼 클릭 이벤트 처리         //
    const onSignUpButtonClickHandler = () => {
      navigator(SIGN_UP_PATH);
    };
    //          event handler: 마이페이지 버튼 클릭 이벤트 처리         //
    const onMyPageButtonClickHandler = () => {
<<<<<<< HEAD
      
      navigator(USER_PATH(cookies.email));
=======
      navigator("/user");
>>>>>>> f3be6d543e5fa74fe18303d04847d6b929fb578f
      // TODO: 경로수정
    };
    //          event handler: 로그아웃 버튼 클릭 이벤트 처리         //
    const onLogoutButtonClickHandler = () => {
<<<<<<< HEAD
      setCookies('email', '');
      setUser(null);
=======
>>>>>>> f3be6d543e5fa74fe18303d04847d6b929fb578f
      navigator(MAIN_PATH);
    };

    //          render: 로그인 회원가입 버튼 컴포넌트 렌더링 (로그인 상태가 아닐 때)         //
<<<<<<< HEAD
    if(!cookies.email)
    return (
      <>
        <div
          className="header-top-right-sign-in"
          onClick={onSignInButtonClickHandler}
        >
          {"로그인"}
        </div>
        <div className="header-top-right-divider">{"|"}</div>
        <div
          className="header-top-right-sign-up"
          onClick={onSignUpButtonClickHandler}
        >
          {"회원가입"}
        </div>
=======
    return (
      <>
        <div className="header-top-right-sign-in" onClick={onSignInButtonClickHandler}>{"로그인"}</div>
        <div className="header-top-right-divider">{"|"}</div>
        <div className="header-top-right-sign-up" onClick={onSignUpButtonClickHandler}>{"회원가입"}</div>
>>>>>>> f3be6d543e5fa74fe18303d04847d6b929fb578f
      </>
    );
    //          render: 마이페이지 로그아웃 버튼 컴포넌트 렌더링 (로그인 상태일 때)         //
    return (
      <>
<<<<<<< HEAD
        <div
          className="header-top-right-sign-in"
          onClick={onMyPageButtonClickHandler}
        >
          {"마이페이지"}
        </div>
        <div className="header-top-right-divider">{"|"}</div>
        <div
          className="header-top-right-sign-up"
          onClick={onLogoutButtonClickHandler}
        >
          {"로그아웃"}
        </div>
      </>
    );
=======
        <div className="header-top-right-sign-in" onClick={onMyPageButtonClickHandler}>{"마이페이지"}</div>
        <div className="header-top-right-divider">{"|"}</div>
        <div className="header-top-right-sign-up" onClick={onLogoutButtonClickHandler}>{"로그아웃"}</div>
      </>
    );  
>>>>>>> f3be6d543e5fa74fe18303d04847d6b929fb578f
  };

  //          event handler: 레시피 등록 버튼 클릭 이벤트 처리         //
  const onUploadButtonClickHandler = () => {
<<<<<<< HEAD
    if(!cookies.email) {
      alert("로그인이 필요합니다.")
      return;
    }
    navigator(RECIPE_WRITE_PATH);
  };
  //          event handler: 네비바 분류 버튼 클릭 이벤트 처리         //
  const onRecipeListClickHandler = () => {
    navigator(RECIPE_LIST_PATH(''))
  }
  //          event handler: 네비바 랭킹 버튼 클릭 이벤트 처리         /
  const onRankingClickHandler = () => {
    navigator(RANKING_PATH)
  }
  //          event handler: 네비바 쉐프 버튼 클릭 이벤트 처리         //
  const onChefClickHandler = () => {
    navigator(CHEF_LIST_PATH)
  }
=======
    navigator("/board/write");
  };

>>>>>>> f3be6d543e5fa74fe18303d04847d6b929fb578f
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
<<<<<<< HEAD
                value={searchValue}
                onKeyDown={onSearchEnterKeyDownHandler}
                onChange={onSearchValueChangeHandler}
=======
                onKeyDown={onSearchEnterKeyDownHandler}
>>>>>>> f3be6d543e5fa74fe18303d04847d6b929fb578f
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
<<<<<<< HEAD
          <div className={isMainPage ? "navi-menu-box-click" : "navi-menu-box"}>
            <div className="navi-menu" onClick={onMainClickHandler}>
              {"메인"}
            </div>
          </div>
          <div className={isRecipeListPage ? "navi-menu-box-click" : "navi-menu-box"}>
            <div className="navi-menu" onClick={onRecipeListClickHandler}>{"분류"}</div>
          </div>
          <div className={isRankingPage ? "navi-menu-box-click" : "navi-menu-box"}>
            <div className="navi-menu" onClick={onRankingClickHandler}>{"랭킹"}</div>
          </div>
          <div className={isChefPage ? "navi-menu-box-click" : "navi-menu-box"}>
            <div className="navi-menu" onClick={onChefClickHandler}>{"쉐프"}</div>
=======
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
>>>>>>> f3be6d543e5fa74fe18303d04847d6b929fb578f
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
