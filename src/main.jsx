import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import App from "./App.jsx";

import "@radix-ui/themes/styles.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme
      accentColor="blue" // 테마 색상
      grayColor="slate"
      radius="medium"
      scaling="100%"
      appearance="light" // 라이트/다크
    >
      <App />
    </Theme>
  </StrictMode>
);
