import serverless from "serverless-http";
import express, { NextFunction, Request, Response } from "express";

import DBClient from "./lib/DynamoDB/aws-dynamodb";
import EmailService from "./lib/SES/aws-ses";
const app = express();

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "Hello from data!",
  });
});

app.post(
  "/contact/create",
  async (req: Request, res: Response, next: NextFunction) => {
    const dbClient = new DBClient();

    // parse the body

    const body = JSON.parse(req.body);

    const response = await dbClient.create(body, "contacts");

    if (response !== null) {
      const emailService = new EmailService();
      emailService.sendEmail({
        from: "ganeshmani009@gmail.com",
        to: "ganeshmani15594@gmail.com",
        subject: "Contact created",
        message: "Contact created successfully!",
      });

      return res.status(200).json({
        message: "Contact created successfully!",
        data: response,
      });
    } else {
      return res.status(500).json({
        message: "Contact failed to create!",
      });
    }

    // console.log("body", body);
  }
);

app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);
