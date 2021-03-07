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
            <ModalHeader
              textAlign="center"
              fontWeight="semibold"
              paddingY="1.125rem"
              background="#F7FAFC"
              border="1px solid #eee"
              fontSize="1rem"
              color="#718096"
            >
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
