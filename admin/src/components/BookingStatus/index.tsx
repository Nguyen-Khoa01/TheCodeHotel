import { Tag } from "antd";
import React from "react";



type BookingStatusProps = {
    status: "Booking" | "Cancel" | "Pending" | 'Done';
};

export const BookingStatus: React.FC<BookingStatusProps> = ({ status }) => {

    let color;
    switch (status) {
        case 'Booking':
            color = 'cyan';
            break;
        case 'Cancel':
            color = 'red';
            break;
        case 'Pending':
            color = 'orange';
            break
        case 'Done':
            color = 'green'
            break
    }

    return <Tag color={color}>{status}</Tag>
}