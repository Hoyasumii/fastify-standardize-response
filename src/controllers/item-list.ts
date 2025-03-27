import type { FastifyReply, FastifyRequest } from "fastify";

export async function itemList(_: FastifyRequest, reply: FastifyReply) {
  return reply.status(200).send(["Orange", "Apple", "Strawberry"]);
}
