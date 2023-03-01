import { Container } from "@mui/system"
import Display from "./components/Display"
import Keypad from "./components/Keypad"

function App() {
  return (
    <Container maxWidth="sm" sx={{ marginTop: "30px" }}>
      <Display />
      <Keypad />
    </Container>
  )
}

export default App
