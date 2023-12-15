import ajax from "@/common/ajax";
import mock from "../mock/index";
import {
  MessageAPi,
  ResponseData,
  LoginApi,
  PowerApi,
  MenuInfoApi,
  UserListApi,
  ResponseUserInfo,
  VisitorApi,
  VisitorListApi,
  MenuResponse,
  MenuListResponse,
  BlindBoxUserInfo,
  BlindBoxBoxInfo,
  BlindBoxWallInfo,
  BlindBoxUniversityInfo,
} from "@/types";

const request = process.env.REACT_APP_MOCK === "1" ? mock : ajax;

const getMenu = () => request.get("/getmenu") as Promise<MenuResponse>;
const getMenuList = () =>
  request.get("/getmenulist") as Promise<MenuListResponse>;
const login = (data: any) => request.post("/login", data) as Promise<LoginApi>;
const addMenu = (data: any) =>
  request.post("/addmenu", data) as Promise<ResponseData>;
const addMsg = (data: any) =>
  request.post("/addmessage", data) as Promise<ResponseData>;
const getMsg = (data: any) =>
  request.get("/getmessage", data) as Promise<MessageAPi>;
const getPower = () => request.get("/getpower") as Promise<PowerApi>;
const delMenu = (data: any) =>
  request.post("/delmenu", data) as Promise<ResponseData>;
const getMenuInfo = (data: any) =>
  request.get("/getmenuinfo", data) as Promise<MenuInfoApi>;
const editMenu = (data: any) =>
  request.post("/editmenuinfo", data) as Promise<ResponseData>;
const getVisitorList = (data: any) =>
  request.get("/getiplist", data) as Promise<VisitorListApi>;
const getVisitorData = () =>
  request.get("/getvisitordata") as Promise<VisitorApi>;
const getUserList = (data: any) =>
  request.get("/getuserlist", data) as Promise<UserListApi>;
const addUser = (data: any) =>
  request.post("/adduserinfo", data) as Promise<ResponseData>;
const getUser = (data: any) =>
  request.get("/getuserinfo", data) as Promise<
    ResponseData & { data: ResponseUserInfo }
  >;
const editUser = (data: any) =>
  request.post("/edituserinfo", data) as Promise<ResponseData>;
const editType = (data: any) =>
  request.post("/edittype", data) as Promise<ResponseData>;
const addType = (data: any) =>
  request.post("/addtype", data) as Promise<ResponseData>;
/* ----------以下是新增的API---------- */
// 1. 用户相关
const blindBoxGetUserList = (data: any) =>
  request.get("/blind-box-get-user-list", data) as Promise<BlindBoxUserInfo>;
const blindBoxDelUser = (data: any) =>
  request.post("/blind-box-del-user", data) as Promise<ResponseData>;
// 2. 盲盒相关
const blindBoxGetBoxList = (data: any) =>
  request.get("/blind-box-get-box-list", data) as Promise<BlindBoxBoxInfo>;
const blindBoxDelBox = (data: any) =>
  request.post("/blind-box-del-box", data) as Promise<ResponseData>;
// 3. 表白墙相关
const blindBoxGetWallList = (data: any) =>
  request.get("/blind-box-get-wall-list", data) as Promise<BlindBoxWallInfo>;
const blindBoxAddWall = (data: any) =>
  request.post("/blind-box-add-wall", data) as Promise<ResponseData>;
const blindBoxEditWall = (data: any) =>
  request.post("/blind-box-edit-wall", data) as Promise<ResponseData>;
const blindBoxDelWall = (data: any) =>
  request.post("/blind-box-del-wall", data) as Promise<ResponseData>;
// 4. 大学相关
const blindBoxGetUniversityList = (data: any) =>
  request.get(
    "/blind-box-get-university-list",
    data
  ) as Promise<BlindBoxUniversityInfo>;
const blindBoxAddUniversity = (data: any) =>
  request.post("/blind-box-add-university", data) as Promise<ResponseData>;
const blindBoxEditUniversity = (data: any) =>
  request.post("/blind-box-edit-university", data) as Promise<ResponseData>;
const blindBoxDelUniversity = (data: any) =>
  request.post("/blind-box-del-university", data) as Promise<ResponseData>;

export {
  getMenu,
  login,
  addMenu,
  addMsg,
  getMsg,
  getPower,
  delMenu,
  getMenuInfo,
  editMenu,
  getVisitorList,
  getVisitorData,
  getUserList,
  addUser,
  getUser,
  editUser,
  editType,
  addType,
  getMenuList,
  blindBoxGetUserList,
  blindBoxDelUser,
  blindBoxGetBoxList,
  blindBoxDelBox,
  blindBoxGetWallList,
  blindBoxAddWall,
  blindBoxEditWall,
  blindBoxDelWall,
  blindBoxGetUniversityList,
  blindBoxAddUniversity,
  blindBoxEditUniversity,
  blindBoxDelUniversity,
};
