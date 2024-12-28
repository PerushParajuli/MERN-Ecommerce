import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { RxCross1 } from "react-icons/rx";

export function SidebarWithContentSeparator(props) {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value); // Toggle accordion open/close
    };

    const { onSendData, sidebar } = props;

    return (
      <div className="relative">
        <Card className="h-[100vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 flex flex-col absolute right-0">
            <div className="mb-2 p-4 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                    Sidebar
                </Typography>

                <RxCross1
                    onClick={() => {
                      onSendData(!sidebar); // Toggle sidebar visibility
                    }}
                />
            </div>
            <List>
                {/* Dashboard Accordion */}
                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 1 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="border-b-0 p-3"
                        >
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5 mr-2" />
                            </ListItemPrefix>
                            <Typography
                                color="blue-gray"
                                className="mr-auto font-normal"
                            >
                                Dashboard
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody
                        className={`py-1 transition-all duration-300 ${
                            open === 1 ? "block" : "hidden"
                        }`}
                    >
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                Analytics
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                Reporting
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                Projects
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>

                {/* E-Commerce Accordion */}
                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 2 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className="border-b-0 p-3"
                        >
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5 mr-2" />
                            </ListItemPrefix>
                            <Typography
                                color="blue-gray"
                                className="mr-auto font-normal"
                            >
                                E-Commerce
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody
                        className={`py-1 transition-all duration-300 ${
                            open === 2 ? "block" : "hidden"
                        }`}
                    >
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                Orders
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                Products
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>

                {/* Divider */}
                <hr className="my-2 border-blue-gray-50" />

                {/* Inbox */}
                <ListItem>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5 mr-2" />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip
                            value={"0 by default"}
                            size="sm"
                            variant="ghost"
                            color="blue-gray"
                            className="rounded-full"
                        />
                    </ListItemSuffix>
                </ListItem>

                {/* Profile */}
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5 mr-2" />
                    </ListItemPrefix>
                    Profile
                </ListItem>

                {/* Settings */}
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5 mr-2" />
                    </ListItemPrefix>
                    Settings
                </ListItem>

                {/* Log Out */}
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5 mr-2" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
        </div>
    );
}
