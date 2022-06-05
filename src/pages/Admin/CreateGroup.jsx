import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/material';


const endpoint = 'http://localhost/api'

const CreateGroup = () => {
    const [Specialities, setSpecialities] = useState([])

    useEffect(() => {
        getAllSpecialities()
    }, [])


    const getAllSpecialities = async () => {
        const response = await axios.get(`${endpoint}/specialities`)
        setSpecialities(response.data)
    }


    const [name, setName] = useState('')
    const [speciality_id, setSpeciality_id] = useState('')
    const Navigate = useNavigate()


    const store = async (e) => {
        try {
            e.preventDefault()
            await axios.post(`${endpoint}/group`, { name: name, speciality_id: speciality_id })
            Navigate('/');
        } catch (e) {
            console.log(e.response)

        } finally {

        }
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed >
                <Typography mt={4} mb={1} variant="h4" color="initial" align="center">Создать группу</Typography>
                <Divider />
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={store}
                >
                    <Stack spacing={2} justifyContent="center">
                        <TextField fullWidth label="Название" size="small" value={name} onChange={(e) => setName(e.target.value)} />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={Specialities}
                            fullWidth
                            renderInput={(params) => <TextField {...params} label="Специальности" size='small' />}
                            getOptionLabel={(option) => `${option.code} ${option.name}`}
                            onChange={(event, value) => setSpeciality_id(value.id)}
                        />
                    </Stack>
                    <Stack justifyContent="space-between" direction="row" mt={3}>
                        <Button variant="contained" color="error" component={Link} to={'/'}>Отмена</Button>
                        <Button variant="contained" color="success" type='submit'> Создать</Button>
                    </Stack>
                </Box>
            </Container>
        </React.Fragment>
    )
}


export { CreateGroup };