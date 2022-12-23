import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./HomePage.css"
import DemoCarousel from './test';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductsList from '../Products/ProductsList';
import { Image } from '@mui/icons-material';

const HomeMain = () => {
    return (
        <Box className='fon'>
        <React.Fragment >
          <CssBaseline />
          <Container fixed >
            <Box className="divOne" sx={{ height: '100vh', marginTop: "10px", borderRadius: "5px", boxShadow: "30px -16px #ffd165" }}>
                <div>
                    <div className='home'>
                        <h1>Магазин "иди сюда"</h1>
                        <p>Добро пожаловать в наш интернет-магазин техники! Здесь вы найдете все необходимое для обновления и автоматизации вашей жизни. У нас есть самые современные технологии и высококачественные устройства, подходящие для любого бюджета. Наша команда предлагает профессиональную консультацию и помощь в подборе продуктов, которые отвечают вашим потребностям. Свяжитесь с нами сегодня и начните процесс автоматизации своей жизни!</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <Link className='linkButton' to="/products"><Button variant="contained">Get started</Button></Link>
            </Box>

            <Box sx={{height: '100vh', marginTop: "15px", borderRadius: "5px", boxShadow: "30px -16px teal" }}>
            <DemoCarousel/>
            </Box>
          </Container>
        </React.Fragment>
        </Box>
      );
};

export default HomeMain;