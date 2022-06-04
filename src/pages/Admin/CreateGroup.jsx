import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import axios from 'axios';



const endpoint = 'http://localhost/api'

const CreateGroup = () => {
    const [Specialities , setSpecialities] = useState([])

    useEffect( () => {
        getAllSpecialities()
    }, [])


    const getAllSpecialities = async () => {
        const response = await axios.get(`${endpoint}/specialities`)
        setSpecialities(response.data)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed >
                <Typography mt={4} mb={1} variant="h4" color="initial" align="center">Создать группу</Typography>
                <Divider />
                <Stack spacing={2} justifyContent="center">
                    <TextField fullWidth label="Название" size="small" />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Specialities}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Специальности" size='small' />}
                        getOptionLabel={(option) => `${option.name}`}
                    />
                </Stack>
                <Stack justifyContent="space-between" direction="row" mt={3}>
                    <Button variant="contained" color="error" component={Link} to={'/'}>Отмена</Button>
                    <Button variant="contained" color="success">Создать</Button>
                </Stack>
            </Container>
        </React.Fragment>
    )
}

export { CreateGroup };