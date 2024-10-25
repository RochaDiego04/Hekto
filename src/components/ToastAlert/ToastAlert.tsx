import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { hideAlert } from "../../store/toast-slice";
import { RootState } from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { X } from "lucide-react";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={alertRef}
          initial={{ opacity: 0, y: -30, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 30, x: "-50%" }}
          transition={{ type: "keyframes" }}
          className={`flex items-center justify-center gap-2 fixed top-2 h-10 z-[1000] p-4 ${
            type === "error" ? "bg-[var(--danger)]" : "bg-[var(--success-dark)]"
          } rounded-md text-white bold`}
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          {message}
          <Button onClick={() => dispatch(hideAlert())} className="p-0">
            <X />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>,
    portalRoot
  );
};

export default ToastAlert;
