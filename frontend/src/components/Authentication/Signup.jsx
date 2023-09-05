import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData({ ...data, [name]: value });
  };

  const postDetails = () =>{

  };
  const submitHandler = () =>{

  };
  return (
    <VStack spacing={"5px"} autoComplete="off" alignItems={"normal"}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          name="name"
          onChange={inputHandler}
          value={data.name}
          type="text"
          autoComplete="false"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          type="email"
          autoComplete="false"
          onChange={inputHandler}
          value={data.email}
          name="email"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter Your Password"
            type={show ? "text" : "password"}
            autoComplete="new-password"
            onChange={inputHandler}
            value={data.password}
            name="password"
          />
          <InputRightElement width={"4.5rem"}>
            <Button h="1.75rem" size={"sm"} onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Confirm Your Password"
            type="password"
            autoComplete="new-password"
            onChange={inputHandler}
            value={data.cpassword}
            name="cpassword"
          />
          <InputRightElement width={"4.5rem"}>
            <Button h="1.75rem" size={"sm"} onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
      <FormLabel>Upload your Picture</FormLabel>
      <Input
      type="file"
      p={1.5}
      accept="image/*"
      onChange = {(e)=> postDetails(e.target.files[0])}
      />
      </FormControl>
      <Button
      colorScheme="blue"
      width={"100%"}
      style={{marginTop:15}}
      onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
