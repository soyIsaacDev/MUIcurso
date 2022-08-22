import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { LocationInformation } from "../Component/LocationInformation/locationInformation";
import { PaperInformation } from "../Component/PaperInformation/paperInformation";

export const Description = (props) => {
    const { userState } = props;
    const { bio } = userState;
    return(
        <Fragment>
            <Stack sx={{justifyContent:"center"}}>
                {bio? 
                      <Typography variant="body1">{bio}</Typography>
                    : <Typography variant="body1">Bio Information</Typography>
                }
            </Stack>
             <PaperInformation userState ={userState}/>
            <LocationInformation userState ={userState}/>
        </Fragment>
    )
};