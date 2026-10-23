import { NextResponse } from "next/server";

export async function GET() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:Kumar;Sai;;;
FN:Sai Kumar
ORG:SaiKumar Labs
TITLE:Founder & Systems Architect
TEL;TYPE=CELL,VOICE,PREF:+917036416086
EMAIL;TYPE=WORK,INTERNET:contact@saikumarlabs.com
URL:https://saikumarlabs.com
NOTE:We build AI automations, high-speed Next.js websites, and custom software for service businesses.
END:VCARD`;

  return new NextResponse(vcard, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Sai-Kumar-SaiKumar-Labs.vcf"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
