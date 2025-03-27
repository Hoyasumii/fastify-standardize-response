import type { FastifyInstance } from "fastify";
import controller from "@/controllers/users";

export default async function usersRoutes(app: FastifyInstance) {
  app.get("/", controller.getData);
  app.get("/invalid", controller.invalidData);
}
