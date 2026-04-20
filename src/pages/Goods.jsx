import React from 'react'
import './About.css'

import doll from '../images/doll.jpg'
import ecobag from '../images/ecobag.jpg'
import mug from '../images/mug.jpg'
import shirt from '../images/shirt.jpg'
import socks from '../images/socks.jpeg'
import { useTranslation } from 'react-i18next'

const goodsData = [
    { key: 'toy', image: doll },
    { key: 'ecobag', image: ecobag },
    { key: 'mug', image: mug },
    { key: 'shirt', image: shirt },
    { key: 'socks', image: socks }
]


const Goods = () => {
    const { t } = useTranslation();
    return (
        <div className="about-page">

            {/* Intro Section */}
            <div className="goods-intro">
                <h1 className="about-heading">{t("goods")}</h1>
                <p className="goods-text">
                    {t("goodsIntro")}
                </p>
            </div>

            {/* Goods Grid */}
            <div className="goods-container">
                {goodsData.map((item, index) => (
                    <div key={index} className="goods-item">
                        <img src={item.image} alt={item.name} className="goods-image" />
                        <h3>{t(`goodsItems.${item.key}.name`)}</h3>
                        <p className="about-description">
                            {t(`goodsItems.${item.key}.description`)}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Goods