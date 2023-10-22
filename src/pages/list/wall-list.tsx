import { useState } from "react";
import {
  Form,
  Input,
  Modal,
  Button,
  Row,
  Col,
  Spin,
  message,
  Select,
} from "antd";
import MyPagination, { PageInfo } from "@/components/pagination";
import {
  blindBoxGetUniversityList,
  blindBoxGetWallList,
  blindBoxAddWall,
  blindBoxEditWall,
  blindBoxDelWall,
} from "@/api";
import MyTable from "@/components/table";
import "./index.less";
import { formatDate } from "@/utils";
import { BlindBoxWallItem, MapKey } from "@/types";

export default function SearchPage() {
  const [form] = Form.useForm();
  const [searchForm] = Form.useForm();
  const [pageData, setPageData] = useState<PageInfo>({ page: 1 });
  const [tableData, setData] = useState<BlindBoxWallItem[]>([]);
  const [tableCol, setCol] = useState<MapKey>([]);
  const [load, setLoad] = useState(true);
  const [total, setTotal] = useState(0);
  const [showModal, setShow] = useState(false);
  const [editStatus, setEditStatus] = useState(false); // 是否是编辑状态
  const [editObj, setEditObj] = useState<BlindBoxWallItem>({
    wall_id: 0,
    wall_name: "",
    university_id: 0,
  }); // 当前正在编辑的对象
  const [universityList, setUniversityList] = useState<
    Array<{
      label: string;
      value: number;
    }>
  >([]);

  // 获取大学列表
  const getUniversityList = async () => {
    const res = await blindBoxGetUniversityList({ selectAll: true });
    if (res.status === 0 && res.data) {
      setUniversityList(
        res.data.list.map((i) => ({
          label: i.university_name,
          value: i.university_id,
        }))
      );
    }
  };

  // 获取列表
  const getDataList = (data: PageInfo) => {
    blindBoxGetWallList(data).then((res) => {
      const { data, status } = res;
      if (status === 0 && data) {
        let { list, total, mapKey } = data;
        // 添加功能列
        const actionColumn = {
          title: "操作",
          dataIndex: "action",
          key: "action",
          render: (text: string, record: BlindBoxWallItem) => (
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
        setData(
          list.map((i) => ({
            ...i,
            key: i.wall_id,
            createdAt: formatDate(i.createdAt!),
            updatedAt: formatDate(i.updatedAt!),
          }))
        );
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
          blindBoxEditWall({
            ...values,
            wall_id: editObj.wall_id,
          }).then((res) => {
            if (res.status === 0) {
              form.resetFields();
              message.success(res.msg);
              setShow(false);
              search();
            }
          });
        } else {
          blindBoxAddWall(values).then((res) => {
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

  // 编辑记录
  const editRecord = (record: BlindBoxWallItem) => {
    setEditStatus(true);
    setEditObj(record);
    form.setFieldsValue(record);
    setShow(true);
  };

  // 删除记录
  const deleteRecord = (record: BlindBoxWallItem) => {
    Modal.confirm({
      title: "确认删除?",
      content: "你确定要删除这条记录吗？",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        blindBoxDelWall({ wall_id: record.wall_id }).then((res) => {
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
      <Col>
        <Button type="primary" onClick={() => setShow(true)}>
          添加表白墙
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
              <Input placeholder="输入表白墙名称" />
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
          immediately={(info) => {
            getDataList(info);
            getUniversityList();
          }}
          change={pageChange}
          total={total}
        />

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
              label="表白墙名称"
              name="wall_name"
              rules={[
                {
                  required: true,
                  message: "请输入要添加的表白墙名称",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="所属大学"
              name="university_id"
              rules={[
                {
                  required: true,
                  message: "请选择所属大学",
                },
              ]}
            >
              <Select options={universityList} />
            </Form.Item>
          </Form>
        </Modal>
      </Spin>
    </div>
  );
}
SearchPage.route = {
  [MENU_PATH]: "/list/wall-list",
};
