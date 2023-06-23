import { LoggedInRouter } from "./routers/logged-in-router";
import { LOCAL_STORAGE_TOKEN } from "./constants";

function App() {
  localStorage.setItem(
    LOCAL_STORAGE_TOKEN,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpZ2Nsb3Vkc0BnbWFpbC5jb20iLCJsb2dpblNlc3Npb24iOiJfX19fX19fX19zZXNzaW9uX2lkIiwiaWF0IjoxNjg2NjQ0MjAyfQ.4HhnNyTKj0Kud_6N3ZZbe-5TcJipTBIJgAa51PsdvoI"
  );
  return <LoggedInRouter />;
}

export default App;
