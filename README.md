Jamsocket App spawner

## Development

Add `.env.local` file to the project root and populate these variables:

```
NEXT_PUBLIC_APP_NAME=…
NEXT_PUBLIC_APP_DESCRIPTION=…
JAMSOCKET_USERNAME=…
JAMSOCKET_SERVICE=…
JAMSOCKET_ACCESS_TOKEN=…
JAMSOCKET_GRACE_PERIOD_SEC=…
```

Then, run:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
