// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { db } from "../../../database";
import Entry, { IEntry } from "../../../models/Entry";


type Data = { message: string } | IEntry | IEntry[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  console.log("REQ",req.method);

  switch (req.method) {
    case "GET":
      return getEntry(req, res);
    case "PUT":
      return updateEntries(req, res);

    default:
      return res.status(400).json({ message: "Invalid method" });
  }
}




const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;
  await db.connect();
  const findID = await Entry.findById(id);
  await db.disconnect();

  if (!findID) {
    return res.status(400).json({ message: "Invalid id" });
  }

  res.status(200).json(findID!);
};

const updateEntries = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log("REQ",req.method);
  const { id } = req.query;

  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  //check if exist id in db
  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(404).json({ message: "Entry not found" });
  }

  // vamos a usasr el body para actualizar description y status, si no viene en el body, ussaremos entryToUpdate.description y entryToUpdate.status
  const { description = entryToUpdate.description, status = entryToUpdate.status } = req.body;

  try {
    const updateEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runVlidators: true, new: true }
    );
    //alternativa//
    /*   entryToUpdate.description = description;
      entryToUpdate.status = status;
      await entryToUpdate.save(); */
    res.status(200).json(updateEntry!);
  } catch (error) {
    await db.disconnect();
    res.status(400).json({ message: "Algo salio mal, revisar consola del servidor" });
  }
};
