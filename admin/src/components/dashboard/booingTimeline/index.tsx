import { useTranslate, useNavigation } from "@refinedev/core";
import { useSimpleList } from "@refinedev/antd";
import {
    Typography,
    List as AntdList,
    Tooltip,
    ConfigProvider,
    theme,
} from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { IBooking } from "interfaces";
import {
    TimelineContent,
    CreatedAt,
    Number,
    Timeline,
    TimelineItem,
} from "./styled";

dayjs.extend(relativeTime);

export const BookingTimeline: React.FC = () => {
    const t = useTranslate();
    const { show } = useNavigation();

    const { listProps } = useSimpleList<IBooking>({
        resource: "Booking",
        initialSorter: [
            {
                field: "createdAt",
                order: "desc",
            },
        ],
        pagination: {
            pageSize: 6,
        },
        syncWithLocation: false,
    });

    const { dataSource } = listProps;

    const { Text } = Typography;

    const orderStatusColor = (
        id: string,
    ):
        | { indicatorColor: string; backgroundColor: string; text: string }
        | undefined => {
        switch (id) {
            case "1":
                return {
                    indicatorColor: "orange",
                    backgroundColor: "#fff7e6",
                    text: "Booking",
                };
            case "2":
                return {

                    indicatorColor: "red",
                    backgroundColor: "#fff1f0",
                    text: "Cancel",
                };
            case "3":
                return {
                    indicatorColor: "cyan",
                    backgroundColor: "#e6fffb",
                    text: "Pending",
                };
            case "4":
                return {
                    indicatorColor: "green",
                    backgroundColor: "#e6f7ff",
                    text: "Done",
                };
            default:
                break;
        }
    };

    return (
        <AntdList
            {...listProps}
            pagination={{
                ...listProps.pagination,
                simple: true,
            }}
        >
            <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
                <Timeline>
                    {dataSource?.map(
                        ({ bookingdate, status, id }) => (
                            <TimelineItem
                                key={id}
                                color={
                                    orderStatusColor(status.id.toString())
                                        ?.indicatorColor
                                }
                            >
                                <TimelineContent
                                    backgroundColor={
                                        orderStatusColor(status.id.toString())
                                            ?.backgroundColor || "transparent"
                                    }
                                >
                                    <Tooltip
                                        overlayInnerStyle={{ color: "#626262" }}
                                        color="rgba(255, 255, 255, 0.3)"
                                        placement="topLeft"
                                        title={dayjs(bookingdate).format("lll")}
                                    >
                                        <CreatedAt italic>
                                            {dayjs(bookingdate).fromNow()}
                                        </CreatedAt>
                                    </Tooltip>
                                    <Text>
                                        {t(
                                            `dashboard.timeline.orderStatuses.${orderStatusColor(
                                                status.id.toString(),
                                            )?.text
                                            }`,
                                        )}
                                    </Text>
                                    <Number
                                        onClick={() => show("orders", id)}
                                        strong
                                    >
                                        #{id}
                                    </Number>
                                </TimelineContent>
                            </TimelineItem>
                        ),
                    )}
                </Timeline>
            </ConfigProvider>
        </AntdList>
    );
};