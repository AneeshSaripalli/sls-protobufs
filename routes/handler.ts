import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import { Book } from "./protos/gen/book_pb.js";

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  const book: Book = new Book();
  book.setAuthor("Aneesh Saripalli");

  return {
    statusCode: 200,
    body: JSON.stringify({
      response: "some body here",
    }),
  };
};
