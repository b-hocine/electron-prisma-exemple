import type { Prisma } from '../../../generated/client';
import { prisma } from '../../prisma';
// import {z} from "zod";

const findAll=()=>{
    return prisma.user.findMany();
}

const create=async (user:Prisma.UserCreateInput)=>{
    return await prisma.user.create({ data: user });
}

export const useUserHandler=(ipcMain:Electron.IpcMain)=>{
    ipcMain.handle('user', () => {
        return findAll();
    });
    ipcMain.handle('user-create', (event,user:Prisma.UserCreateInput) => {
        return create(user);
    });
}