import { CardMedia, Grid, Stack } from "@mui/material";
import React from "react";
import PrincipalInformation from "../../Component/PrincipalInformation/principalInformation";
import { Description } from "../description";

export const UserCard = (props) =>{
    const{ userState } = props;
    const { avatar_url } = userState;

    return(
        <Grid 
            container 
            spacing={2}
            sx = {{ marginTop: "15px" }}
            >
            <Grid item xs={3}>
                <CardMedia
                    component = "img"
                    alt = "GitHub User"
                    image = {avatar_url}
                    sx = {{ 
                        borderRadius:"50%",
                        marginLeft: "5px"
                     }}
                />
            </Grid>
            <Grid item xs={9}>
                
                    <PrincipalInformation userState={userState}/>
                    <Description userState={userState}></Description>
               
            </Grid>
        </Grid>
    )
}