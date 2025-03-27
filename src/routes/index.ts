import { helloWorld, isWorking, itemList } from "@/controllers";
import type { FastifyInstance } from "fastify";
import usersRoutes from "./users-routes";
import statusByError from "@/errors/status-by-error";
import { isJSON } from "@/utils";

export default async function routes(app: FastifyInstance) {
  app.get("/hello-world", helloWorld);
  app.get("/item-list", itemList);
  app.get("/is-working", isWorking);

  app.register(usersRoutes, { prefix: "/users" });

  app.setErrorHandler((error, _, reply) => {
    return reply.status(statusByError[error.name] ?? 500).send({
      success: reply.statusCode < 400,
      error: { cause: error.cause ?? undefined, message: error.message },
    });
  });

  app.addHook("onSend", async (request, _2, payload) => {
    if (request.url === "/docs") return _2;
    const isJson = isJSON(payload as string);

    console.log(payload);

    const data: { success: boolean } = isJson
      ? JSON.parse(payload as string)
      : payload;

    const dataCondition =
      typeof data === "object" && "success" in data && !data.success;

    if (dataCondition) return payload;

    return JSON.stringify({ success: true, data });
  });
}
