import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Users from './modules/Users/Users'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  )
}

export default App
