import { UserInfo } from "./user";
import { MenuItem, MenuList } from "./menu";
export type MessageList = MessageItem[];
type MessageItem = {
  add_time: string;
  creator: string;
  description: string;
  m_id: number;
  name: string;
};
export type MapKey = {
  dataIndex: string;
  key: string;
  title: string;
  width?: number;
  [keyname: string]: any;
}[];
export interface ResponseData {
  status: number;
  msg?: string;
}
export interface MessageAPi extends ResponseData {
  data?: {
    total: number;
    mapKey: MapKey;
    list: MessageList;
  };
}

export interface LoginApi extends ResponseData {
  data: UserInfo;
  token: string;
}
export type PowerList = {
  type_id: number;
  name: string;
  menu_id: string;
}[];

export interface PowerApi extends ResponseData {
  data: PowerList;
  mapKey: MapKey;
  menu: MenuList;
}

export interface MenuInfoApi extends ResponseData {
  data: MenuItem | null;
}

export type ResponseUserInfo = {
  account: string;
  pswd: string;
  type: string;
  user_id: number;
  username: string;
};
export interface UserListApi extends ResponseData {
  data: {
    list: ResponseUserInfo[];
    mapKey: MapKey;
  };
  total: number;
}

type TimeInfo = {
  time: string;
  value: number;
};
export interface VisitorApi extends ResponseData {
  data: {
    deal: TimeInfo[];
    ips: TimeInfo[];
    today: {
      deal: number;
      ips: number;
    };
  };
}

export type VisitData = {
  ip: string;
  s_id: number;
  status: string;
  time: string;
  url: string;
};

export interface VisitorListApi extends ResponseData {
  data: {
    mapKey: MapKey;
    list: VisitData[];
    total: number;
  };
}

/* 以下是新增Interface */
// 用户
export type BlindBoxUserItem = {
  user_id: number;
  user_name: string;
  gender: number;
  user_avatar: string;
  user_email: string;
  user_phoneNumber: string;
  user_wechat_account: string;
  user_qq_account: string;
  user_sign: string;
  user_background_img: string;
  createdAt: string;
  updatedAt: string;
  university_id: number;
};
export interface BlindBoxUserInfo extends ResponseData {
  data?: {
    total: number;
    mapKey: MapKey;
    list: BlindBoxUserItem[];
  };
}
// 盲盒
export type BlindBoxBoxItem = {
  box_id: number;
  wall_id?: number;
  user_id: number;
  user_gender: number;
  box_text: string;
  createdAt: string;
  updatedAt: string;
};
export interface BlindBoxBoxInfo extends ResponseData {
  data?: {
    total: number;
    mapKey: MapKey;
    list: BlindBoxBoxItem[];
  };
}
// 表白墙
export interface BlindBoxWallItem {
  wall_id: number;
  wall_name: string;
  university_id: number;
  createdAt?: string;
  updatedAt?: string;
}
export interface BlindBoxWallInfo extends ResponseData {
  data?: {
    total: number;
    mapKey: MapKey;
    list: BlindBoxWallItem[];
  };
}
// 大学
export interface BlindBoxUniversityItem {
  university_id: number;
  university_name: string;
}
export interface BlindBoxUniversityInfo extends ResponseData {
  data?: {
    total: number;
    mapKey: MapKey;
    list: BlindBoxUniversityItem[];
  };
}
