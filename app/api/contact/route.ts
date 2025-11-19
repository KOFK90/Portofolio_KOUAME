import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

  export async function POST(req: Request) {
    try {
      const body = await req.json();
      const { nom, email, adresse, objet, message } = body;

      if (!nom || !email || !objet || !message) {
        return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
      }

      const created = await prisma.contact.create({
        data: {
          nom,
          email,
          adresse: adresse || "",
          objet,
          message,
        },
      });

      return NextResponse.json({ message: "Message enregistré", id: created.id });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
  }

  /*---------------------------------------------------------
  Notes:
  - Configure DATABASE_URL in your environment to point to your Mongo Atlas cluster.
  - Ensure your prisma schema has the Contact model (comme dans ta capture).
  - Run: npx prisma generate && npx prisma db push (for Mongo, db push syncs schema).*/