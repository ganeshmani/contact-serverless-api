import * as AWS from "aws-sdk";
export default class EmailService {
  public readonly ses: AWS.SES;
  private static instance: AWS.SES | null = null;
  constructor() {
    if (!EmailService.instance) {
      this.ses = new AWS.SES();
      EmailService.instance = this.ses;
    } else {
      this.ses = EmailService.instance;
    }
  }

  async sendEmail(payload: any) {
    const params: AWS.SES.SendEmailRequest = {
      Source: payload.from,
      Destination: {
        ToAddresses: [payload.to],
      },
      Message: {
        Subject: {
          Data: payload.subject,
        },
        Body: {
          Text: {
            Data: payload.message,
          },
        },
      },
    };

    try {
      const response = await this.ses.sendEmail(params).promise();

      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
