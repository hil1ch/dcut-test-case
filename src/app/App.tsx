import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router";
import { routes } from "./routes/routes";

function App() {
  return (
    <MantineProvider>
      <RouterProvider router={routes} />
    </MantineProvider>
  );
}

export default App;
