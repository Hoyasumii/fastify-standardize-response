import { UserDataService } from "@/services";
import type { FastifyReply, FastifyRequest } from "fastify";

export async function getData(_: FastifyRequest, reply: FastifyReply) {
  const service = new UserDataService();

  const response = await service.run();

  return reply.status(200).send(response);
}
