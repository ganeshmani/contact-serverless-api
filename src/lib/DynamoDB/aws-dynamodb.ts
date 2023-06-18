import * as nanoid from "nanoid";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

export default class DBClient {
  public readonly dynamodb: DocumentClient;
  private static instance: DocumentClient | null = null;
  constructor() {
    if (!DBClient.instance) {
      this.dynamodb = new DocumentClient();
      DBClient.instance = this.dynamodb;
    } else {
      this.dynamodb = DBClient.instance;
    }
  }

  async create(payload: any, tableName: string) {
    const params: DocumentClient.PutItemInput = {
      TableName: tableName,
      Item: {
        id: nanoid.nanoid(),
        ...payload,
      },
    };

    try {
      const response = await this.dynamodb.put(params).promise();

      console.log(response);
      return params.Item;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async get(tableName: string, key: string, value: string) {
    const params: DocumentClient.GetItemInput = {
      TableName: tableName,
      Key: {
        [key]: {
          S: value,
        },
      },
    };

    try {
      const data = await this.dynamodb.get(params).promise();
      return data.Item;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async put() {}

  async delete() {}
}
