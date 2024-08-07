import { LoadMoreFn } from "react-relay";
import { OperationType } from "relay-runtime";

interface Props<T extends OperationType> {
  loadMore: LoadMoreFn<T>;
  count?: number;
  hasMore: boolean;
  isLoading: boolean;
}

export const LoadMore = <T extends OperationType>({
  loadMore,
  hasMore,
  isLoading,
  count = 10,
}: Props<T>) => {
  if (!hasMore) {
    return null;
  }
  return (
    <button disabled={isLoading} onClick={() => loadMore(count)}>
      Load More
    </button>
  );
};
