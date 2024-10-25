import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { hideAlert } from "../../store/toast-slice";
import { RootState } from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { X } from "lucide-react";
import Button from "../Button/Button";

const ToastAlert = () => {
  const { message, isVisible, type } = useAppSelector(
    (state: RootState) => state.toast
  );
  const dispatch = useAppDispatch();
  const alertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, dispatch]);

  if (!isVisible) return null;

  const portalRoot = document.getElementById("toast-root");
  if (!portalRoot) return null;

  return createPortal(
    <div
      ref={alertRef}
      className={`flex items-center justify-center gap-2 fixed top-2 left-1/2 transform -translate-x-1/2 h-40px z-[1000] p-4 ${
        type === "error"
          ? "bg-[var(--danger)] text-[var(--white)]"
          : "bg-[var(--success-dark)] text-[var(--white)]"
      } rounded-md text-black bold`}
    >
      {message}
      <Button onClick={() => dispatch(hideAlert())} className="p-0">
        <X />
      </Button>
    </div>,
    portalRoot
  );
};

export default ToastAlert;
