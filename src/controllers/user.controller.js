import prisma from "../prismaClient.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createUser = asyncHandler(async (req, res) => {
  const user = await prisma.user.create({
    data: req.body,
  });
  res.status(201).json(new ApiResponse(201, user, "User created successfully"));
});

const getUser = asyncHandler(async (req, res) => {
  const users = await prisma.user.findMany();
  res
    .status(200)
    .json(new ApiResponse(200, users, "Users fetched successfully"));
});

export { createUser, getUser };
