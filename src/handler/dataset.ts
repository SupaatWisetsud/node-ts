import { Request, Response } from "express";

export const getProjects =async (_: Request, res: Response) => {
    try {
        return res.status(200).json({message: 'ok'});
    } catch(e) {
        return res.status(500).json(e);
    }
}