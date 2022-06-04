import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

const endpoint = 'http://localhost/api/speciality'

const CreateSpec = () => {

    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, { name: name, code: code })
        navigate('/');
    }
    return (
        <>
            <CssBaseline />
            <Container fixed >
                <Typography mt={4} mb={1} variant="h4" color="initial" align="center">Создать специальность</Typography>
                <Divider />
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={store}
                >
                    <Stack spacing={2} justifyContent="center">
                        <TextField fullWidth label="Наименоование" size="small" value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField fullWidth label="Код специальности" size="small" value={code} onChange={(e) => setCode(e.target.value)} />
                    </Stack>
                    <Stack justifyContent="space-between" direction="row" mt={3}>
                        <Button variant="contained" color="error" component={Link} to={'/'}>Отмена</Button>
                        <Button variant="contained" color="success" type='submit'>Создать</Button>
                    </Stack>
                </Box>
            </Container>
        </>
    )
}


export default CreateSpec