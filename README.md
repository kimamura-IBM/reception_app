# Twilioを用いた受付呼び出しプログラム
Herokuに自動で[デプロイされます](https://damp-reaches-2263.herokuapp.com/)。

## ユーザーが行う操作
1. 呼び出す担当者を選択
2. その担当者の電話に自動メッセージがコールされます

## 制作メモ
担当者の情報はUserモデルに[格納されています](https://damp-reaches-2263.herokuapp.com/users)。※追加・変更・削除可能です。
Viewでそれらの情報を呼び出しています。

ほとんどTwilioのチュートリアル通りです。[#ありがとうチュートリアル](https://github.com/TwilioDevEd/clicktocall-rails)
