import React, { useRef } from "react";
import styles from "../css/Modal.module.css";
import useOutsideClick from "./Utils/useOutsideClick";

const Modal = ({ trigger, eventHandle, eventFunc, children }) => {
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (eventHandle) {
      eventFunc(!eventFunc);
    }
  });
  if (eventHandle) {
    return (
      <>
        {trigger}
        <div className={styles.modal}>
          <div ref={ref} className={styles.modalChild}>
            <i
              onClick={() => eventFunc(!eventFunc)}
              className="fas fa-times"
            ></i>
            {children}
          </div>
        </div>
      </>
    );
  }
  return <>{trigger}</>;
};

export default Modal;
