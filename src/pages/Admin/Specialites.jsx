import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Container } from '@mui/material';
import axios from 'axios';


const endpoint = 'http://localhost/api'



const columns = [
    { field: 'id', headerName: 'ID', width: 70 ,editable:true },
    { field: 'name', headerName: 'Наименование', width: 230 ,editable:true},
    { field: 'code', headerName: 'Код специальности', width: 230,editable:true }
];


export default function DataTable() {
    const [Specialities , setSpecialities] = useState([])

    useEffect( () => {
        getAllSpecialities()
        
    }, [])


    const getAllSpecialities = async () => {
        const response = await axios.get(`${endpoint}/specialities`)
        setSpecialities(response.data)
    }
    // const handleCellClick = (param, event) => {
    //     console.log(param);
    //     console.log(event);
    //     if (param.colIndex === 2) {
    //       event.stopPropagation();
    //     }
    //   };
      
    //   const handleRowClick = (param, event) => {
    //     console.log("Row:");
    //     console.log(param);
    //     console.log(event);
    //   };

        // const handleCommit = (e:GridCellEditCommitParams) => {
        //     const array = Specialities.map(r =>{
        //         if(r.id === e.id){
        //             return {...r,[e.field]:e.value}
        //         } 
        //         else{
        //             return {...r}
        //         }
        //     })
        // }


    return (

        <Container fixed align="center">

            <div style={{ width: '100%' }}>
                <DataGrid
                    rows={Specialities}
                    columns={columns}
                    pageSize={10}
                    autoHeight
                    components={{Toolbar: GridToolbar}}
                    rowsPerPageOptions={[5]}
                    checkboxSelection

                    // onCellEditCommit={(params: GridCellEditCommitParams) => {
                        
                    //   }}
                    // onCellClick={handleCellClick}
                    // onRowClick={handleRowClick}
                />
                
            </div>

        </Container >

    );
}