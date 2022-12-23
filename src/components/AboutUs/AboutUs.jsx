import React from "react";
import "./AboutUs.css";
// https://www.youtube.com/watch?v=kwlOAeFLKH0

const AboutUs = () => {
  return (
    <div>
      <video id="background-video" loop autoPlay muted>
        <source src={require("./videoplayback.mp4")} type="video/mp4" />
      </video>
      <div className="div">
        <h2 className="h2">О НАС</h2>
        <br />
        <h4 className="h4">Добро пожаловать на 70-80</h4>
        <br />
        <p className="p p-1">
          Интернет магазин www.70-80.kg начал действовать 30 декабря 2010 года.
          Основными мотивами создания магазина стало отсутствие возможности
          приобрести широкий ассортимент проверенных надежных товаров в одном
          месте, неоправданно высокие розничные цены из за отсутствие
          оптимизации товара конечному покупателю, а также низкий уровень
          сервиса на рынке. Таким образом, миссией www.70-80.kg является:
          предоставить широкий ассортимент товаров по лучшей цене и при этом
          обслуживание превзошло ожидания наших клиентов. 70-80 предлагает на
          сегодняшний день около 1000 наименований продукции и услуг.
        </p>
        <br />
        <p className="p p-2">
          Интернет магазин 70-80 сегодня – это Ваш центр покупок, где Вы можете
          приобрести более широкий ассортимент качественных товаров и услуг.
          Здесь Вы можете быть уверены, что получите товар самого
          оптимизированного по цене и в качестве. Мы сокращаем до минимума ваши
          расходы времени и денег. В тоже время, мы предлагаем Вам больше
          обзоров товаров, рецензий, а также информации о товарах, чтобы Вы были
          уверены, что принимаете наилучшее решение на основе полной информации.
          При этом, значительную роль играют отзывы и оценки самих покупателей.
          Вы также можете оформить и получить свой заказ в нашем офисе,
          находящимся в самом центре города Бишкек, в торговом центре Весна
          (Makers.kg).
        </p>
        <br />
        <p className="p ">
          Интернет магазин 70-80 постоянно улучшается и привносит инновации в
          свою деятельность, чтобы улучшить опыт покупки в магазине до
          невиданных горизонтов. Клиенты, однажды посещавшие сайт в начале
          деятельности и сегодня, удивляются разительным улучшениям и скорости
          изменений нашего Интернет магазина. Мы благодарны всем клиентам,
          которые прошли трудные моменты развития предприятия и с пониманием
          относились к сложностям и, казалось бы, непреодолимым барьерам,
          возникавшим на пути развития 70-80
        </p>
        <br />
        <p className="p">
          При этом, вам не приходится выходить за пределы вашего офиса либо
          дома, когда на улице ужасно холодно либо знойно жарко. Вы оформляете
          заказ, указывая любое место и время доставки для Вас.
        </p>
        <br />
        <p className="p">
          Онлайн консультант всегда может Вам помочь при выборе товаров,
          порекомендовать из нескольких представленных на сайте, и просто решить
          ваши проблемы. Ведь Онлайн консультант создан специально для того,
          чтобы предлагать Вам решения, связанных с покупкой товаров на 70-80!
        </p>
        <br />
        <p className="p">
          Мы будем рады, что Вы присоединитесь в сообщество 70-80 и станете его
          неотъемлемой частью. Ведь 70-80 это магазин, созданный специально,
          чтобы воплотить ваши желания и мечты!
        </p>
        <br />
        <p className="p">
          Добро пожаловать в Интернет магазин www.70-80.kg! Присоединяйтесь!
        </p>
        <br />
        <h2>Наш Топ-новинок</h2>
        <div className="img-div">
          <img
            src={require("./pngwing.com.png")}
            alt=""
          />
          <img
            src={require("./pngwing.com1.png")}
            alt=""
          />
          <img
            src={require("./pngwing.com2.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;