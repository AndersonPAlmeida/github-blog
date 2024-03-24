import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { PostsProvider } from "./contexts/PostsContext";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {
return (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <PostsProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PostsProvider>
  </ThemeProvider>
  )
}
