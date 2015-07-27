# Twilioを用いた受付呼び出しプログラム

## ユーザーが行う操作
1. 呼び出す担当者を選択
2. その担当者の電話に自動メッセージがコールされます

## 制作メモ
担当者の情報はUserモデルに格納されています。※追加・変更・削除可能です。
Viewでそれらの情報を呼び出しています。

TwilioのAPIについては、[チュートリアル](https://github.com/TwilioDevEd/clicktocall-rails)を参考にしています。

## Github・Heroku関連
[https://github.com/ayako0802/reception_app](https://github.com/ayako0802/reception_app)

master → 本番環境

dev → [内部開発環境](https://twilio-n2p-dev.herokuapp.com/)

test_saito → [デザイン開発環境](https://twilio-n2p-testsaito.herokuapp.com/)

staging → [ステージング環境](https://twilio-n2p-staging.herokuapp.com/)

