import React from "react";
import {
  Button,
  Box,
  HStack,
  PinInput,
  PinInputField,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Flex,
  useDisclosure,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import { useState, useContext } from "react";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";

const OtpVerify = () => {
  const { setShoppingCart } = useContext(ShoppingCartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [otpEntered, setOtpEntered] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  return (
    <Box border="1px solid #dadcdf" marginTop="10px" padding="20px">
      <HStack marginBottom="20px">
        <PinInput type="alphanumeric" mask>
          <PinInputField
            name="one"
            onChange={(e) =>
              setOtpEntered({ ...otpEntered, [e.target.name]: e.target.value })
            }
          />
          <PinInputField
            name="two"
            onChange={(e) =>
              setOtpEntered({ ...otpEntered, [e.target.name]: e.target.value })
            }
          />
          <PinInputField
            name="three"
            onChange={(e) =>
              setOtpEntered({ ...otpEntered, [e.target.name]: e.target.value })
            }
          />
          <PinInputField
            name="four"
            onChange={(e) =>
              setOtpEntered({ ...otpEntered, [e.target.name]: e.target.value })
            }
          />
        </PinInput>
      </HStack>
      <Button
        width="100%"
        borderRadius="3px"
        bg="#2f3337"
        color="white"
        _hover={{ bg: "black" }}
        _active={{ bg: "black" }}
        isLoading={loading}
        loadingText="Verifing"
        size="lg"
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            if (
              otpEntered.one === "1" &&
              otpEntered.two === "2" &&
              otpEntered.three === "3" &&
              otpEntered.four === "4"
            ) {
              onOpen();
              setLoading(false);
              localStorage.removeItem("flowstockCart");
              setShoppingCart([]);
            } else {
              toast({
                title: "Invaild otp",
                status: "error",
                position: "top-right",
                duration: 3000,
                isClosable: true,
              });
              setLoading(false);
            }
          }, 1500);
        }}
      >
        Verify OTP
      </Button>

      {/* modal */}
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Flex
              flexDirection="column"
              padding="40px"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <BsCheckCircleFill color="#16a34a" fontSize="60px" />
              </Box>
              <Text fontSize="2xl" marginTop="20px">
                Payment Done !
              </Text>
              <Text fontSize="sm">
                Thank you for completing your secure online payment
              </Text>
              <Text as="b">Have a nice day !</Text>
            </Flex>
          </ModalBody>

          <ModalFooter style={{ display: "flex", justifyContent: "center" }}>
            <RouterLink to="/">
              <Button colorScheme="green" onClick={onClose}>
                Continue Shopping
              </Button>
            </RouterLink>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default OtpVerify;
