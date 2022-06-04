import * as React from 'react';
import { Drawer } from '@material-ui/core';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Admin = (props) => {
    const { isDrawerOpen, CloseDrawer } = props;
    return (
        <Drawer
            anchor='left'
            open={isDrawerOpen}
            onClose={CloseDrawer}
        >
        
                <Box sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
            <List sx={{ width: '400px' }}>
                <ListItem component={Link} to={'/'}>
                    <ListItemText primary="Тестирование online" align="center"/>
                </ListItem>
                <ListItemButton>
                    <ListItemText primary="Тесты" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Тестирование" />
                </ListItemButton>
                <ListItemButton component={Link} to={'/Specialities'}>
                    <ListItemText primary="Специальности" />
                </ListItemButton>
                <ListItemButton component={Link} to={'/Users'}>
                    <ListItemText primary="Пользователи" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="группы" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Результаты" />
                </ListItemButton>
            </List>
            <Divider />
            <List>
                <ListItemButton component={Link} to={'/TestCreate'}>
                    <ListItemText primary="Создать тест" />
                </ListItemButton>
                <ListItemButton component={Link} to={'/UserCreate'}>
                    <ListItemText primary="Зарегистрировать пользователя" />
                </ListItemButton>
                <ListItemButton component={Link} to={'/GroupCreate'}>
                    <ListItemText primary="Добавить группу" />
                </ListItemButton>
                <ListItemButton component={Link} to={'/SpecialityCreate'}>
                    <ListItemText primary="Добавить Специальность" />
                </ListItemButton>
            </List>
            </Box>
        </Drawer >
    )
}

export { Admin };