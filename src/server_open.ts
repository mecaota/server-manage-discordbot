import { config } from "https://deno.land/x/dotenv/mod.ts";

const endpoint = config().ENDPOINT || "";
const webhook_id = config().WEBHOOK_ID || "";
const webhook_token = config().WEBHOOK_TOKEN || "";
const bot_name = config().BOT_NAME || "";
const server_name = config().SERVER_NAME || "";
const server_address = config().SERVER_ADDRESS || "";

function make_request_uri(endpoint: string, webhook_id: string, webhook_token: string): string {
    return `https://${endpoint}/webhooks/${webhook_id}/${webhook_token}`;
}
function post_message(url: string, request: any) {
    const body = JSON.stringify(request)
    fetch(
        url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body
        }
    )
}

const request = {
    "username": bot_name,
    "content":"サーバーが起動したかどうかは分かりません",
    "embeds":[
        {
            "title": server_name,
            "description": `サーバーアドレス: ${server_address}`
        }
    ]
};
post_message(make_request_uri(endpoint, webhook_id, webhook_token), request)