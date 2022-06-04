// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

import axios from 'axios';



const endpoint = 'http://localhost/api/test'




const CreateTest = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const Navigate = useNavigate()


    const store = async (e) => {



        try {
            e.preventDefault()
            await axios.post(endpoint, { name: name, description: description })
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
                <Typography mt={4} mb={1} variant="h4" color="initial" align="center">Создать тест</Typography>
                <Divider />
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={store}
                >
                    <Stack spacing={2} justifyContent="center">
                        <TextField fullWidth label="Наименоование" size="small" value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField fullWidth label="Описание" size="small" multiline minRows={8} value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Stack>
                    <Stack justifyContent="space-between" direction="row" mt={3}>
                        <Button variant="contained" color="error" component={Link} to={'/'}>Отмена</Button>
                        <Button variant="contained" color="success" type='submit'>Создать</Button>
                    </Stack>
                </Box>
            </Container>
        </React.Fragment>
    )
}


export { CreateTest };