import type { FastifyReply, FastifyRequest } from "fastify";

export async function isWorking(_: FastifyRequest, reply: FastifyReply) {
  return reply.status(200).send(true);
}
