import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuList] = useState([
    {
      menuUrl: "/board",
      menuNm: "게시판",
    },
  ]);

  return (
    <Menu mode="horizontal">
      {menuList.map((menu, i) => {
        return (
          <Link key={i} to={menu.menuUrl}>
            <Menu.Item>{menu.menuNm}</Menu.Item>
          </Link>
        );
      })}
    </Menu>
  );
}

const params = [
  {
    rnum: 2,
    atchFileId: "",
    bbsId: "BBSMSTR_000000000091",
    frstRegisterId: "admin",
    frstRegisterPnttm: "2021-04-27",
    lastUpdusrId: "",
    lastUpdusrPnttm: "",
    ntceBgnde: "20210427",
    ntceEndde: "20210531",
    ntcrId: "",
    ntcrNm: "",
    nttCn: "게시글 작성 API는 어디로 갈까요??",
    nttId: 191,
    nttNo: 0,
    nttSj: "게시글 작성 테스트 입니다.",
    parnts: "0",
    password: "",
    inqireCo: 5,
    replyAt: "Y",
    replyLc: "0",
    sortOrdr: 0,
    useAt: "Y",
    ntceEnddeView: "",
    ntceBgndeView: "",
    noticeAt: "N",
    secretAt: "N",
    sjBoldAt: null,
    blogAt: "",
    blogId: "",
    siteId: "",
    searchBgnDe: "",
    searchCnd: "",
    searchEndDe: "",
    searchWrd: "",
    searchUseYn: "",
    pageIndex: 1,
    pageUnit: 10,
    pageSize: 10,
    firstIndex: 1,
    lastIndex: 1,
    recordCountPerPage: 10,
    rowNo: 0,
    frstRegisterNm: "",
    lastUpdusrNm: "",
    isExpired: "N",
    parntsSortOrdr: "",
    parntsReplyLc: "",
    bbsTyCode: "",
    bbsAttrbCode: "",
    bbsNm: "",
    fileAtchPosblAt: "",
    posblAtchFileNumber: 0,
    replyPosblAt: "",
    plusCount: false,
    anonymousAt: "",
    subPageIndex: "",
    commentCo: "1",
  },
  {
    rnum: 1,
    atchFileId: "",
    bbsId: "BBSMSTR_000000000091",
    frstRegisterId: "admin",
    frstRegisterPnttm: "2021-04-12",
    lastUpdusrId: "",
    lastUpdusrPnttm: "",
    ntceBgnde: "",
    ntceEndde: "",
    ntcrId: "",
    ntcrNm: "",
    nttCn: "게시글 작성 테스트",
    nttId: 181,
    nttNo: 0,
    nttSj: "게시글 작성 old",
    parnts: "0",
    password: "",
    inqireCo: 6,
    replyAt: "Y",
    replyLc: "0",
    sortOrdr: 0,
    useAt: "Y",
    ntceEnddeView: "",
    ntceBgndeView: "",
    noticeAt: "N",
    secretAt: "N",
    sjBoldAt: null,
    blogAt: "",
    blogId: "",
    siteId: "",
    searchBgnDe: "",
    searchCnd: "",
    searchEndDe: "",
    searchWrd: "",
    searchUseYn: "",
    pageIndex: 1,
    pageUnit: 10,
    pageSize: 10,
    firstIndex: 1,
    lastIndex: 1,
    recordCountPerPage: 10,
    rowNo: 0,
    frstRegisterNm: "",
    lastUpdusrNm: "",
    isExpired: "N",
    parntsSortOrdr: "",
    parntsReplyLc: "",
    bbsTyCode: "",
    bbsAttrbCode: "",
    bbsNm: "",
    fileAtchPosblAt: "",
    posblAtchFileNumber: 0,
    replyPosblAt: "",
    plusCount: false,
    anonymousAt: "",
    subPageIndex: "",
    commentCo: "",
  },
];
