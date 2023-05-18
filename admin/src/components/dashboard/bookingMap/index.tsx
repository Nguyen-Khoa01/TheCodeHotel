import { useList, useNavigation } from "@refinedev/core";

import { Map } from "components/map";

import { IOrder } from "interfaces";

export const BookingMap: React.FC = () => {
    // const { data: orderData } = useList<IOrder>({
    //     resource: "orders",
    //     config: {
    //         filters: [
    //             {
    //                 field: "status.text",
    //                 operator: "eq",
    //                 value: "On The Way",
    //             },
    //         ],
    //         pagination: {
    //             pageSize: 1000,
    //         },
    //     },
    // });

    const defaultProps = {
        center: {
            lat: 40.73061,
            lng: -73.935242,
        },
        zoom: 13,
    };

    const { show } = useNavigation();

    return (
        <Map {...defaultProps}>
        </Map>
    );
};