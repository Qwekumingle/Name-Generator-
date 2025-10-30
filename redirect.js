export default async function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <meta property="fc:frame" content="vNext">
        <meta property="fc:frame:image" content="https://yourdomain.com/ohara-preview.png">
        <meta property="fc:frame:button:1" content="Open Ohara">
        <meta property="fc:frame:post_url" content="https://ohara.ai/mini-apps/5fc22023-b4a9-44dd-b054-c1d6fb3d9865">
      </head>
    </html>
  `);
}
