const SANDBOX_URL = 'https://sandbox.payfast.co.za/eng/process';
const LIVE_URL    = 'https://www.payfast.co.za/eng/process';

export function redirectToPayFast({ courseId, courseTitle, price, userEmail, userName, userId }) {
  const isSandbox   = import.meta.env.VITE_PAYFAST_SANDBOX === 'true';
  const merchantId  = import.meta.env.VITE_PAYFAST_MERCHANT_ID;
  const merchantKey = import.meta.env.VITE_PAYFAST_MERCHANT_KEY;

  const paymentId = `${userId}_${courseId}_${Date.now()}`;
  const origin    = window.location.origin;

  const [firstName, ...rest] = (userName || 'Student').split(' ');

  const fields = {
    merchant_id:   merchantId,
    merchant_key:  merchantKey,
    return_url:    `${origin}/payment/success?courseId=${courseId}&pid=${paymentId}`,
    cancel_url:    `${origin}/payment/cancel?courseId=${courseId}`,
    name_first:    firstName,
    name_last:     rest.join(' ') || '',
    email_address: userEmail,
    m_payment_id:  paymentId,
    amount:        price.toFixed(2),
    item_name:     courseTitle,
    item_description: `Camluk Academy — ${courseTitle}`,
  };

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = isSandbox ? SANDBOX_URL : LIVE_URL;

  Object.entries(fields).forEach(([name, value]) => {
    if (value !== '' && value != null) {
      const input = document.createElement('input');
      input.type  = 'hidden';
      input.name  = name;
      input.value = value;
      form.appendChild(input);
    }
  });

  document.body.appendChild(form);
  form.submit();
}
