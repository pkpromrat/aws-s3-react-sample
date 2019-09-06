import React from "react";
import { Grommet, Box, Text } from "grommet";

import StorageUploader from "./StorageUploader";

const theme = {};

function App() {
  return (
    <Grommet theme={theme}>
      <Box fill style={{ height: "100vh" }}>
        <Box fill="horizontal" height="50%" background="#3F3F3F">
          <StorageUploader />
        </Box>
        <Box
          fill="horizontal"
          height="50%"
          align="center"
          justify="center"
          background="4F4F4F"
        >
          <Text weight="bold" size="20px">
            S3 Image File Uploader
          </Text>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
