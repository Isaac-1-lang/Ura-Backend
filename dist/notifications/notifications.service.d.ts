import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createNotificationDto: CreateNotificationDto): import(".prisma/client").Prisma.Prisma__NotificationClient<{
        title: string;
        id: string;
        createdAt: Date;
        message: string;
        recipient: string;
        read: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findByRecipient(recipientId: string): import(".prisma/client").Prisma.PrismaPromise<{
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
