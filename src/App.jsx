import React, { useEffect } from "react";
import { Container } from '@mui/material';
import Searcher from "./Component/Searcher/searcher";
import { useState } from "react";

import { getGitHubUser } from "./services/users"
import { UserCard } from "./containers/userCard/userCard";

const App = () => {

  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("inputUser");
  const [notFound, setNotFound] = useState(false);
  
  const gettingUser = async(user) => {
    const userResponse =  await getGitHubUser(user);

    if(userState === "octocat"){
      localStorage.setItem("octocat", userResponse)
    }
    if(userResponse.message === "Not Found"){
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  }

  console.log(userState);

  useEffect(() => {
    gettingUser(inputUser);
  },[inputUser])

  return(
    <Container sx={{
      background: "smokewhite",
      width: "80vW",
      height: "500px",
      borderRadius: "16px",
      marginTop: "40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Searcher inputUser = {inputUser} setInputUser ={setInputUser} ></Searcher>
      <UserCard userState={userState}/>
    </Container>
  )
};

export default App;