import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"
import {App} from './App'
import {store} from "./store/ReduxStore"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import 'react-loading-skeleton/dist/skeleton.css'

const queryClient = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false}}})
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}><App/></Provider>
  </QueryClientProvider>
)
