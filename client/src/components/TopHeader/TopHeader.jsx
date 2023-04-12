import React, { useRef, useState } from "react";
import "./TopHeader.scss";
import UnitedState from "../../assets/images/country/united-states.png";
import UnitedKindom from "../../assets/images/country/united-kingdom.png";
import Germany from "../../assets/images/country/germany.png";
import Turki from "../../assets/images/country/turkish.png";
import { IoIosArrowDown } from "react-icons/io";
import usePopupClose from "../../hooks/usePopupClose";
const TopHeader = () => {
  // langauge state management
  const [langauge, setLangauge] = useState(false);
  const [money, setMoney] = useState(false);

  const close = useRef(null);

  usePopupClose(close, setLangauge);
  usePopupClose(close, setMoney);

  const [langaugeData, setLangaugeData] = useState([
    {
      id: 1,
      img: UnitedState,
      country_name: "United State",
    },
  ]);
  const [moneyData, setMoneyData] = useState([
    {
      id: 1,
      country_money_name: "USD",
    },
  ]);

  const item = [
    {
      id: 1,
      img: UnitedState,
      country_name: "United State",
    },
    {
      id: 2,
      img: UnitedKindom,
      country_name: "United Kingdom",
    },
    { id: 3, img: Germany, country_name: "Germany" },
    { id: 4, img: Turki, country_name: "Turki" },
  ];

  const handleValueLanaguage = (id) => {
    const data = item.filter((data) => data.id === id);
    setLangaugeData(data);
    // console.log(data.country_name);
    setLangauge(false);
  };
  const itemMoney = [
    {
      id: 1,
      country_money_name: "USD",
    },
    {
      id: 2,
      country_money_name: "AUD",
    },
    { id: 3, country_money_name: "UER" },
    { id: 4, country_money_name: "CNY" },
  ];

  const handleValueMoney = (id) => {
    const data = itemMoney.filter((data) => data.id === id);
    setMoneyData(data);
    // console.log(data.country_name);
    setMoney(false);
  };

  return (
    <>
      <div className="section">
        <div className="top-header">
          <div className="title">
            <strong> Welcome to Fastkart! </strong> Wrap new offers/gift every
            signle day on Weekends. <strong>New Coupon Code: Fast024</strong>
          </div>
          <div className="language-money">
            <div className="language">
              <div className="item" onClick={() => setLangauge(!langauge)}>
                <img src={langaugeData[0].img} alt="" />
                <span>{langaugeData[0].country_name}</span>
                <IoIosArrowDown />
              </div>
              {langauge && (
                <div className="language-area" ref={close}>
                  {item.map((data, index) => {
                    return (
                      <div
                        className="item"
                        key={index}
                        onClick={() => handleValueLanaguage(data.id)}
                      >
                        <img src={data.img} alt="" />
                        <span>{data.country_name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="divider"></div>
            <div className="money">
              <div className="item" onClick={() => setMoney(!langauge)}>
                <span>{moneyData[0].country_money_name}</span>
                <IoIosArrowDown />
              </div>
              {money && (
                <div className="money-area" ref={close}>
                  {itemMoney.map((data, index) => {
                    return (
                      <div
                        className="item"
                        key={index}
                        onClick={() => handleValueMoney(data.id)}
                      >
                        <span>{data.country_money_name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
