export default interface BoardListItem {

    boardNumber: number;
    title: string;
    boardTitleImage: string | null;
    favoriteCount: number;
    viewCount: number;
    writeNickname: string;
    writeProfileImage: string | null;
    starRatingImage: string | null;
    starRatingCount: number;
}