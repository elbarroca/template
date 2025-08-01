import { stripe } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
export async function POST(req: Request) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
    }
    return new NextResponse(`Webhook Error: Unknown error`, { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session

  if (event.type === 'checkout.session.completed') {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    )

    const supabase = await createClient()

    await supabase
      .from('profiles')
      .update({ stripe_subscription_id: subscription.id })
      .eq('stripe_customer_id', session.customer as string)
  }

  return new NextResponse(null, { status: 200 })
}