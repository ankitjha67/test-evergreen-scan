// Test file with Stripe API calls that match the basil breaking changes
const stripe = require('stripe')('sk_test_xxx');

async function getUpcomingInvoice(customerId) {
  // This uses the deprecated retrieveUpcoming method
  const invoice = await stripe.invoices.retrieveUpcoming({ customer: customerId });
  return invoice;
}

async function getSubscription(subId) {
  const sub = await stripe.subscriptions.retrieve(subId);
  // These fields are being removed in the basil changes
  const start = sub.current_period_start;
  const end = sub.current_period_end;
  console.log(`Period: ${start} - ${end}`);
  return sub;
}

module.exports = { getUpcomingInvoice, getSubscription };
