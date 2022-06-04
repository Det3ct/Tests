import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



const endpoint = 'http://localhost/api'

export default function FixedContainer() {

    const [Tests, SetTests] = useState([])

    useEffect(() => {
        getAllTests()

    }, [])


    const getAllTests = async () => {
        const response = await axios.get(`${endpoint}/tests`)
        SetTests(response.data)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed >
                <Typography mt={4} mb={1} variant="h4" color="initial" align="center">Список всех тестов</Typography>
                <Divider />
                <TextField fullWidth label="Поиск" id="fullWidth" margin="normal" />

                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {Tests.map((test) => (
                        <ListItem
                            disableGutters
                            divider
                        >
                            <ListItemText
                                primary={test.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {test.description}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Container>
        </React.Fragment>
    );
}