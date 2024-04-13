import React from 'react'
import "./exams.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useExams } from '../../ExamsContext';


const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Exam name',
    width: 250,
    editable: true,
  },
  {
    field: 'moduleName',
    headerName: 'Module name',
    width: 300,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 100,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Exam details',
    width: 250,
    editable: true,
  },
];



const Exams = () => {
  const { exams } = useExams();
  // Map over the exams data and format it for the table
  const rows = exams.map((exam) => ({
    id: exam.id,
    name: exam.name,
    moduleName: exam.moduleName,
    date: exam.date,
    description: exam.description,
  }));

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
          <Navbar />
          <div className="examsTable">
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

export default Exams