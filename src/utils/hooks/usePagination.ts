import { useEffect, useState } from "react";

interface UsePaginationProps {
  initialPageNum?: number;
  hasMore: boolean;
  loadMore?: () => void;
  onReset?: () => void;
  inSlider?: boolean;
  filterOptions?: Record<string, any>; // Assuming filterOptions can be an object with any values
}

/**
 * Pagination helper
 *
 * @param {Object} props
 * @param {Number} props.initialPageNum - Initial page number
 * @param {Boolean} props.hasMore - Indicates if more items are available
 * @param {Function} props.loadMore - Function to load more items
 * @param {Function} props.onReset - Function to reset pagination
 * @param {Boolean} [props.inSlider] - Indicates if pagination is in a slider
 * @param {Object} [props.filterOptions] - Options to filter the results
 *
 * @returns {[Number, Function]} - current page number and set page number function
 */
export default function usePagination({
  initialPageNum = 1,
  hasMore,
  loadMore = () => {},
  onReset = () => {},
  inSlider = false,
  filterOptions = {},
}: UsePaginationProps): [number, React.Dispatch<React.SetStateAction<number>>] {
  const [pageNum, setPageNum] = useState<number>(initialPageNum);
  const [initialCall, setInitialCall] = useState<boolean>(false);

  useEffect(() => {
    setPageNum(initialPageNum);
  }, [initialPageNum]);

  useEffect(() => {
    const triggerLoadMoreFunc = hasMore && pageNum >= initialPageNum;
    const _triggerLoadMoreFunc =
      (inSlider && triggerLoadMoreFunc) || triggerLoadMoreFunc;

    if (_triggerLoadMoreFunc) {
      loadMore();
      setInitialCall(true);
    }
  }, [pageNum, hasMore, initialPageNum, inSlider, loadMore]);

  useEffect(() => {
    onReset();
    if (!inSlider) setInitialCall(true);

    if (pageNum > initialPageNum) {
      setPageNum(initialPageNum);
    } else if (pageNum === initialPageNum && initialCall) {
      loadMore();
    }
  }, [
    JSON.stringify(filterOptions),
    pageNum,
    initialPageNum,
    initialCall,
    loadMore,
    onReset,
    inSlider,
  ]);

  return [pageNum, setPageNum];
}
