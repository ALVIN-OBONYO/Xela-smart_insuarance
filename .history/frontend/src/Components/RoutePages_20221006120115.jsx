import React from 'react'
import { Routes, Route} from 'react-router-dom'
import EntryPage from '../Pages/Entrypage'
import PolicyMaker from '../Pages/Policies'
import ReportForm from '../Pages/ReportForm'
import Report from '../Pages/Report'
import ReportInfo from '../Pages/ReportInfo'
import FormPagination from './FormPagination'
const RoutePages = () => {
    return (
        

   <Routes>

    <Route exact path="/" element={<EntryPage />} />
    <Route path="policy" element={<PolicyMaker />} />
    
    <Route path="report" element={<Report/> } >
       <Route path="2" element={<ReportForm />} />
       <Route path="3" element={<ReportInfo />} /> 
       <Route path="*" element={<FormPagination />} />

    </Route>
    
   </Routes>
   
  
    )
}

export default RoutePages