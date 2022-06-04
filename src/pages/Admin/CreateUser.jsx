import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';
import axios from 'axios';



const endpoint = 'http://localhost/api'

const CreateUser = () => {

    const [Specialities , setSpecialities] = useState([])

    useEffect( () => {
        getAllSpecialities()
    }, [])


    const getAllSpecialities = async () => {
        const response = await axios.get(`${endpoint}/specialities`)
        setSpecialities(response.data)
    }


    const role = [{ label: 'Админ'},
    { label: 'Студент'}]

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed >
                <Typography mt={4} mb={3} variant="h4" color="initial" align="center">Зарегистрировать пользователя</Typography>
                <Divider />
                <Stack spacing={2} justifyContent="center">
                    <TextField fullWidth label="Имя" size="small" />
                    <TextField fullWidth label="Фамилия" size="small" />
                    <TextField fullWidth label="Отчество" size="small" />
                    <TextField fullWidth label="Email" size="small" />
                    <TextField fullWidth label="Пароль" size="small" />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Specialities}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Специальность" size='small' />}
                        getOptionLabel={(option) => `${option.name}`}
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={role}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Роль" size='small' />}
                        defaultValue={role[1]}
                    />

                </Stack>
                <Stack justifyContent="space-between" direction="row" mt={3}>
                    <Button variant="contained" color="error" component={Link} to={'/'}>Отмена</Button>
                    <Button variant="contained" color="success">Зарегистрировать</Button>
                </Stack>
            </Container>
        </React.Fragment>
    )
}

export { CreateUser };