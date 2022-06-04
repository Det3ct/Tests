import React, { Component } from 'react';
import Container from '@mui/material/Container';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { DataGrid } from '@mui/x-data-grid';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.user
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'firstName', headerName: 'Имя', width: 130 },
      { field: 'lastName', headerName: 'Фамилия', width: 130 },
      { field: 'patronymic', headerName: 'Отчество', width: 130 },
      { field: 'email', headerName: 'Email', width: 130 },
      { field: 'group', headerName: 'Группа', width: 130 },
      { field: 'role', headerName: 'Роль', width: 130 }
    ];
    
    const { error, isLoaded , items} = this.state;
    if (error) {
      return <Container align="center" fixed><div  >Ошибка: {error.message}</div></Container>;
    } else if (!isLoaded) {
      return <Container fixed align="center"><div><CircularProgress />

      </div></Container>;
    } else {
      return (

        <Container fixed>
                  {      console.log(items)}
          <div style={{width: '100%' }}>
            <DataGrid
              rows={items}
              columns={columns}
              disableSelectionOnClick
              autoHeight
              disableColumnMenu              
            />
          </div>
        </Container>
      );
    }
  }
}