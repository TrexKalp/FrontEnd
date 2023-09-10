"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useBreakpointValue } from "@chakra-ui/react";
// Import other required components and hooks

export default function SignupCard({ switchToLogin, onRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignup = () => {
    // Store user's credentials in local storage
    localStorage.setItem(email, password);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);

    alert("Registered Successfully!");

    switchToLogin();
  };

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue(
          "linear-gradient(135deg, #E29495, #D47583, #BF556A)",
          "gray.800"
        )}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Image
              src="https://i.ibb.co/JnVqMs6/Rev-Rewards-1.png"
              borderRadius="50%"
              height="100px"
              border="3px solid black" // Added this line
            />
            <Heading
              fontSize={"6xl"}
              textAlign="center"
              fontFamily="'Pacifico', cursive"
              textShadow="
        -2.5px -2.5px 0 #000,  
         2.5px -2.5px 0 #000,
         -2.5px 2.5px 0 #000,
          2.5px 2.5px 0 #000"
              color={"white"}
            >
              Reveille Rewards
            </Heading>

            <Text
              fontSize={"2xl"}
              color={"white"}
              textShadow="
        -1px -1px 0 #000,  
         1px -1px 0 #000,
         -1px 1px 0 #000,
          1px 1px 0 #000"
              fontFamily="'Pacifico', cursive"
            >
              Shop small, score big!
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}></InputRightElement>
                </InputGroup>

                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{ bg: "blue.500" }}
                    onClick={handleSignup}
                  >
                    Sign up
                  </Button>
                </Stack>
              </FormControl>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link color={"blue.400"} onClick={switchToLogin}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
