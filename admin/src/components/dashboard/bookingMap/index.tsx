import { useList, useNavigation } from "@refinedev/core";

import { Map, MapMarker } from "components";

import { IHotel } from "interfaces";

export const BookingMap: React.FC = () => {
    const { data: orderData } = useList<IHotel>({
        resource: "Hotels",
        config: {
            filters: [
                {
                    field: "status.text",
                    operator: "eq",
                    value: "On The Way",
                },
            ],
            pagination: {
                pageSize: 1000,
            },
        },
    });

    const defaultProps = {
        center: {
            lat: 16.050980,
            lng: 108.225890,
        },
        zoom: 13,
    };

    const { show } = useNavigation();

    return (
        <Map {...defaultProps}>
            {orderData?.data.map((order) => {
                return (
                    <MapMarker
                        key={order.id}
                        onClick={() => show("hotels", order.id)}
                        icon={{
                            url: "/images/marker-courier.svg",
                        }}
                        position={{
                            lat: Number(16.0648213),
                            lng: Number(108.2330777),
                        }}
                    />
                );
            })}
        </Map>
    );
};