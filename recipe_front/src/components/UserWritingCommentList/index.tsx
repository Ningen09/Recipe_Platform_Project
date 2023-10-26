import { UserCommentItem } from 'Types';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { RECIPE_DETAIL_PATH } from 'constant';

//          interface: 댓글 게시물 리스트 아이템 컴포넌트 Props          //
interface Props {
    userCommentItem: UserCommentItem;
}

//          component: 댓글 게시물 리스트 아이템 컴포넌트          //
export default function UserWritingCommentListItem({userCommentItem}: Props) {

    //          state: Properties          //
    const {boardNumber, title, writeNickname, recipeImage,
    commentNickname, commentContents, commentDatetime} = userCommentItem;

    //          function: 네비게이트 함수          //
    const navigator = useNavigate();

    //          event handler: Recipe Click 이벤트 처리 함수          //
    const onRecipeClickHandler = () => {
        navigator(RECIPE_DETAIL_PATH(boardNumber));
    }

    //          render: 댓글 게시물 리스트 아이템 컴포넌트 렌더링          //
    return (
        <div className='user-writing-comment-box' onClick={onRecipeClickHandler}>
            <div className='user-writing-comment-image'>
                <div className='user-writing-comment-image-url'>{recipeImage}</div>
            </div>
            <div className='user-writing-comment-recipe-container'>
                <div className='user-writing-comment-title'>{title}</div>
                <div className='user-writing-comment-write-nickname'>{'by.' + writeNickname}</div>
            </div>
            <div className='user-writing-comment-container'>
                <div className='user-writing-comment-nickname'>{commentNickname}</div>
                <div className='user-writing-comment-contents'>{commentContents}</div>
                <div className='user-writing-comment-datetime'>{commentDatetime}</div>
            </div>
            <div className='user-writing-comment-button-box'>
                <div className='user-writing-comment-button-delete'>{'삭제하기'}</div>
                <div className='user-writing-comment-button-modify'>{'수정하기'}</div>
            </div>
            
        </div>
    )
}

