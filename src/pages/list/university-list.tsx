import { useState } from "react";
import { Form, Input, Modal, Button, Row, Col, Spin, message } from "antd";
import MyPagination, { PageInfo } from "@/components/pagination";
import {
  blindBoxGetUniversityList,
  blindBoxAddUniversity,
  blindBoxEditUniversity,
  blindBoxDelUniversity,
} from "@/api";
import MyTable from "@/components/table";
import "./index.less";
import { BlindBoxUniversityItem, MapKey } from "@/types";

export default function SearchPage() {
  const [form] = Form.useForm();
  const [searchForm] = Form.useForm();
  const [pageData, setPageData] = useState<PageInfo>({ page: 1 });
  const [tableData, setData] = useState<BlindBoxUniversityItem[]>([]);
  const [tableCol, setCol] = useState<MapKey>([]);
  const [load, setLoad] = useState(true);
  const [total, setTotal] = useState(0);
  const [showModal, setShow] = useState(false);
  const [editStatus, setEditStatus] = useState(false); // 是否是编辑状态
  const [editObj, setEditObj] = useState<BlindBoxUniversityItem>({
    university_id: 0,
    university_name: "",
  }); // 当前正在编辑的对象

  // 获取列表
  const getDataList = (data: PageInfo) => {
    blindBoxGetUniversityList(data).then((res) => {
      const { data, status } = res;
      if (status === 0 && data) {
        let { list, total, mapKey } = data;
        // 添加功能列
        const actionColumn = {
          title: "操作",
          dataIndex: "action",
          key: "action",
          render: (text: string, record: BlindBoxUniversityItem) => (
            <span>
              <Button type="primary" onClick={() => editRecord(record)}>
                编辑
              </Button>
              <Button type="ghost" onClick={() => deleteRecord(record)}>
                删除
              </Button>
            </span>
          ),
        };
        mapKey.push(actionColumn);
        setCol(mapKey);
        setTotal(total);
        setData(list.map((i) => ({ ...i, key: i.university_id })));
        setLoad(false);
        return;
      }
    });
  };

  // 记录操作：编辑/添加
  const recordActions = (type: boolean) => {
    return function () {
      form.validateFields().then((values) => {
        if (type) {
          blindBoxEditUniversity({
            ...values,
            university_id: editObj.university_id,
          }).then((res) => {
            if (res.status === 0) {
              form.resetFields();
              message.success(res.msg);
              setShow(false);
              search();
            }
          });
        } else {
          blindBoxAddUniversity(values).then((res) => {
            if (res.status === 0) {
              form.resetFields();
              message.success(res.msg);
              setShow(false);
              search();
            }
          });
        }
      });
    };
  };

  // 点击编辑的按钮
  const editRecord = (record: BlindBoxUniversityItem) => {
    setEditStatus(true);
    setEditObj(record);
    form.setFieldsValue(record);
    setShow(true);
  };

  // 删除记录
  const deleteRecord = (record: BlindBoxUniversityItem) => {
    Modal.confirm({
      title: "确认删除?",
      content: "你确定要删除这条记录吗？",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        blindBoxDelUniversity({ university_id: record.university_id }).then(
          (res) => {
            if (res.status === 0) {
              message.success(res.msg);
              search();
            }
          }
        );
      },
    });
  };

  // 顶部搜索
  const search = () => {
    let data = searchForm.getFieldsValue();
    setPageData({ page: 1 });
    getDataList(data);
  };

  // 页码改版
  const pageChange = (pageData: PageInfo) => {
    let data = searchForm.getFieldsValue();
    getDataList({ ...pageData, ...data });
    setPageData(pageData);
  };

  const tableTop = (
    <Row justify="space-between" gutter={80}>
      <Col style={{ lineHeight: "32px" }}>表格查询</Col>
      <Col>
        <Button type="primary" onClick={() => setShow(true)}>
          添加大学
        </Button>
      </Col>
    </Row>
  );

  return (
    <div className="search-container">
      <Spin spinning={load}>
        <div className="top-form">
          <Form layout="inline" form={searchForm}>
            <Form.Item name="name">
              <Input placeholder="输入大学名称" />
            </Form.Item>
            <Button onClick={search} type="primary" className="submit-btn">
              搜索
            </Button>
            <Button
              onClick={() => {
                searchForm.resetFields();
                search();
              }}
            >
              清空
            </Button>
          </Form>
        </div>
        <MyTable
          title={() => tableTop}
          dataSource={tableData}
          columns={tableCol}
          pagination={false}
          saveKey="MyListSearch"
        />
        <MyPagination
          page={pageData.page}
          immediately={getDataList}
          change={pageChange}
          total={total}
        />
      </Spin>

      <Modal
        title={editStatus ? "编辑一条记录" : "添加一条记录"}
        open={showModal}
        cancelText="取消"
        okText="确定"
        onOk={recordActions(editStatus)}
        onCancel={() => setShow(false)}
      >
        <Form form={form}>
          <Form.Item
            label="大学名称"
            name="university_name"
            rules={[
              {
                required: true,
                message: "请输入要添加的大学名称",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
SearchPage.route = {
  [MENU_PATH]: "/list/university-list",
};
