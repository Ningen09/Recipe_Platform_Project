import React from "react";
import "./style.css";

//					component: 메인 페이지 					//
export default function Main() {
  //					component: 메인 best 게시물 컴포넌트 					//
  const MainBest = () => {
    return (
      <div id="main-best-wrapper">
        <div className="main-best-box">
          <div className="main-best-title">{"BEST 레시피"}</div>
          <div className="main-best-image">
            <div className="main-best-left-image-box">
              <div className="main-best-left-image"></div>
              <div className="main-best-left-icon"></div>
            </div>
            <div className="main-best-center-image-box">
              <div className="main-best-center-image"></div>
              <div className="main-best-center-title-box">
                <div className="main-best-center-title">{"비빔밥"}</div>
                <div className="main-best-center-page">{"1/N"}</div>
              </div>
            </div>
            <div className="main-best-right-image-box">
              <div className="main-best-right-image"></div>
              <div className="main-best-right-icon"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  //					component: 쉐프 리스트 컴포넌트 					//
  const ChefList = () => {
    return (
      <div id="chef-list-wrapper">
        <div className="list-left">
          <div className="list-bottom-left-icon"></div>
        </div>
        <div className="chef-list-center">
          <div className="chef-list-center-top">
            <div className="chef-list-center-top-title">{"쉐프"}</div>
            <div className="chef-list-center-top-more-button">{"더보기"}</div>
          </div>
          <div className="chef-list-center-bottom">
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">
                {"아보카도도도도"}
              </div>
              <div className="chef-list-center-bottom-subscription">
                {"구독하기"}
              </div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">
                {"아보카도도도도"}
              </div>
              <div className="chef-list-center-bottom-subscription">
                {"구독하기"}
              </div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">
                {"아보카도도도도"}
              </div>
              <div className="chef-list-center-bottom-subscription">
                {"구독하기"}
              </div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">
                {"아보카도도도도"}
              </div>
              <div className="chef-list-center-bottom-subscription">
                {"구독하기"}
              </div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">
                {"아보카도도도도"}
              </div>
              <div className="chef-list-center-bottom-subscription">
                {"구독하기"}
              </div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">
                {"아보카도도도도"}
              </div>
              <div className="chef-list-center-bottom-subscription">
                {"구독하기"}
              </div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">
                {"아보카도도도도"}
              </div>
              <div className="chef-list-center-bottom-subscription">
                {"구독하기"}
              </div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">
                {"아보카도도도도"}
              </div>
              <div className="chef-list-center-bottom-subscription">
                {"구독하기"}
              </div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">
                {"아보카도도도도"}
              </div>
              <div className="chef-list-center-bottom-subscription">
                {"구독하기"}
              </div>
            </div>
            <div className="chef-list-center-bottom-info-box">
              <div className="chef-list-center-bottom-profile-image"></div>
              <div className="chef-list-center-bottom-nickname">
                {"아보카도도도도"}
              </div>
              <div className="chef-list-center-bottom-subscription">
                {"구독하기"}
              </div>
            </div>
          </div>
        </div>
        <div className="list-right">
          <div className="list-bottom-right-icon"></div>
        </div>
      </div>
    );
  };

  //					component: 최신 게시물 컴포넌트 					//
  const NewRecipe = () => {
    return (
      <div id="new-recipe-list-wrapper">
        <div className="list-left">
          <div className="list-bottom-left-icon"></div>
        </div>
        <div className="new-recipe-list-center">
          <div className="new-recipe-list-center-top">
            <div className="new-recipe-list-center-top-title">
              {"최신 레시피"}
            </div>
            <div className="new-recipe-list-center-top-more-button">
              {"더보기"}
            </div>
          </div>
          <div className="new-recipe-list-center-bottom">
            <div className="new-recipe-box">
              <div className="new-recipe-image"></div>
              <div className="new-recipe-title">{"일본 스타일 라멘~"}</div>
            </div>
            <div className="new-recipe-box">
              <div className="new-recipe-image"></div>
              <div className="new-recipe-title">{"일본 스타일 라멘~"}</div>
            </div>
            <div className="new-recipe-box">
              <div className="new-recipe-image"></div>
              <div className="new-recipe-title">{"일본 스타일 라멘~"}</div>
            </div>
            <div className="new-recipe-box">
              <div className="new-recipe-image"></div>
              <div className="new-recipe-title">{"일본 스타일 라멘~"}</div>
            </div>
          </div>
        </div>
        <div className="list-right">
          <div className="list-bottom-right-icon"></div>
        </div>
      </div>
    );
  };

  //					component: 키워드 게시물 컴포넌트 					//
  const KeywordRecipe = () => {
    return (
      <div id="new-recipe-list-wrapper">
        <div className="list-left">
          <div className="list-bottom-left-icon"></div>
        </div>
        <div className="new-recipe-list-center">
          <div className="new-recipe-list-center-top">
            <div className="new-recipe-list-center-top-title">
              {"최신 레시피"}
            </div>
            <div className="new-recipe-list-center-top-more-button">
              {"더보기"}
            </div>
          </div>
          <div className="new-recipe-list-center-bottom">
            <div className="new-recipe-box">
              <div className="new-recipe-image"></div>
              <div className="new-recipe-title">
                {
                  "일본 스타일 라멘~일본 스타일 라멘~일본 스타일 라멘~일본 스타일 라멘~일본 스타일 라멘~일본 스타일 라멘~"
                }
              </div>
            </div>
            <div className="new-recipe-box">
              <div className="new-recipe-image"></div>
              <div className="new-recipe-title">{"일본 스타일 라멘~"}</div>
            </div>
            <div className="new-recipe-box">
              <div className="new-recipe-image"></div>
              <div className="new-recipe-title">{"일본 스타일 라멘~"}</div>
            </div>
            <div className="new-recipe-box">
              <div className="new-recipe-image"></div>
              <div className="new-recipe-title">{"일본 스타일 라멘~"}</div>
            </div>
          </div>
        </div>
        <div className="list-right">
          <div className="list-bottom-right-icon"></div>
        </div>
      </div>
    );
  };

  //          component: 최근 본 레시피 컴포넌트          //
  const LatelyRecipe = () => {
    return (
      <div id="lately-recipe-list">
        <div className="lately-recipe-top">
          <div className="lately-recipe-top-title">{"최근 본 게시물"}</div>
        </div>
        <div className="lately-recipe-bottom">
          <div className="lately-recipe-bottom-left">
            <div className="left-icon"></div>
          </div>
          <div className="lately-recipe-bottom-center">
            <div className="lately-recipe-bottom-center-box">
              <div className="lately-recipe-bottom-center-image"></div>
              <div className="lately-recipe-bottom-center-title">{"일본라멘"}</div>
            </div>
            <div className="lately-recipe-bottom-center-box">
              <div className="lately-recipe-bottom-center-image"></div>
              <div className="lately-recipe-bottom-center-title">{"일본라멘"}</div>
            </div>
            <div className="lately-recipe-bottom-center-box">
              <div className="lately-recipe-bottom-center-image"></div>
              <div className="lately-recipe-bottom-center-title">{"일본라멘"}</div>
            </div>
            <div className="lately-recipe-bottom-center-box">
              <div className="lately-recipe-bottom-center-image"></div>
              <div className="lately-recipe-bottom-center-title">{"일본라멘"}</div>
            </div>
            <div className="lately-recipe-bottom-center-box">
              <div className="lately-recipe-bottom-center-image"></div>
              <div className="lately-recipe-bottom-center-title">{"일본라멘"}</div>
            </div>
          </div>
          <div className="lately-recipe-bottom-right">
            <div className="right-icon"></div>
          </div>
        </div>
      </div> 
    );
  };

  //					render: 메인 페이지 렌더링					//
  return (
    <div id="main-page">
      <MainBest />
      <ChefList />
      <NewRecipe />
      <KeywordRecipe />
      <LatelyRecipe />
    </div>
  );
}
