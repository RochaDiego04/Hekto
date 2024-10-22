import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";

type PaginationButtonsProps = {
  totalItems: number | undefined;
};

export default function PaginationButtons({
  totalItems,
}: PaginationButtonsProps) {
  const dispatch = useDispatch();

  if (!totalItems) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => handlePageChange(i + 1)}
          className={`px-4 py-2 border ${
            currentPage === i + 1 ? "bg-gray-300" : ""
          }`}
        >
          {i + 1}
        </button>
      ))} */}
    </div>
  );
}
