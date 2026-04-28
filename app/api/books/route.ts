import { NextResponse } from "next/server";

const books = [
  { id: 1, title: "吾輩は猫である", author: "夏目漱石" },
  { id: 2, title: "人間失格", author: "太宰治" },
  { id: 3, title: "こころ", author: "夏目漱石" },
];

export function GET() {
  return NextResponse.json({ books });
}
