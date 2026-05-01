@AGENTS.md

## 使用技術

- Next.js 16（画面の構成）
- Firebase（ログイン・データ保存・アクセス解析）
- Tailwind CSS（見た目）
- TypeScript（言語）

---

## ディレクトリ構成
| 種類 | 場所 |
|---|---|
| ページ | `app/` 配下 |
| 共通パーツ（ボタン等） | `components/` |
| ログイン状態の管理 | `context/AuthContext.tsx` |
| Firebase の設定 | `lib/firebase.ts` |
| テスト | `__tests__/` 配下 |

---

## 画面の構成
| ページ | 役割 |
|---|---|
| /login | ログイン画面 |
| /bookshelf | 書籍の一覧・追加・編集・削除 |
| /lendings | 貸出状況の管理 |

---

## テストの実行
```bash
npm test  # テスト＋lint＋ビルドをまとめて確認
```

---

## コーディングルール
- ログイン状態が必要な箇所は `useAuth()` を使う
- `"use client"` はボタンのクリックや状態管理が必要なときだけ付ける

---

## 禁止事項
- Firestore のデータを確認なしに削除しない
- `.env.local` をコミットしない（パスワードが入っている！！！）
- `npm test` をせずにコミットしない
