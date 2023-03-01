import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Progress,
  } from "@chakra-ui/react"


function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
        <Progress value={80} />
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
  
              <ModalBody>
                <h1>Modal open</h1>
                <img width={ '100px' } src="https://images.vexels.com/media/users/3/256755/isolated/preview/db1f1f8091208db0a017d7e585264595-blue-race-car-color-stroke.png"></img>
                
              </ModalBody>
  
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </>
    )
  }

export default BasicUsage;