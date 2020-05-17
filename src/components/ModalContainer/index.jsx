import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/core";

export function ModalContainer({
  title,
  isOpen,
  onClose,
  children,
  size = "lg",
  showCloseButton,
  initialFocusRef,
}) {
  return (
    <>
      <Modal
        isCentered
        size={size}
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialFocusRef}
      >
        <ModalOverlay />
        <ModalContent borderRadius="5px">
          {title && (
            <ModalHeader textAlign="center" fontWeight="medium" paddingY="1rem">
              {title}
            </ModalHeader>
          )}
          {showCloseButton && <ModalCloseButton />}
          {children}
        </ModalContent>
      </Modal>
    </>
  );
}