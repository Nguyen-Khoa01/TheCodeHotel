import React from "react";
import { Select } from "antd";

const onChange = (value: string) => {
  const Selectvalue = value
}



const SelectComponent: React.FC = () => (



  <Select
    showSearch
    size='large'
    className="w-[150px]"
    placeholder="Choose"
    onChange={onChange}
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Vũng Tàu',
      },
      {
        value: '2',
        label: 'Hà Nội',
      },
      {
        value: '3',
        label: 'Hồ Chí Minh',
      },
      {
        value: '4',
        label: 'Đà Nẵng',
      },
      {
        value: '5',
        label: 'Hải Phòng',
      },
      {
        value: '6',
        label: 'Đà lạt',
      },
    ]}
  />
);

export default SelectComponent;