import React from 'react';
import cl from "../styles/Promo.module.scss";
import logo from "../img/section0/logo.png";
import boxes from "../img/section0/boxes.png"
import clock from "../img/section1/clock1.png"
import toolBox from "../img/section1/toolBox1.png"
import rune from "../img/section1/rune1.png"
import bigGlyph from "../img/section1/bigGlyph1.png"
import mana from "../img/section1/mana1.png"
import module from "../img/section1/module1.png"
import vitoSmall from "../img/section1/vito1.png"
import box from "../img/section1/box.png"

const Promo = () => {
    return (
        <React.Fragment>
            <div className={cl.section0}>
                <div className={cl.content}>
                    <div className={cl.media}>
                        <img src={logo} alt="Logo" className={cl.logo} />
                        <img src={boxes} alt="boxes" className={cl.boxes} />
                    </div>
                    <div className={cl.text}>
                        <p className={cl.heading}>КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</p>
                        <p>Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!</p>
                    </div>
                </div>
            </div>
            <div className={cl.section1}>
                <div className={cl.vito}/>
                <div className={cl.container}>
                    <p className={cl.heading}>НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</p>

                    <div className={cl.containerItems}>
                        <div className={cl.containerHeading}>
                            <p>Бесплатные сервера</p>
                            <p>Подписочный сервер</p>
                        </div>

                        <div className={cl.containerItem}>
                            <div className={cl.item}>
                                <img src={clock} alt="time" className={cl.logo}/>
                                <h3>Игровое время</h3>
                            </div>
                            <p>-</p>
                            <p>30 дней</p>
                        </div>
                        <div className={cl.containerItem}>
                            <div className={cl.item}>
                                <img src={toolBox} alt="toolBox" className={cl.logo}/>
                                <h3>Запечатанный набор инструментов</h3>
                            </div>
                            <p>1</p>
                            <p>1</p>
                        </div>
                        <div className={cl.containerItem}>
                            <div className={cl.item}>
                                <img src={rune} alt="rune" className={cl.logo}/>
                                <h3>Хрупкая чистая руна<br/>10-й ступени</h3>
                            </div>
                            <p>1</p>
                            <p>-</p>
                        </div>
                        <div className={cl.containerItem}>
                            <div className={cl.item}>
                                <img src={bigGlyph} alt="bigGlyph" className={cl.logo}/>
                                <h3>Большой символ<br/>изобилия творца</h3>
                            </div>
                            <p>10</p>
                            <p>-</p>
                        </div>
                        <div className={cl.containerItem}>
                            <div className={cl.item}>
                                <img src={mana} alt="mana" className={cl.logo}/>
                                <h3>Мана-батарея</h3>
                            </div>
                            <p>-</p>
                            <p>20</p>
                        </div>
                        <div className={cl.containerItem}>
                            <div className={cl.item}>
                                <img src={module} alt="module" className={cl.logo}/>
                                <h3>Модуль памяти</h3>
                            </div>
                            <p>-</p>
                            <p>10</p>
                        </div>
                        <div className={cl.containerItem}>
                            <div className={cl.item}>
                                <img src={vitoSmall} alt="vitoSmall" className={cl.logo}/>
                                <h3>Помощник Вито</h3>
                            </div>
                            <p>1</p>
                            <p>1</p>
                        </div>
                    </div>

                    <div className={cl.buy}>
                        <img src={box} alt="box" className={cl.vitoSmall}/>
                        <div className={cl.buyout}>
                            <p>399 &#8381;</p>
                            <button className={cl.button}>
                                ПРИОБРЕСТИ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Promo;