# アプリポータルサイト

## 概要
このプロジェクトは、複数のウェブアプリケーションを整理・管理するためのポータルサイトです。ポータルサイトから各アプリケーションに簡単にアクセスできます。

## ディレクトリ構造
my-portal-site/
│
├── index.html# ポータルサイトのメインページ
├── styles.css# ポータルサイト用の共通スタイル
├── scripts/
│   └── portal.js# ポータルサイト用のスクリプト
│
├── apps/# 各アプリケーションを格納するフォルダ 
│   └── word-game/
│       ├── index.html
│       ├── styles.css
│       ├── scripts/
│       │   └── script.js
│       └── words.js
│
└── assets/# 画像、フォント、その他のアセット
    ├── images/
    └── fonts/


## アプリケーション一覧

- **単語判定ゲーム**: ユーザーが入力した単語が与えられた単語と一致するかを判定します。
- **別のアプリケーション**: 将来的に追加予定。

## 使用技術

- HTML
- CSS
- JavaScript

## 開発手順

1. プロジェクトをクローンまたはダウンロードします。
2. VSCodeなどのエディタでプロジェクトを開きます。
3. `index.html` をブラウザで開き、ポータルサイトを確認します。
4. 新しいアプリケーションを `apps/` ディレクトリに追加します。

## ライセンス

MIT License
