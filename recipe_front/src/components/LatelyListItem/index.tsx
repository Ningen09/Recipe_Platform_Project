import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

//          component: 최근 본 레시피 컴포넌트          //
export default function LatelyRecipe() {
  //          function: 네비게이트 함수         //
  const navigator = useNavigate();

  //          event handler: Card Click 이벤트 처리 함수          //
  // TODO: 클릭시 게시물 이동 만들기
  const onLatelyRecipeClickHandler = () => {
  }

  //          render: 최근 본 게시물 컴포넌트 렌더링          //
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
            <div className="lately-recipe-bottom-center-title">
              {"일본라멘"}
            </div>
          </div>
          <div className="lately-recipe-bottom-center-box">
            <div className="lately-recipe-bottom-center-image"></div>
            <div className="lately-recipe-bottom-center-title">
              {"일본라멘"}
            </div>
          </div>
          <div className="lately-recipe-bottom-center-box">
            <div className="lately-recipe-bottom-center-image"></div>
            <div className="lately-recipe-bottom-center-title">
              {"일본라멘"}
            </div>
          </div>
          <div className="lately-recipe-bottom-center-box">
            <div className="lately-recipe-bottom-center-image"></div>
            <div className="lately-recipe-bottom-center-title">
              {"일본라멘"}
            </div>
          </div>
          <div className="lately-recipe-bottom-center-box">
            <div className="lately-recipe-bottom-center-image"></div>
            <div className="lately-recipe-bottom-center-title">
              {"일본라멘"}
            </div>
          </div>
        </div>
        <div className="lately-recipe-bottom-right">
          <div className="right-icon"></div>
        </div>
      </div>
    </div>
  );
}
