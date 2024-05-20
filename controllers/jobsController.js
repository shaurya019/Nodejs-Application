import jobsModel from "../models/jobsModel.js";
import mongoose from "mongoose";
import moment from "moment";

export const createJobController = async (req, res, next) => {
    const { company, position } = req.body;
    if (!company || !position) {
      next("Please Provide All Fields");
    }
    req.body.createdBy = req.user.userId;
    const job = await jobsModel.create(req.body);
    res.status(201).json({ job });
  };

export const getAllJobsController = async (req, res, next) => {};

export const updateJobController = async (req, res, next) => { }; 

export const deleteJobController = async (req, res, next) => {};

export const jobStatsController = async (req, res, next) => {};

