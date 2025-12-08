import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import sanitizeHtml from 'sanitize-html';

dotenv.config();


export async function sendOrderEmail(order) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const safeCustomerName = sanitizeHtml(order.customer.name);
  const safeOrderNumber = sanitizeHtml(order.orderNumber);
  const safeTotal = sanitizeHtml(String(order.total));
  const safeDeliveryType = sanitizeHtml(order.deliveryType);
  const safeTo = sanitizeHtml(order.customer.email);

  // Build items HTML
  const itemsHtml = order.items.map(item => `
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
      <p>Hi ${safeCustomerName}, your order has been received.</p>

      <div style="margin: 20px 0;">
        <p><strong>Order No. :</strong> ${safeOrderNumber}</p>
        <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>

      <h3 style="margin-top: 30px;">Your Items</h3>
      ${itemsHtml}

      <div style="margin-top: 30px;">
        <p><strong>Total:</strong> $${safeTotal}</p>
        <p><strong>Delivery Type:</strong> ${safeDeliveryType}</p>
      </div>

      <p style="margin-top: 40px;">Thank you for shopping with us!</p>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: safeTo,
    subject: `Order Confirmation #${safeOrderNumber}`,
    html: htmlContent,
  });
}
