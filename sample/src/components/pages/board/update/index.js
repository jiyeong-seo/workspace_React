import React, { useEffect, useState } from "react";
import { useMatch, Link } from "react-router-dom";

import { Row, Col, Button, Modal, Form, Input } from "antd";

import { useNavigate } from "react-router-dom";

import { defaultQuery } from "../../../../config/utils/network/index";

// 게시판 상세 페이지
const BoardDetail = () => {
  // Form 에 직접 접근할 수 있게 연결
  const [form] = Form.useForm();

  let navigate = useNavigate();
  /** 1. match : params 를 조회 (라우트를 통해 전달된 값들) */
  const {
    params: { id },
  } = useMatch("/board/update/:id");

  /** 2. state로 전달받은 값을 세팅  */
  const [params] = useState({
    siteId: "SITE_000000000000001",
    bbsId: "BBSMSTR_000000000091",
    nttId: id,
  });

  const [detail, setDetail] = useState();

  /** 4. 게시판 상세정보 API 실행 */
  // 게시판 상세 정보
  const BoardDetail = async () => {
    const { data } = await defaultQuery("/api/article/find", params);

    if (data) {
      const { result } = data;
      setDetail(result);
    }
  };

  const handleCancle = () => {
    confirm({
      title: "",
      content: "페이지를 벗어나시겠습니까?",
      onOk() {
        navigate("/board");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  /** 3. 마운트가 되었을 때 상세보기 API 호출 */
  useEffect(() => {
    BoardDetail();
  }, []);
  // [] 페이지가 마운트 되었을 때 1회만 호출

  /** 5. detail state 값 변경이 있고 값이 존재한다면 form.item의 값 주입 */
  useEffect(() => {
    if (detail) {
      form.setFieldsValue({ nttSj: detail.nttSj, nttCn: detail.nttCn });
    }
  }, [detail]);

  return (
    <div>
      <Form form={form}>
        <Row>
          <Col span={24}>
            <Row>
              {/* <Col flex={1}>{detail?.nttSj || ""}</Col> */}
              <Col span={24}>
                <Form.Item name="nttSj">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col
            span={24}
            // dangerouslySetInnerHTML={{ __html: detail?.nttCn || "" }}
          >
            <Form.Item name="nttCn">
              <TextArea />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button type="primary">저장</Button>
            <Button onClick={handleCancle}>취소</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const { confirm } = Modal;
const { TextArea } = Input;

export default BoardDetail;
