import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import  '../../components/ContactUs/contact.css'
import './contact.css'


const ContactsUs = () => {
    return (
      <Box>
        <Grid sx={{display: 'flex', justifyContent: 'center'}}>
            <h1 style={{marginTop: '30px', background:'#1976d2', width: '100%',  textAlign: 'center', color: "#fff", fontFamily: '"Roboto","Helvetica","Arial",sans-serif', boxShadow: '0 1px 10px 3px #1976d2,', fontWeight: 400}}>Информация</h1>

         </Grid>

            
         <div className='block__video'>

            <video  autoPlay  loop src=
        'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/ByZVUTp1Gja5fwdxr/videoblocks-shanghai-china-september-28-2019-people-inside-the-apple-store-at-nanjing-street-crowd-people-on-presentation-of-the-iphone-11-pro-and-sales-of-new-apple-products-in-the-official-apple-store-in_hympa5e68__e2c52cdcf2f1ff7e9797746b6a1fac56__P360.mp4'></video>
                    </div>
                 

         <div style={{display: 'flex',marginTop: '50px', justifyContent: 'center' }}>
            <div className='block__nav' style={{display: 'flex',width: '100%', padding: '5px', justifyContent: 'space-around',fontSize: '20px', fontWeight: 600, borderTop: '1px solid black'}}>
            <p>Номера</p>
            <p>Режим работы</p>
            <p>Филлиалы</p>
            </div>
            </div>
            
                <div className='block'> 
                <div className='info'>
                    <div id='phone' ></div>
                    <p style={{fontWeight: 600, fontSize: '18px'}}>Смартфоны и аксессуары:</p>
                    <p style={{color: 'gray'}}>+(996) 706891054; 559891054</p>
                    <p style={{fontWeight: 600, fontSize: '18px'}}>Компьютеры и телевизоры:</p>
                    <p>+(996) 505891054</p>
                    <p style={{fontWeight: 600, fontSize: '18px'}}>Гаджеты и товары для молодёжи:</p>
                    <p>+(996) 704891054</p>
                    <p style={{fontWeight: 600, fontSize: '18px'}}>Сервис центр "ТехноКом":<br/>ТЦ Весна отдел C42</p>
                    <p>+(996) 705891054; 709306507</p>
                    </div>
                <div  className='info'>
                    <div id='time' ></div>
                    <p style={{fontWeight: 600, fontSize: '18px'}}>Режим работы</p>
                    <p style={{color: 'gray'}}>Отдел продаж:</p>
                    <p style={{fontWeight: 600, fontSize: '18px'}}>с 10:00 до 20:00 Без выходных</p>
                    <p>Сервис центр :</p>
                    <p style={{fontWeight: 600, fontSize: '18px'}}>с 10:00 до 20:00 Без выходных</p>
                   
                    </div>
                <div className='info'>
                    <div id='home' ></div>
                    <p style={{fontWeight: 600, fontSize: '18px'}}>Магазин SOFTECH.KG</p>
                    <p style={{color: 'gray'}}>Кыргызстан г. Бишкек <br/>ㅤул. Киевская 168, 720001</p>
                    <p style={{fontWeight: 600, fontSize: '18px'}}>Предложения и жалобы:</p>
                    <p>director@softech.kg</p>
                   
                    </div>
                    </div>

                   
                
                    <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.8868886381983!2d74.5832243153885!3d42.87523151040394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec83d9955c4b5%3A0x5d36dcab420bc180!2sSoftech.kg!5e0!3m2!1sru!2skg!4v1671702262352!5m2!1sru!2skg"  style={{width:'80%', height: '550px', border: '0px', marginBottom: '50px'}}></iframe></div>

          
      </Box>
    );
};

export default ContactsUs;