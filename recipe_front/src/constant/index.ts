
export const AUTH_PATH = '/auth';
export const USER_RECIPE = (email:string) => `/user/${email}/recipe`;
export const USER_WRITING_RECIPE = (email:string) => `/user/${email}/writing_recipe`
export const RECIPE_DETAIL_PATH = (boardNumber: number | string) => `/board/detail/${boardNumber}`;