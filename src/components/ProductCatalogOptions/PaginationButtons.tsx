import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { setCurrentPage } from "../../store/filter-slice";
import Button from "../Button/Button";

type PaginationButtonsProps = {
  totalItems: number | undefined;
};

export default function PaginationButtons({
  totalItems,
}: PaginationButtonsProps) {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useAppSelector((state) => state.filter);

  if (!totalItems) return null;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="flex items-center justify-end gap-2 mt-4">
      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          key={i + 1}
          onClick={() => handlePageChange(i + 1)}
          className={`px-4 py-2 border ${
            currentPage === i + 1 ? "bg-primary text-white" : ""
          }`}
        >
          {i + 1}
        </Button>
      ))}
    </div>
  );
}
