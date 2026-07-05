import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(createNotificationDto: CreateNotificationDto): import(".prisma/client").Prisma.Prisma__NotificationClient<{
        title: string;
        id: string;
        createdAt: Date;
        message: string;
        recipient: string;
        read: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findMyNotifications(req: any): import(".prisma/client").Prisma.PrismaPromise<{
        title: string;
        id: string;
        createdAt: Date;
        message: string;
        recipient: string;
        read: boolean;
    }[]>;
    markAsRead(id: string): import(".prisma/client").Prisma.Prisma__NotificationClient<{
        title: string;
        id: string;
        createdAt: Date;
        message: string;
        recipient: string;
        read: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
