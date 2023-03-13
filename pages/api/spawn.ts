// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";

type ResponseData = any;

const BASE_URL = "https://api.jamsocket.com";
const ACCESS_TOKEN = process.env.JAMSOCKET_ACCESS_TOKEN;
const USERNAME = process.env.JAMSOCKET_USERNAME;
const SERVICE = process.env.JAMSOCKET_SERVICE;
const GRACE_PERIOD = process.env.JAMSOCKET_GRACE_PERIOD_SEC;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const fetchResponse = await fetch(
    `${BASE_URL}/user/${USERNAME}/service/${SERVICE}/spawn`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        grace_period: GRACE_PERIOD,
      }),
    }
  );

  if (!fetchResponse.ok) {
    res.status(500).json({
      error: `Failed to spawn: [${fetchResponse.status}] ${fetchResponse.statusText}`,
      reason: await fetchResponse.json(),
    });
    return;
  }
  const responseJson = await fetchResponse.json();
  res.status(200).json(responseJson);
}
