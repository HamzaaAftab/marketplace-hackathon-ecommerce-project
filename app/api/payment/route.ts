import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia", // Ensure correct API version
});

export async function POST(req: Request) {
    try {
        if (!process.env.STRIPE_SECRET_KEY) {
            throw new Error("STRIPE_SECRET_KEY is missing in environment variables.");
        }

        const body = await req.json();
        const { product } = body;

        if (!product || !product.name || !product.price) {
            return NextResponse.json({ error: "Invalid product data" }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: product.name,
                        },
                        unit_amount: product.price * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${req.headers.get("origin")}/success`,
            cancel_url: `${req.headers.get("origin")}/error`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: unknown) {
        console.error("Stripe error:", error);
        
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message || "Payment failed" }, { status: 500 });
        } else {
            return NextResponse.json({ error: "Unknown error occurred" }, { status: 500 });
        }
    }
}








