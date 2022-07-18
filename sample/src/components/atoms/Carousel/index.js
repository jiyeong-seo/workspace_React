import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default function Carousel({
  data = [],
  keyOption,
  onFinish,
  defaultValue,
}) {
  // 캐러셀 슬라이드 클릭 여부
  const [selectedItem, setSelectedItem] = useState();

  let settings = {
    dots: false, // dot 사용 여부
    infinite: false, // 무한 반복 여부
    speed: 500, // 속도 여부
    slidesToShow: 10, // 한번에 보여질 슬라이드 수
    slidesToScroll: 1, // 스크롤 시 움직여질 슬라이드 수
    variableWidth: true, // 정렬..?
  };

  // 캐러셀 슬라이드 클릭시 실행될 핸들러
  const handleClick = (item) => {
    setSelectedItem(item);

    onFinish && onFinish(item[keyOption.value]);
  };

  useEffect(() => {
    defaultValue &&
      keyOption &&
      setSelectedItem({
        [keyOption?.value]: defaultValue,
      });
  }, []);

  return (
    <DribbbleCarousel {...settings}>
      {data.map((item) => {
        return (
          <div
            className={`carousel-item ${
              selectedItem &&
              keyOption &&
              selectedItem[keyOption?.value] === item[keyOption?.value]
                ? "active"
                : ""
            }`}
          >
            <a
              href="#0"
              className="item"
              onClick={() => {
                handleClick(item);
              }}
            >
              {keyOption && item[keyOption?.label]}
            </a>
          </div>
        );
      })}
    </DribbbleCarousel>
  );
}

const DribbbleCarousel = styled(Slider)`
  .carousel-item {
    display: inline;
    .item {
      font-size: 14px;
      font-weight: 500;
      display: inline-block;
      padding: 10px 12px;
      color: #6e6d7a;
      &:hover {
        color: #000;
      }
    }
  }

  .active {
    border-radius: 8px;
    background: rgba(13, 12, 34, 0.05);
    font-weigth: 500;
    .item {
      color: #000;
    }
  }
`;
