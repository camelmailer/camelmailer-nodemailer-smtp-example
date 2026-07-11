# CamelMailer with Nodemailer (SMTP)

This example shows how to use [CamelMailer](https://camelmailer.com) with [Nodemailer](https://nodemailer.com) over plain SMTP — no SDK, no HTTP API. Anything that can speak SMTP can send through CamelMailer.

## Where the credentials come from

1. Open your CamelMailer dashboard → your organization → your server → **Credentials**.
2. Create a new credential of type **SMTP (password)**.
3. Copy the credential key — it is shown exactly once.

The key is your SMTP **password**. The username is ignored by the server (any non-empty value works); authentication is by the key alone. The SMTP host is your instance's SMTP hostname (shown in the dashboard next to the credential), port **587** for STARTTLS submission or **25**.

## Instructions

1. Install dependencies:

   ```sh
   npm install
   ```

2. Set your environment:

   ```sh
   export CAMELMAILER_SMTP_HOST="mx.your-instance.example"
   export CAMELMAILER_SMTP_PORT=587           # or 25
   export CAMELMAILER_SMTP_KEY="<credential key>"
   export CAMELMAILER_FROM="you@yourdomain.com"
   export CAMELMAILER_TO="delivered@example.com"
   ```

3. Send:

   ```sh
   npm start
   ```

Prefer the HTTP API? See the [camelmailer-node-example](https://github.com/camelmailer/camelmailer-node-example) — the SDK uses `CAMELMAILER_API_KEY` / `CAMELMAILER_BASE_URL` instead of SMTP credentials.

## License

MIT License
