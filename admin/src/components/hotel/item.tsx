import { useTranslate, BaseKey, useNavigation } from "@refinedev/core";
import { MapPinIcon } from "@heroicons/react/24/outline";
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
  const { show } = useNavigation();
  return (
    <Card
      style={{
        margin: "8px",
        // opacity: item.rooms <= 0 ? 0.5 : 1,
        overflow: "hidden",
      }}
      bodyStyle={{ padding: "0" }}
      className="px-1"
      onClick={() => show("hotels", item.id)}
    >
      <div
        style={{ position: "absolute", top: "10px", right: "-4px" }}
        className="z-50"
      >
        <Dropdown
          overlay={
            <Menu mode="vertical">
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

              <Menu.Item>
                <DeleteButton hideText size="middle" recordItemId={item.id} />
              </Menu.Item>
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
      <div className="flex justify-center mt-4 ">
        <img
          src={item.avatar}
          width={"370px"}
          className="h-60 object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col  px-2">
        <div className="mt-4 flex justify-between items-center">
          <p className="text-[22px] font-medium text-gray-700">{item.name}</p>
          <p className="text-[18px] ml-1 text-yellow-400">
            {item.starRating} sao
          </p>
        </div>
        <div className="flex my-1">
          <MapPinIcon className="h-6 w-6 text-gray-500" />
          <p className="text-[18px]">{item.address}</p>
          <p className="ml-1 text-[18px]">{item.city.city}</p>
        </div>
        <div className="flex items-center flex-wrap h-[54px] mb-1">
          {item.categories.map((cate: any, key: number) => (
            <p className="mr-1 text-[17px] text-gray-500" key={key}>
              {cate.title},
            </p>
          ))}
        </div>
        <div className="bg-[#1677ffeb] w-16 rounded-sm mb-2">
          <p className="text-[22px] text-[#fff] text-center font-medium">
            ${item.price}
          </p>
        </div>
      </div>
    </Card>
  );
};
