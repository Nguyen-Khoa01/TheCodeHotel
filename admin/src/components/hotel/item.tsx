import { useTranslate, BaseKey } from "@refinedev/core";

import { DeleteButton, NumberField } from "@refinedev/antd";

import {
  CloseCircleOutlined,
  FormOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Card,
  Divider,
  InputNumber,
  Dropdown,
  Menu,
  Typography,
} from "antd";

const { Text, Paragraph } = Typography;

import { IHotel } from "interfaces";

type ProductItemProps = {
  item: IHotel;
  updateStock?: (changedValue: number, clickedProduct: IHotel) => void;
  editShow: (id?: BaseKey) => void;
};

export const HotelItem: React.FC<ProductItemProps> = ({
  item,
  updateStock,
  editShow,
}) => {
  const t = useTranslate();

  return (
    <Card
      style={{
        margin: "8px",
        // opacity: item.rooms <= 0 ? 0.5 : 1,
        overflow: 'hidden'
      }}
      bodyStyle={{ height: "450px", padding: '0' }}
      className="px-1"
    >
      <div style={{ position: "absolute", top: "10px", right: "5px" }}>
        <Dropdown
          overlay={
            <Menu mode="vertical">
              {updateStock && (
                <Menu.Item
                  key="1"
                  disabled={item.stock <= 0}
                  style={{
                    fontWeight: 500,
                  }}
                  icon={
                    <CloseCircleOutlined
                      style={{
                        color: "red",
                      }}
                    />
                  }
                  onClick={() => updateStock(0, item)}
                >
                  {t("stores.buttons.outOfStock")}
                </Menu.Item>
              )}
              <Menu.Item
                key="2"
                style={{
                  fontWeight: 500,
                }}
                icon={
                  <FormOutlined
                    style={{
                      color: "green",
                    }}
                  />
                }
                onClick={() => editShow(item.id)}
              >
                {t("stores.buttons.edit")}
              </Menu.Item>

              <DeleteButton hideText size="small" recordItemId={item.id} />
            </Menu>
          }
          trigger={["click"]}
        >
          <MoreOutlined
            style={{
              fontSize: 24,
            }}
          />
        </Dropdown>
      </div>
      <div style={{ textAlign: "center" }}>
        <img src={item.avatar} width={"100%"} className="h-60 object-cover " />
      </div>
      <div className="flex flex-col h-full px-2">

        <div className="mt-4 flex justify-between">
          <p className="text-[18px] font-extrabold">{item.name}</p>
          <p className="text-[18px] ml-1 text-yellow-500">{item.starRating} sao</p>
        </div>
        <div className="flex">
          <p>{item.address}</p>
          {/* <p className="ml-1">{item.city.id}</p> */}
        </div>
        <div className="mb-2 ">
          <p className="w-[370px] whitespace-nowrap text-[17px] overflow-hidden text-ellipsis">{item.desreption}</p>
        </div>
        <div className="flex justify-around">
          {item.categories.map((cate: any, key: number) => (
            <p key={key}>{cate.title}</p>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[22px] font-medium">${item.price}</p>
          {item.rooms.map((room: any, key: any) => (
            <p key={key}>{room.nameRoom}</p>
          ))}
        </div>
      </div>
    </Card>
  );
};
