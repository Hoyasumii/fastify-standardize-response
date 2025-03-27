import { InternalServerError } from "@/errors";
import type { FastifyReply, FastifyRequest } from "fastify";

export async function invalidData(_: FastifyRequest, _2: FastifyReply) {
  throw new InternalServerError("Testing Error", "This is a Testing Message");
}
