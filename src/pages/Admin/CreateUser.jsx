import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/material';



const endpoint = 'http://localhost/api'

const CreateUser = () => {

    const [Groups, setGroups] = useState([])

    useEffect(() => {
        getAllGroups()
    }, [])


    const getAllGroups = async () => {
        const response = await axios.get(`${endpoint}/groups`)
        setGroups(response.data)
    }


    const role = [{ id: '1', name: 'Админ' },
    { id: '2', name: 'Студент' }]


    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user_group_id, setUser_group_id] = useState('')
    const [role_id, setRole_id] = useState('')
    const Navigate = useNavigate()

    const store = async (e) => {
        try {
            e.preventDefault()
            await axios.post(`${endpoint}/register`, {firstName: firstName ,  lastName: lastName, patronymic: patronymic , user_group_id: user_group_id ,role_id: role_id , email: email , password: password})
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
                <Typography mt={4} mb={3} variant="h4" color="initial" align="center">Зарегистрировать пользователя</Typography>
                <Divider />
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={store}
                >
                <Stack spacing={2} justifyContent="center">
                    <TextField fullWidth label="Имя" size="small" value={firstName} onChange={(e) => setfirstName(e.target.value)}/>
                    <TextField fullWidth label="Фамилия" size="small"  value={lastName} onChange={(e) => setlastName(e.target.value)}/>
                    <TextField fullWidth label="Отчество" size="small" value={patronymic} onChange={(e) => setPatronymic(e.target.value)} />
                    <TextField fullWidth label="Email" size="small" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <TextField fullWidth label="Пароль" size="small" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Groups}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Группа" size='small' />}
                        getOptionLabel={(option) => `${option.name}`}
                        onChange={(event, value) => setUser_group_id(value.id)}
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={role}
                        defaultValue={role[1]}
                        sx={{ width: 300 }}
                        getOptionLabel={(option) => `${option.name}`}
                        renderInput={(params) => <TextField {...params} label="Роль" size='small' />}
                        onChange={(event, value) => setRole_id(value.id)}
                    />

                </Stack>
                <Stack justifyContent="space-between" direction="row" mt={3}>
                    <Button variant="contained" color="error" component={Link} to={'/'}>Отмена</Button>
                    <Button variant="contained" color="success" type='submit'>Зарегистрировать</Button>
                </Stack>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export { CreateUser };