import * as SC from "./styles";

export const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <>
      <SC.ModalOverlay onClick={onClose} />
      <SC.Modal>
        {title && (
          <SC.ModalHeader>
            <h2>{title}</h2>
          </SC.ModalHeader>
        )}
        <SC.ModalBody>{children}</SC.ModalBody>
        {footer && <SC.ButtonContent>{footer}</SC.ButtonContent>}
      </SC.Modal>
    </>
  );
};