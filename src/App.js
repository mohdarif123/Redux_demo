import { Box, Typography } from "@mui/material";
import CakeContainer from "./component/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./component/HooksCakeContainer";
import IceCreamContainer from "./component/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <Box>
        <Typography>Typography</Typography>
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
      </Box>
    </Provider>
  );
}

export default App;
