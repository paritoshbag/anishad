import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import ContactForm from "./ui/ContactForm";

const MyModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        {/* <ModalBody> */}
          <ContactForm/>
        {/* </ModalBody> */}
      </ModalContent>
    </Modal>
  );
};

export default MyModal;
