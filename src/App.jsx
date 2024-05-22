import { Box, CSSReset, ChakraProvider, Text } from '@chakra-ui/react'
import { PomdoroTimer } from './components/PomodoroTimer'

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box textAlign="center" fontSize="xl" mt="4">
        <Text>Pomodoro</Text>
        <PomdoroTimer />
      </Box>
    </ChakraProvider>
  )
}

export default App
