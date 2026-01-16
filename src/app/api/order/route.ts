import { getSheetsClient } from "@/lib/googleSheets";

function isH1Valid(pickupDate: string) {
  const today = new Date();
  const pickup = new Date(pickupDate);
  const diff = pickup.getTime() - today.getTime();
  return diff >= 24 * 60 * 60 * 1000;
}

export async function POST(req: Request) {
  const data = await req.json();

  if (!isH1Valid(data.pickupDate)) {
    return Response.json(
      { error: "Pre-order minimal H-1" },
      { status: 400 }
    );
  }

  const sheets = getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "Sheet1!A:H",
    valueInputOption: "RAW",
    requestBody: {
      values: [[
        new Date().toISOString(),
        data.name,
        data.phone,
        data.product,
        data.qty,
        data.pickupDate,
        data.total,
        "NEW"
      ]]
    }
  });

//   // Kirim WhatsApp
//   await fetch("https://api.watzap.id/send", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${process.env.WATZAP_API_KEY}`,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       phone: data.phone,
//       message: `
// Halo Kak ${data.name} 👋
// Pre-order kami terima 🍞

// Produk: ${data.product}
// Qty: ${data.qty}
// Ambil: ${data.pickupDate}
// Total: Rp${data.total}

// Silakan transfer ke:
// BCA 123xxxx
// `
//     })
//   });

//   return Response.json({ success: true });
// }
}