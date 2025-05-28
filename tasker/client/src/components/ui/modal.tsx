import type{ ReactNode } from "react";

interface ModalProps {
  id: string;
  children: ReactNode;
  buttonLabel: string;
}

export function Modal({ id, children, buttonLabel }: ModalProps) {
  return (
    <>
<button className="btn" onClick={()=>document?.getElementById(id)?.showModal()}>{buttonLabel}</button>
<dialog id={id} className="modal">
  <div className="modal-box">
    {children}
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </>
  );
}

export default Modal;