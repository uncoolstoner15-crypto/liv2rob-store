import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { items, email, total } = await request.json()

    // PayPal order creation
    const payload = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: (total / 100).toString(),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: (total / 100).toString(),
              },
            },
          },
          items: items.map((item: any) => ({
            name: `${item.name} (${item.size} - ${item.color})`,
            quantity: item.quantity.toString(),
            unit_amount: {
              currency_code: 'USD',
              value: (item.price / 100).toString(),
            },
          })),
        },
      ],
      payer: {
        email_address: email,
      },
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
    }

    // In production, call PayPal API
    // For now, return a redirect URL
    return NextResponse.json({
      redirectUrl: 'https://www.sandbox.paypal.com/checkoutnow',
    })
  } catch (error) {
    console.error('PayPal error:', error)
    return NextResponse.json({ error: 'Payment failed' }, { status: 500 })
  }
}
