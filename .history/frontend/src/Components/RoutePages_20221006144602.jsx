import React from 'react'
import { BrowserRouter, Routes, Route, MemoryRouter} from 'react-router-dom'
import EntryPage from '../Pages/Entrypage'
import PolicyMaker from '../Pages/Policies'
import ReportForm from '../Pages/ReportForm'
import Report from '../Pages/Report'
import ReportInfo from '../Pages/ReportInfo'
import FormPagination from './FormPagination'

const RoutePages = () => {
    return (
    <>    
  <BrowserRouter>
   <Routes>

    <Route exact path="/" element={<EntryPage />} />
    <Route path="policy" element={<PolicyMaker />} />
    <Route path="report" element={<ReportForm />} />
        
   </Routes>
   
  </BrowserRouter>
  {/* <MemoryRouter initialEntries={['/report']} initialIndex={1}>
          <Routes>
            <Route path="?page=2" element={<ReportInfo />} />
            <Route path="?page=3" element={<ReportForm />} /> 
            <Route path='*' element={<FormPagination/>} />
          </Routes>
       </MemoryRouter> */}
  </>
    )
}

export default RoutePages