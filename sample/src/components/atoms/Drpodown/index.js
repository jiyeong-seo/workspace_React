import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import styled from "styled-components";

export default function Dropdown({ options, onFinish, defaultValue }) {
  // 아이콘 바뀜
  const [isRotate, setIsRotate] = useState(false);
  // 드롭다운 리스트 값
  const [labelInfo, setLabelInfo] = useState(options[0]);

  // 클릭 이벤트 핸들러
  const handleClick = () => {
    setIsRotate(!isRotate);
  };

  // 드롭다운 리스트 클릭 이벤트
  const handleRowClick = (item) => {
    setLabelInfo(item);
    handleClick();
    onFinish && onFinish(item.value);
  };

  return (
    <DropdownWrap
      borderColor={`${isRotate ? "#ea4c891a" : "#e7e7e9"}`}
      border={`${isRotate ? "4px" : "1px"}`}
      display={`${isRotate ? "" : "none"}  `}
    >
      <a className="dropdown-label" onClick={handleClick}>
        {defaultValue
          ? options?.filter((option) => option.value === defaultValue)[0]?.label
          : labelInfo.label}
      </a>
      <CaretDownOutlined
        className={`${isRotate ? "rotate-180" : "rotate-0"}`}
      />
      <div className="dropdown-list">
        <ul>
          {options.map((item) => {
            return (
              <li
                onClick={() => {
                  handleRowClick(item);
                  handleClick();
                }}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </DropdownWrap>
  );
}

const DropdownWrap = styled.span`
  position: relative;
  min-width: 117px;
  font-size: 14px;
  border-radius: 8px;
  border: 0;
  box-shadow: 0px 0px ${(props) => props.border} ${(props) => props.borderColor}
    inset;
  padding: 15px 5px;

  &:hover {
    box-shadow: 0px 0px 4px #ea4c891a inset;
    .dropdown-label {
      color: #000;
    }
  }

  .dropdown-label {
    color: #6e6d7a;
    padding: 10px 25px 10px 10px;
  }

  .rotate-180 {
    transform: rotate(180deg);
    transition: all ease 0.3s;
  }

  .rotate-0 {
    transform: rotate(0deg);
    transition: all ease 0.3s;
  }

  .dropdown-list {
    position: absolute;
    top: 50px;
    left: 5px;
    min-width: 180px;
    background: #fff;
    display: ${(props) => props.display};
    cursur: pointer;
  }
`;
