import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/core";

export function DeleteProjectModal({ isOpen, onClose, cancelRef }) {
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold" color="#333">
          Delete this particular project
        </AlertDialogHeader>
        <AlertDialogBody fontSize="1rem">
          Are you sure? You can't undo this action afterwards.
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button fontSize="0.8rem" ref={cancelRef} onClick={onClose}>
            Cancel
          </Button>
          <Button
            fontSize="0.8rem"
            background="#e91e63"
            onClick={onClose}
            ml={3}
            color="#fff"
          >
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
