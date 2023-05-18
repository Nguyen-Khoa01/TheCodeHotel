import { CheckCircleOutlined, CloseCircleOutlined, MoreOutlined } from "@ant-design/icons";
import { useUpdate } from "@refinedev/core";
import { Dropdown, Menu } from "antd";
import { IBooking } from "interfaces";
import moment from 'moment';

type BookingActionProps = {
    record: IBooking;
};


export const BookingActions: React.FC<BookingActionProps> = ({ record }) => {
    console.log(record.checkindate, record.id)
    const result = moment().format('DD-MM-YYYY');
    console.log(result > record.checkindate)
    const { mutate } = useUpdate();
    const moreMenu = (record: IBooking) => (
        result >= record.checkindate ?
            <Menu
                mode="vertical"
                onClick={({ domEvent }) => domEvent.stopPropagation()}
            >
                <Menu.Item
                    key="accept"
                    style={{
                        fontSize: 15,
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 500,
                    }}
                    disabled={record.status?.title !== "Booking"}
                    icon={
                        <CheckCircleOutlined
                            style={{
                                color: "#52c41a",
                                fontSize: 17,
                                fontWeight: 500,
                            }}
                        />
                    }
                    onClick={() => {
                        mutate({
                            resource: "booking",
                            id: record.id,
                            values: {
                                status: {
                                    id: 4,
                                    title: "Done",
                                },
                            },
                        });
                    }}
                >
                    {'Done'}
                </Menu.Item>
                <Menu.Item
                    key="reject"
                    style={{
                        fontSize: 15,
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 500,
                    }}
                    icon={
                        <CloseCircleOutlined
                            style={{
                                color: "#EE2A1E",
                                fontSize: 17,
                            }}
                        />
                    }
                    disabled={
                        record.status?.title === "Cancel" ||
                        record.status?.title === "Done"
                    }
                    onClick={() =>
                        mutate({
                            resource: "booking",
                            id: record.id,
                            values: {
                                status: {
                                    id: 2,
                                    title: "Cancel",
                                },
                            },
                        })
                    }
                >
                    {'Cancel'}
                </Menu.Item>
            </Menu> :
            <Menu
                mode="vertical"
                onClick={({ domEvent }) => domEvent.stopPropagation()}
            >
                <Menu.Item
                    key="accept"
                    style={{
                        fontSize: 15,
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 500,
                    }}
                    disabled={record.status?.title !== "Pending"}
                    icon={
                        <CheckCircleOutlined
                            style={{
                                color: "#52c41a",
                                fontSize: 17,
                                fontWeight: 500,
                            }}
                        />
                    }
                    onClick={() => {
                        mutate({
                            resource: "booking",
                            id: record.id,
                            values: {
                                status: {
                                    id: 1,
                                    title: "Booking",
                                },
                            },
                        });
                    }}
                >
                    {'accept'}
                </Menu.Item>
                <Menu.Item
                    key="reject"
                    style={{
                        fontSize: 15,
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 500,
                    }}
                    icon={
                        <CloseCircleOutlined
                            style={{
                                color: "#EE2A1E",
                                fontSize: 17,
                            }}
                        />
                    }
                    disabled={
                        record.status?.title === "Booking" ||
                        record.status?.title === "Cancel"
                    }
                    onClick={() =>
                        mutate({
                            resource: "booking",
                            id: record.id,
                            values: {
                                status: {
                                    id: 2,
                                    title: "Cancel",
                                },
                            },
                        })
                    }
                >
                    {'Cancel'}
                </Menu.Item>
            </Menu>
    );
    return (
        <Dropdown overlay={moreMenu(record)} trigger={["click"]}>
            <MoreOutlined
                onClick={(e) => e.stopPropagation()}
                style={{
                    fontSize: 24,
                }}
            />
        </Dropdown>
    );
}

