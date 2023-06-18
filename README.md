# Contact Serverless API

Contact Serverless API is a serverless application built with AWS Lambda, Node.js, and the Serverless Framework. It provides a simple and scalable API for managing contacts.

## Features

- Create a new contact with a unique ID
- Retrieve contact details by ID
- Delete a contact by ID

## Getting Started

### Prerequisites

- Node.js and npm installed
- An AWS account with proper permissions

### Installation

1. Clone the repository: `git clone https://github.com/ganeshmani/contact-serverless-api.git`
2. Navigate to the project directory: `cd contact-serverless-api`
3. Install the dependencies: `npm install`

### Configuration

1. Create an AWS IAM user with the necessary permissions for accessing DynamoDB and SES (Simple Email Service).
2. Set up your AWS credentials by running `aws configure` and providing the Access Key ID and Secret Access Key of the IAM user.
3. Update the `serverless.yml` file with your desired table name in the `resources.Resources.ContactsTable.Properties.TableName` field.

### Deployment

1. Deploy the serverless application to AWS: `sls deploy`
2. After deployment, note the provided API endpoints for accessing the contact API.

## Usage

The Contact Serverless API exposes the following endpoints:

- `GET /contacts/{id}`: Retrieves contact details by ID
- `POST /contacts`: Creates a new contact
- `DELETE /contacts/{id}`: Deletes a contact by ID

To test the API, you can use tools like cURL or Postman. For example:

- Create a new contact:

curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john.doe@example.com"}' https://your-api-endpoint/contacts

- Retrieve contact details:

curl https://your-api-endpoint/contacts/{id}

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- The Serverless Framework: [https://www.serverless.com](https://www.serverless.com)
- AWS Lambda: [https://aws.amazon.com/lambda](https://aws.amazon.com/lambda)
- AWS DynamoDB: [https://aws.amazon.com/dynamodb](https://aws.amazon.com/dynamodb)
- AWS SES: [https://aws.amazon.com/ses](https://aws.amazon.com/ses)
