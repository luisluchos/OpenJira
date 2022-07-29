import { isValidObjectId } from "mongoose"
import { db } from ".";
import {Entry} from "../models";
import {IEntry} from "../models/Entry";


export const getEntryById = async (id: string | string[] | undefined): Promise<IEntry | null>=> {
    if(!isValidObjectId(id)) return null;

    await db.connect();
    const entry = await Entry.findById(id).lean(); //el lean es para mandar la información justa
    await db.disconnect();

    return JSON.parse(JSON.stringify(entry)) 

}
