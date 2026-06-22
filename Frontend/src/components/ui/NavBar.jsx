import { Center, Container, useColorMode } from '@chakra-ui/react';
import { CiSquarePlus} from "react-icons/ci";
import {IoMoon} from "react-icons/io5";
import {LuSun} from "react-icons/lu";
import { Flex, Text, HStack, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from 'react'

const NavBar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  
  
  return (
  <Container maxW={"1150px"} px={4}> 
    <Flex
    h={16}
    alingItems={"center"}
    justifyContent = {"space-between"}
    flexDir={{
      base: "column",
      sm:"row"
    }}
    >

      <Text
        fontSize={{base: "22", sm: "28"}}
        fontWeight= {"Bold"}
        textTransform = {"uppercase"}
        textAlign={"center"}
        bgGradient={"linear(to-r,cyan.400, blue.500)"}
        bgClip={"text"}
        
      >
        <Link to={"/"}>Product Store 🛒</Link>
      </Text>
      <HStack spacing={2} alignItems={"center"}>
       <Link to={"/create"}>
        <Button>
          <CiSquarePlus fontSize={20}/>
        </Button>
       </Link>
       <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <IoMoon/> : <LuSun size="20"/>}
       </Button>
      </HStack>
    </Flex>
  </Container>
  );
};

export default NavBar
