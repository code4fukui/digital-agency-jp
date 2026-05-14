# digital-agency-jp

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

日本のデジタル庁（Digital Agency）が公開する情報をスクレイピングし、CSV、JSON、Markdownなどのアクセスしやすくマシンリーダブルな形式に変換するオープンデータプロジェクトです。このリポジトリには、変換されたデータの利用例を示すシンプルなウェブアプリケーションも含まれています。

このプロジェクトは [Code for FUKUI](https://code4fukui.github.io/) によってメンテナンスされています。

## ライブデモ

このリポジトリには、生成されたオープンデータを消費するいくつかのウェブアプリケーションがホストされています：

- **[News Display App](https://code4fukui.github.io/digital-agency-jp/)**: デジタル庁の公式ウェブサイトおよびnote.comブログからの最新ニュースと記事のギャラリービュー。生成された `news.csv` および `note.csv` を使用して作成されています。
- **[Personnel Search App](https://code4fukui.github.io/digital-agency-jp/digital-agency-person.html)**: デジタル庁の役員および職員の検索およびフィルタ可能なテーブル。`digital-agency-person.csv` によって動作します。
- **[GIGA School Survey Results](https://code4fukui.github.io/digital-agency-jp/GIGA%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E6%A7%8B%E6%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A8%E3%81%AE%E3%82%A2%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%88%E3%81%AE%E5%8F%96%E3%82%8A%E3%81%BE%E3%81%A8%E3%82%81%E7%B5%90%E6%9E%9C/)**: GIGA School Initiative 調査に関する連名大臣メッセージのシンプルなビューア。

## データセット

このプロジェクトの核は、さまざまなオープンフォーマットに変換されたデータセットの収集です。主なデータはCSV形式で、JSONおよびMarkdown形式も提供されています。

"CSV for App"のリンクは、ライブデモで使用される生のファイルを指しています。

### 人事・組織

| データセット | CSV | JSON | Markdown |
| :--- | :--- | :--- | :--- |
| **人事（統合版）** | [digital-agency-person.csv](digital-agency-person.csv) | [digital-agency-person.json](digital-agency-person.json) | - |
| 役員一覧 | [CSV](https://github.com/code4fukui/digital-agency-jp/blob/main/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E5%B9%B9%E9%83%A8%E5%90%8D%E7%B0%BF.csv) ([CSV for App](https://code4fukui.github.io/digital-agency-jp/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E5%B9%B9%E9%83%A8%E5%90%8D%E7%B0%BF.csv)) | - | [MD](https://github.com/code4fukui/digital-agency-jp/blob/main/md/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E5%B9%B9%E9%83%A8%E5%90%8D%E7%B0%BF.md) |
| 人事一覧 | [CSV](https://github.com/code4fukui/digital-agency-jp/blob/main/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E4%BA%BA%E4%BA%8B.csv) ([CSV for App](https://code4fukui.github.io/digital-agency-jp/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E4%BA%BA%E4%BA%8B.csv))¹ | - | [MD](https://github.com/code4fukui/digital-agency-jp/blob/main/md/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E4%BA%BA%E4%BA%8B.md)¹ |
| 組織構造 | [CSV](https://github.com/code4fukui/digital-agency-jp/blob/main/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E3%81%AE%E7%B5%84%E7%B9%94%E4%BD%93%E5%88%B6.csv) ([CSV for App](https://code4fukui.github.io/digital-agency-jp/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E3%81%AE%E7%B5%84%E7%B9%94%E4%BD%93%E5%88%B6.csv)) | - | [MD](https://github.com/code4fukui/digital-agency-jp/blob/main/md/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E3%81%AE%E7%B5%84%E7%B9%94%E4%BD%93%E5%88%B6.md) |
| デジタル社会構想会議 | - | - | [MD](https://github.com/code4fukui/digital-agency-jp/blob/main/md/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E7%A4%BE%E4%BC%9A%E6%A7%8B%E6%83%B3%E4%BC%9A%E8%AD%B0%E3%81%AE%E9%96%8B%E5%82%AC%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6.md) |

¹ *注：このデータセット内の一部の職位は曖昧です。[詳細（日本語）](https://fukuno.jig.jp/3325)*

### ニュース・公表資料

| データセット | CSV | Markdown |
| :--- | :--- | :--- |
| **ニュース記事** | [news.csv](news.csv) | [news.md](md/news.md) |
| **Note.com記事** | [note.csv](note.csv) | [note.md](md/note.md) |
| **GIGA学校構想に関するアンケートの取りまとめ結果** | [CSV](https://github.com/code4fukui/digital-agency-jp/blob/main/GIGA%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E6%A7%8B%E6%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AE%E3%82%A2%E3%83%B3%E3%82%B1%E3%83%BC%E3%83%88%E3%81%AE%E5%8F%96%E3%82%8A%E3%81%BE%E3%81%A8%E3%82%81%E7%B5%90%E6%9E%9C/%E9%96%A2%E4%BF%82%E5%A4%A7%E8%87%AA%E5%90%8C%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8.csv) | [MD](https://github.com/code4fukui/digital-agency-jp/blob/main/GIGA%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E6
