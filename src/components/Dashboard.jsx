import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Heading,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import DarkModeSwitch from "./DarkModeSwitch";
import Upload from "./Upload";
import Shop from "./Shop";
import Map from "./Map";
import React, { useState, useEffect } from "react";
import { useTokens } from "./Token";
import Spotlight from "./Spotlight";
import SimpleCard from "./SimpleCard";

const LinkItems = [
  { name: "Explore", icon: FiHome },
  { name: "Upload", icon: FiTrendingUp },
  { name: "Shop", icon: FiStar },
  { name: "Spotlight", icon: FiCompass },
];

const SidebarContent = ({ onClose, setActiveContent, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("#800000")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Heading
          fontSize={"xl"}
          fontFamily="'Pacifico', cursive"
          textShadow="
        -1px -1px 0 #000,  
         1px -1px 0 #000,
         -1px 1px 0 #000,
          1px 1px 0 #000"
          color={"white"}
        >
          Reveille Rewards
        </Heading>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          color="white"
          fontWeight="bold"
          setActiveContent={setActiveContent}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, setActiveContent, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={() => setActiveContent(children)}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};
const MobileNav = ({ onOpen, setShowSimpleCard, ...rest }) => {
  const savedFirstName = localStorage.getItem("firstName");
  const savedLastName = localStorage.getItem("lastName");
  const [tokens, setTokens] = useState(localStorage.getItem("points") || 0);

  useEffect(() => {
    const checkForTokenUpdates = setInterval(() => {
      const currentTokens = localStorage.getItem("points");
      if (tokens !== currentTokens) {
        setTokens(currentTokens);
      }
    }, 500); // Checks every second. Adjust the timing if necessary.

    return () => clearInterval(checkForTokenUpdates);
  }, [tokens]);

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("#800000")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Heading
        display={{ base: "flex", md: "none" }}
        fontSize={"xl"}
        fontFamily="'Pacifico', cursive"
        textShadow="
        -1px -1px 0 #000,  
         1px -1px 0 #000,
         -1px 1px 0 #000,
          1px 1px 0 #000"
        color={"white"}
      >
        Reveille Rewards
      </Heading>

      <HStack spacing={{ base: "0", md: "4" }}>
        <Tag size="lg" colorScheme="red" borderRadius="full">
          <Avatar
            src="https://thefan-brand.com/cdn/shop/products/texas-am-aggies-modern-disc-wall-sign-525895.jpg?v=1644363931"
            size="xs"
            name="Segun Adebayo"
            ml={-1}
            mr={2}
          />
          <TagLabel>TAMUTokens: {tokens || 0} </TagLabel>
        </Tag>
        <DarkModeSwitch />

        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://today.tamu.edu/wp-content/uploads/2021/02/210205_NewRev_JKE_3.jpg"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm" color="white">
                    {savedFirstName} {savedLastName}
                  </Text>
                  <Text fontSize="xs" color="white">
                    Student
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown color="white" />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem onClick={() => setShowSimpleCard(true)}>
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeContent, setActiveContent] = React.useState("Explore");
  const [showSimpleCard, setShowSimpleCard] = useState(false);
  if (showSimpleCard) {
    return <SimpleCard />;
  }

  return (
    <>
      <Box minH="100vh" bg={useColorModeValue("white")}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          setActiveContent={setActiveContent}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav onOpen={onOpen} setShowSimpleCard={setShowSimpleCard} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {activeContent === "Upload" && <Upload />}
          {activeContent === "Shop" && <Shop />}
          {activeContent === "Explore" && <Map />}
          {activeContent === "Spotlight" && <Spotlight />}
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
