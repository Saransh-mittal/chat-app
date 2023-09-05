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

const Login = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData({ ...data, [name]: value });
  };

  const submitHandler = () =>{

  };
  return (
    <VStack spacing={"5px"} autoComplete="off" alignItems={"normal"}>
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
      <Button
      colorScheme="blue"
      width={"100%"}
      style={{marginTop:15}}
      onClick={submitHandler}
      >
        Log In
      </Button>
      <Button
      colorScheme="red"
      width={"100%"}
      style={{marginTop:15}}
      onClick={()=>{
        setData({email:"guest@gmail.com", password:"1234"});
      }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
}

export default Login
