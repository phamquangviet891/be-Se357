import jwt from "jsonwebtoken";

//-----internal module-----//
import fs from "fs";
import path from "path";

//-----Common-----//
import {
  accessTokenKeysFolderPath,
  refreshTokenKeysFolderPath,
} from "../common/tokenKeysFolderPaths.js";

export const generateAccessToken = (userID) => {
  try {
    const payload = userID;
    const key = fs.readFileSync(
      path.join(accessTokenKeysFolderPath, "key.key"),
      "utf8"
    );
    const accessToken = jwt.sign(payload, key, { algorithm: "RS256" });
    return accessToken;
  } catch (e) {
    throw e;
  }
};

export const generateRefreshToken = (userID) => {
  try {
    const payload=userID;
    const key = fs.readFileSync(
      path.join(refreshTokenKeysFolderPath, "key.key"),
      "utf8"
    );
    const refreshToken = jwt.sign(payload, key, { algorithm: "RS256" });
    return refreshToken;
  } catch (e) {
    throw e;
  }
};
