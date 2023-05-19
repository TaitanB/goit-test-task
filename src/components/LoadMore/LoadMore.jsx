import css from "./LoadMore.module.css";

export default function LoadMore({ handleLoadMore }) {
  return (
    <button type="button" onClick={handleLoadMore} className={css.loadMore}>
      Load more
    </button>
  );
}
