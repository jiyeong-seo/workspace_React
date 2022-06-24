import React, { useState, useEffect } from "react";

import Table from "../molecules/Table_bak";

const Main = () => {
  // const [data, setData] = useState(() => []);

  // const columns = [
  //   { colName: "no", key: "no", textAligh: "center", width: 50 },
  //   { colName: "제목", key: "title", textAligh: "center" },
  //   { colName: "등록자", key: "regNm", textAligh: "center", width: 100 },
  //   { colName: "등록일", key: "regDt", textAligh: "center", width: 100 },
  // ];

  // useEffect(() => {
  //   setData([
  //     { key: 1, no: 1, title: "제목1", regNm: "홍길동", regDt: "2022-06-15" },
  //     { key: 2, no: 2, title: "제목2", regNm: "홍길동", regDt: "2022-06-15" },
  //     { key: 3, no: 3, title: "제목3", regNm: "홍길동", regDt: "2022-06-15" },
  //     { key: 4, no: 4, title: "제목4", regNm: "홍길동", regDt: "2022-06-15" },
  //   ]);
  // }, []);

  return (
    <div style={{ padding: 20 }}>
      {/* <Table columns={columns} height={500} data={data} /> */}
    </div>
  );
};

export default Main;
