import React from 'react'
import "./results.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useResults } from '../../ResultsContext';


const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'moduleName',
    headerName: 'Module name',
    width: 300,
    editable: true,
  },
  {
    field: 'examName',
    headerName: 'Exam name',
    width: 250,
    editable: true,
  },
  {
    field: 'grade',
    headerName: 'Grade',
    width: 100,
    editable: true,
  },
];



const Results = () => {
  const { results } = useResults();
  // Map over the results data and format it for the table
  const rows = results.map((result) => ({
    id: result.id,
    moduleName: result.moduleName,
    examName: result.examName,
    grade: result.grade,
  }));

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
          <Navbar />
          <div className="resultsTable">
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </div>
      </div>
    </div>
  )
}

export default Results