import React from 'react'
import "./modules.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useModules } from '../../ModulesContext';


const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Module name',
    width: 250,
    editable: true,
  },
  {
    field: 'instructor',
    headerName: 'Teacher name',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Module details',
    width: 500,
    editable: true,
  },
];



const Modules = () => {
  const { modules } = useModules();
  // Map over the modules data and format it for the table
  const rows = modules.map((module) => ({
    id: module.id,
    name: module.name,
    instructor: module.instructor,
    description: module.description,
  }));

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
          <Navbar />
          <div className="modulesTable">
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

export default Modules