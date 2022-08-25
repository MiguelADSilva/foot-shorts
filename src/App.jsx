import { ThemeProvider } from "styled-components"
import { Route, Routes } from 'react-router-dom';

import { Highlights, Notices } from './Pages/indexPages'

import theme from './theme/default'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path='/' element={<Highlights />} />
          <Route path='/notices' element={<Notices />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
