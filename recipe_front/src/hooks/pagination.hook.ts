import{ useState, useEffect } from 'react';

const usePagination = <T>(countPerPage: number) => {
    const[currentPageNumber, setCurrentPageNumber] = useState<number>(1);
    const[currentSectionNumer, setCurrentSectionNumber] = useState<number>(1);
    const[vieBoardList, setViewBoardList] = useState<T[]>([]);
    const[viewPageNumberList, setViewPageNumberList] = useState<number[]>([]);
    const[totalPage, setTotalPage] = useState<number>(0);
    const[totalSection, setTotalSection] =  useState<number>(0);
    const[boardList, setBoardList] = useState<T[]>([]);

    const setViewBoard = () => {

        const FIRST_INDEX = countPerPage * (currentPageNumber - 1);
        const LAST_INDEX =  countPerPage * currentPageNumber;
        const tmpList = boardList.filter((item, index) => (index >= FIRST_INDEX && index < LAST_INDEX));
        
        setViewBoardList(tmpList);
   }

   const setViewPage = (total: number) => {
    const FIRST_PAGE_INDEX = 5 * (currentSectionNumer - 1) + 1;
    const LAST_PAGE_INDEX = 5 * currentSectionNumer;

    const tmpPageNumberList = [];

    for (let pageNumber = FIRST_PAGE_INDEX; pageNumber <= LAST_PAGE_INDEX; pageNumber++) {
        if (pageNumber > totalPage) break;
        tmpPageNumberList.push(pageNumber);
    }

    setViewPageNumberList(tmpPageNumberList);
   }

useEffect(() => {
    const totalPage = Math.floor((boardList.length - 1)/ countPerPage) + 1;
    const totalSection = Math.floor((boardList.length - 1)/ (countPerPage * 5)) + 1;
    setCurrentPageNumber(1);
    setCurrentSectionNumber(1);
    setTotalPage(totalPage);
    setTotalSection(totalSection);

    setViewBoard();
    setViewPage(totalPage);
}, [boardList]);

useEffect(() => {
    setViewBoard();
},[currentPageNumber]);

useEffect(() =>{
    setViewPage(totalPage);
},[currentSectionNumer]);

return{
    currentPageNumber,
    setCurrentPageNumber,
    currentSectionNumer,
    setCurrentSectionNumber,
    vieBoardList,
    viewPageNumberList,
    totalSection,
    setBoardList
};
}

export default usePagination;
