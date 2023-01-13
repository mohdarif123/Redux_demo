import { Typography, Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "./../redux/cakes/cakeAction";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <Box>
      <Typography>Number of cakes -{numOfCakes}</Typography>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </Box>
  );
};

export default HooksCakeContainer;
