import { useState } from "react";
import { Form, Input, Button, Row, Col, Spin, message, Modal } from "antd";
import MyPagination, { PageInfo } from "@/components/pagination";
import { blindBoxGetBoxList, blindBoxDelBox } from "@/api";
import MyTable from "@/components/table";
import "./index.less";
import { formatDate } from "@/utils";
import { BlindBoxBoxItem, MapKey } from "@/types";

export default function SearchPage() {
  const [searchForm] = Form.useForm();
  const [pageData, setPageData] = useState<PageInfo>({ page: 1 });
  const [tableData, setData] = useState<BlindBoxBoxItem[]>([]);
  const [tableCol, setCol] = useState<MapKey>([]);
  const [load, setLoad] = useState(true);
  const [total, setTotal] = useState(0);

  // 获取列表
  const getDataList = (data: PageInfo) => {
    blindBoxGetBoxList(data).then((res) => {
      const { data, status } = res;
      if (status === 0 && data) {
        let { list, total, mapKey } = data;
        // 添加功能列
        const actionColumn = {
          title: "操作",
          dataIndex: "action",
          key: "action",
          render: (_: string, record: BlindBoxBoxItem) => (
            <span>
              <Button type="ghost" onClick={() => deleteRecord(record)}>
                删除
              </Button>
            </span>
          ),
        };
        mapKey.push(actionColumn);
        setCol(mapKey);
        setTotal(total);
        setData(
          list.map((i) => ({
            ...i,
            key: i.box_id,
            createdAt: formatDate(i.createdAt),
            updatedAt: formatDate(i.updatedAt),
          }))
        );
        setLoad(false);
        return;
      }
    });
  };

  // 删除记录的函数
  const deleteRecord = (record: BlindBoxBoxItem) => {
    Modal.confirm({
      title: "确认删除?",
      content: "你确定要删除这条记录吗？",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        blindBoxDelBox({ box_id: record.box_id }).then((res) => {
          if (res.status === 0) {
            message.success(res.msg);
            search();
          }
        });
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
    </Row>
  );
  return (
    <div className="search-container">
      <Spin spinning={load}>
        <div className="top-form">
          <Form layout="inline" form={searchForm}>
            <Form.Item name="name">
              <Input placeholder="输入盲盒内容" />
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
    </div>
  );
}
SearchPage.route = {
  [MENU_PATH]: "/list/box-list",
};
