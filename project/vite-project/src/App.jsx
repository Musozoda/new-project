import "./App.css";
import logo from "./images/Frame.png";
import down from "./images/ant-design_down-outlined.png";
import blum from "./images/blum_logo 1.png";
import hafele from "./images/hafele_logo 1.png";
import salice from "./images/salice_a5bc6fcc-bbdd-49f7-ad1f-d749fb9ef1f2_grande 1.png";
import search from "./images/search.png";
import menu from "./images/menu.png";
import vector from "./images/Vector.png";
import vector1 from "./images/Vector (1).png";
import rectangle57 from "./images/Rectangle 57.png";
import rectangle72 from "./images/Rectangle 72.png";
import rectangle59 from "./images/Rectangle 59.png";
import rectangle67 from "./images/Rectangle 67.png";
import rectangle66 from "./images/Rectangle 66.png";
import component5 from "./images/Component 5.png";
import group200 from "./images/Group 200.png";
import group194 from "./images/Group 194.png";
import group195 from "./images/Group 195.png";
import group196 from "./images/Group 196.png";
import onas from "./images/o_nas 1.png";
import union from "./images/Union.png";
import Card from "./components/Card.jsx";
import Card2 from "./components/Cards2/Card2.jsx";
import Card3 from "./components/card3/Card3.jsx";

function App() {
  return (
    <div className="">
      <header className="container1 bg-[#424047] text-white relative z-10">
        <div className="container11 relative z-10 pb-[123px]">
          <nav className="flex items-center lg:justify-between gap-[146px] xl:gap-[100px] mb-[160px] p-[31px_52px]">
            <img src={logo} alt="" />
            <div className="flex gap-[52px] items-center">
              < div className="flex lg:hidden gap-[42px] items-center">
                <div className="flex items-center gap-[7px]">
                  Каталог
                  <img src={down} alt="" />
                </div>

                <div className="flex items-center gap-[7px]">
                  Услуги
                  <img src={down} alt="" />
                </div>
                <p>Акции/Сидки</p>
              </div>
              <div className=" lg:hidden">Шоурумы</div>
              <div className="flex lg:hidden gap-[38px]">
                <span>О нас</span>
                <span>Контакты</span>
              </div>

              <div className="flex gap-[54px] items-center">
                <img src={search} alt="" />
                <img src={menu} alt="" />
              </div>
            </div>
          </nav>
          <div className="flex flex-col gap-[129px] lg:relative lg:top-[300px] lg:items-center">
            <div className="flex flex-col gap-[36px] lg:items-center">
              <h1 className="font-[500] text-[67px] leading-[79px] max-w-[780px] lg:text-center">
                Единство в интерьередля создания гармоничного дизайна
              </h1>
              <button className="w-[281px] h-[74px] bg-[#BC1D4A] flex items-center justify-center">
                Подробнее
              </button>
            </div>
            <div className="flex flex-col ">
              <p className="font-[500] text-[18px] ">
                Экслюзивная мебельная фуритура от
              </p>
              <div className="flex  items-center gap-[23px]">
                <img src={blum} alt="" />
                <img src={hafele} alt="" />
                <img src={salice} alt="" />
              </div>
            </div>
          </div>
        </div>

        <img
          src={rectangle57}
          className="absolute top-[25.7%] lg:top-[12%] lg:w-[100%] lg:h-[400px] right-[0] w-[800px] h-[600px] z-[-1]"
          alt=""
        />
        <div className="bg-[#BC1D4A] xl:hidden absolute top-[0] right-[0] z-[-1] p-[27px_47px]">
          <img src={group200} className="" alt="" />
        </div>

        <img
          src={vector}
          className="absolute top-0 h-[100%] left-[40%]"
          alt=""
        />
      </header>
      <section className="container1">
        <div className="container11 flex flex-col gap-[72px] p-[99px_0_180px_0]">
          <div className="flex flex-col gap-[74px]">
            <h1 className="font-[500] text-[36px] text-center">Продукция</h1>
            <ul className="font-[500] text-[18px] text-[#424047] flex gap-[87px] items-start justify-center">
              <li>Фартуки</li>
              <li className=" border-b-[1px] border-[solid] border-[#BC1D4A] pb-[18px]">
                Фартуки матовые
              </li>
              <li>Алюминевые профили</li>
              <li>Фартуки матовые</li>
            </ul>
          </div>
          <div className="flex justify-between overflow-x-hidden lg:flex-wrap">
            <Card image={rectangle59} text="Белые сотые" />
            <Card image={rectangle59} text="Белые сотые" />
            <Card image={rectangle59} text="Белые сотые" />
            <Card image={rectangle59} text="Белые сотые" />
          </div>
          <div className="h-[6px] bg-[#C4C4C4] w-[100%] bg-opacity-[0.1]">
            <div className="h-[100%] w-[342px] m-auto bg-[#C4C4C4] opacity-[0.3]"></div>
          </div>
        </div>
      </section>
      <section className="container1">
        <div className="container11 flex pb-[179px] lg:flex-wrap gap-y-[50px]">
          <div className="w-[60%] flex flex-col gap-[99px]">
            <h1 className="font-[500] text-[36px]">Услуги</h1>
            <div className="flex flex-wrap gap-[4%] gap-y-[30px] lg:gap-[50px]">
              <Card2
                image={vector1}
                texth1="Распиловка"
                textp="Если вы приобрели у нас материалы, то воспользуйтесь услугой распила! "
              />
              <Card2
                image={vector1}
                texth1="Распиловка"
                textp="Если вы приобрели у нас материалы, то воспользуйтесь услугой распила! "
              />
              <Card2
                image={vector1}
                texth1="Распиловка"
                textp="Если вы приобрели у нас материалы, то воспользуйтесь услугой распила! "
              />
              <Card2
                image={vector1}
                texth1="Распиловка"
                textp="Если вы приобрели у нас материалы, то воспользуйтесь услугой распила! "
              />
            </div>
          </div>
          <div className="w-[30%] lg:w-[100%]">
            <img src={onas} className="w-[100%]" alt="" />
          </div>
        </div>
      </section>
      <section className="container1 bg-[#424047] text-white relative">
        <div className="container11 p-[120px_0_136px_0] flex flex-col gap-[119px]">
          <h1 className="font-[500] text-[36px] text-center">
            Почему именно мы?
          </h1>
          <div className="flex justify-between items-center lg:flex-wrap">
            <Card3
              image={component5}
              textp="Качественных 
материалов"
            />
            <Card3
              image={component5}
              textp="Качественных 
материалов"
            />{" "}
            <Card3
              image={component5}
              textp="Качественных 
материалов"
            />{" "}
            <Card3
              image={component5}
              textp="Качественных 
материалов"
            />{" "}
            <Card3
              image={component5}
              textp="Качественных 
материалов"
            />{" "}
            <Card3
              image={component5}
              textp="Качественных 
материалов"
            />
          </div>
        </div>
        <img
          src={union}
          className=" absolute top-0 w-[80%] left-[7%] h-[100%]"
          alt=""
        />
      </section>
      <section className="container1">
        <div className="container11 p-[180px_0_0_0] lg:flex lg:flex-col lg:items-center lg:flex-wrap">
          <div className="flex items-start justify-between lg:flex-wrap">
            <div className="flex flex-col gap-[48px] lg:w-[100%] lg:items-center">
              <h1 className="font-[500] text-[36px] lg:text-center">Про ASIADECOR </h1>
              <p className="font-[400] text-[18px] leading-[26px] max-w-[719px] lg:text-center lg:pb-[20px]">
                Нашим знаком качества «ASIADECOR» мы гарантируем неизменно
                высокий стандарт качества продукции. Мы определяем стандартные
                характеристики продукта и технологических процессов и выбираем
                однотипное производственное оборудование. Кроме того, мы
                стремимся существенно отличаться благодаря сервису,
                ориентированному на клиента, и постоянно поддерживаемым
                контактам с клиентаsми и партнерами.
              </p>
            </div>
            <img src={rectangle67} className="lg:w-[100%]" alt="" />
          </div>
          <div className="flex lg:w-[100%]">
            <img className="w-[60.8%] lg:hidden" src={rectangle66} alt="" />
            <div className="font-[400] text-[18px] w-[39.3%] leading-[26px] flex items-center bg-[#BC1D4A] lg:w-[100%] lg:py-[100px]">
              <p className="max-w-[429px] mx-auto">
                {" "}
                Наша цель - сложные решения в области разработки декоров,
                технологий переработки и консультирования по вопросам дизайна.
                Благодаря этому за три с половиной десятилетия мы создали
                зарекомендовавший себя в отрасли эталон качества «ASIADECOR».
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container1 bg-[#FBFAFA]">
        <div className="container11 flex flex-col gap-[90px] py-[140px]">
          <h1 className="font-[500] text-[36px] text-[#424047] text-center">
            4 преимущства работы с ASIADECOR{" "}
          </h1>
          <div className="flex items-center justify-around">
            <div>
              <h1 className="font-[300] text-[59px] text-[#BC1D4A]">20 лет</h1>
              <p className="font-[400] text-[16px] text-[#424047]">
                Успешной работы
              </p>
            </div>
            <div>
              <h1 className="font-[300] text-[59px] text-[#BC1D4A]">100</h1>
              <p className="font-[400] text-[16px] text-[#424047]">
                Успешных проектов
              </p>
            </div>
            <div>
              <h1 className="font-[300] text-[59px] text-[#BC1D4A]">100</h1>
              <p className="font-[400] text-[16px] text-[#424047]">
                Ассортиментов
              </p>
            </div>
            <div>
              <h1 className="font-[300] text-[59px] text-[#BC1D4A]">24/7</h1>
              <p className="font-[400] text-[16px] text-[#424047]">
                Техническая поддержка
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container1">
        <div className="container11 flex flex-col gap-[72px] p-[99px_0_180px_0]">
          <h1 className="font-[500] text-[36px] text-center">
            Лучшее предложение
          </h1>
          <div className="flex justify-between">
            <Card image={rectangle59} text="Белые сотые" />
            <Card image={rectangle59} text="Белые сотые" />
            <Card image={rectangle59} text="Белые сотые" />
            <Card image={rectangle59} text="Белые сотые" />
          </div>
          <div className="h-[6px] bg-[#C4C4C4] w-[100%] bg-opacity-[0.1]">
            <div className="h-[100%] w-[342px] m-auto bg-[#C4C4C4] opacity-[0.3]"></div>
          </div>
        </div>
      </section>
      <section className="container1 relative z-10">
        <div className="container11 p-[74px_0_150px_0]">
          <div className="flex flex-col gap-[129px]">
            <div className="flex flex-col gap-[83px]">
              <div className="max-w-[672px] flex flex-col gap-[46px]">
                <h1 className="font-[500] text-[36px] leading-[47px]">
                  Оборудование мебельной промышленности
                </h1>

                <div className="flex flex-col gap-[20px]">
                  <p>
                    Оборудование для мебельной промышленности – это целый
                    комплекс, состоящий из автоматического, механического и
                    ручного инструментария, который используется для обработки
                    различных материалов, использующихся при изготовлении
                    различных мебельных изделий.
                  </p>
                  <p>
                    {" "}
                    Мы готовы предоставить на ваш выбор современное оборудование
                    мебельной промышленности от производителей из разных стран.
                  </p>
                </div>
              </div>

              <button className="w-[281px] text-white h-[74px] bg-[#BC1D4A] flex items-center justify-center">
                Подробнее
              </button>
            </div>
          </div>
        </div>
        <img
          src={rectangle72}
          className="absolute top-[0] right-[0]  h-[100%] z-[-1]"
          alt=""
        />
      </section>
      <section className="container1">
        <div className="container11 py-[180px] flex flex-col gap-[70px]">
          <h1 className="font-[500] text-[36px] text-[#424047]">
            {" "}
            Наши Партнёры
          </h1>
          <div className="flex items-center justify-between lg:flex-wrap">
            <img src={blum} alt="" />
            <img src={hafele} alt="" />
            <img src={salice} alt="" />
            <img src={blum} alt="" />
            <img src={hafele} alt="" />
            <img src={salice} alt="" />
            <img src={blum} alt="" />
          </div>
        </div>
      </section>
      <footer className="container1 bg-[#424047] text-[white]">
        <div className="container11 p-[115px_0_84px_0] lg:flex-wrap">
          <div className="flex justify-between items-start lg:flex-wrap">
            <img src={logo} alt="" />
            <ul className="flex flex-col gap-[26px] max-w-max">
              <li className="font-[500] text-[18px]">О компании</li>
              <li className="font-[500] text-[18px]">Сертификаты</li>
              <li className="font-[500] text-[18px]">Юридическим лицам</li>
              <li className="font-[500] text-[18px]">Реквизиты</li>
              <li className="font-[500] text-[18px]">Поддержка (FAQ)</li>
            </ul>

            <ul className="flex flex-col gap-[26px] max-w-max">
              <li className="font-[500] text-[18px]">Каталог</li>
              <li className="font-[500] text-[18px]">Как купить</li>
              <li className="font-[500] text-[18px]">Доставка и оплата</li>
              <li className="font-[500] text-[18px]">Возврат продукции </li>
              <li className="font-[500] text-[18px]">
                Политика конфеденциальности
              </li>
            </ul>

            <div className="flex flex-col gap-[42px]">
              <div className="flex flex-col gap-[28px]">
                <div>
                  <p className="font-[500] text-[18px]">+998 90 999 11 11</p>
                  <p className="font-[500] text-[18px]">+998 93 123 45 67</p>
                </div>
                <p className="font-[500] text-[16px] w-[53%]">
                  {" "}
                  Адрес: Узбекистан, г.Ташкент Ул. Шота Руставели, дом 1/23кв
                </p>
              </div>
              <div className="flex items-center gap-[12px]">
                <img src={group194} alt="" />
                <img src={group195} alt="" />
                <img src={group196} alt="" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-[42px] mt-[89px] border-t-[2px] border-[solid] lg:hidden border-[#FFFFFF] border-opacity-[0.1]">
            <div>© 2021 все права защищены</div>
            <div className="flex gap-[19px]">
              <p className="font-[400] text-[14px] opacity-[0.4]">Разработано </p>
              <p className="font-[400] text-[14px] underline">Golden Minds</p>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
