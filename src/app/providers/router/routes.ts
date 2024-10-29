import categories from "../../../pages/categories";
import chatRooms from "../../../pages/chat-rooms";
import chatRoom from "../../../pages/chat-room";
import { ReactNode } from "react";

const routes: {path: string; component: () => ReactNode}[] = [
    {
        path: '/categories',
        component: categories
    },
    {
        path: '/categories/:id/chat-rooms',
        component: chatRooms
    },
    {
        path: '/categories/:id/chat-rooms/:roomId',
        component: chatRoom
    },
]

export default routes