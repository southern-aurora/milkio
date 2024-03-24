import { argv } from "bun"
import { camel, hump, hyphen } from "@poech/camel-hump-under"

export type CreateTemplateTools = {
  name: string;
  directory: string;
  camel: (str: string) => string;
  hump: (str: string) => string;
  hyphen: (str: string) => string;
};

export type CreateTemplateFn = (tools: CreateTemplateTools) =>
  | {
      path: string;
      content: string;
    }
  | Promise<{
      path: string;
      content: string;
    }>;

export async function createTemplate(fn: CreateTemplateFn) {
  const tools = {
    name: argv[2],
    directory: argv[3],
    camel: (str: string) => camel(str).replaceAll("-", "").replaceAll("_", ""),
    hump: (str: string) => hump(str).replaceAll("-", "").replaceAll("_", ""),
    hyphen: (str: string) => hyphen(str).replaceAll("_", "")
  }
  const file = await fn(tools)
  await Bun.write(file.path, file.content)
}
