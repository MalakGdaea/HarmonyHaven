import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();


export async function sendOrderEmail({ to, orderNumber, items, customerName, total, deliveryType }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Build items HTML
  const itemsHtml = items.map(item => `
    <div style="display: flex; align-items: center; margin-bottom: 20px; font-family: Arial, sans-serif;">
      <div style="height: 100px; width="100px"; margin-right: 15px;">
        <img src="${item.imageUrl}"
           style="width: 100%; height: 100%; object-fit: contain; flex-shrink: 0;" />
      </div>
      <div>
        <p style="margin: 0; font-weight: bold;">${item.name}</p>
        <p style="margin: 0;">Quantity: ${item.quantity}</p>
        <p style="margin: 0;">Price: $${item.price}</p>
      </div>
    </div>
  `).join("");

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
      <h2 style="color: #111;">It’s ordered!</h2>
      <p>Hi ${customerName}, your order has been received.</p>

      <div style="margin: 20px 0;">
        <p><strong>Order No. :</strong> ${orderNumber}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>

      <h3 style="margin-top: 30px;">Your Items</h3>
      ${itemsHtml}

      <div style="margin-top: 30px;">
        <p><strong>Total:</strong> $${total}</p>
        <p><strong>Delivery Type:</strong> ${deliveryType}</p>
      </div>

      <p style="margin-top: 40px;">Thank you for shopping with us!</p>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: `Order Confirmation #${orderNumber}`,
    html: htmlContent,
  });
}
