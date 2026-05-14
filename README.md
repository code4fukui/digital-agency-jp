# digital-agency-jp

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

An open data project that scrapes and converts public information from Japan's Digital Agency (デジタル庁) into accessible, machine-readable formats like CSV, JSON, and Markdown. This repository also includes simple web applications to demonstrate the use of the converted data.

The project is maintained by [Code for FUKUI](https://code4fukui.github.io/).

## Live Demos

This repository hosts several web applications that consume the generated open data:

- **[News Display App](https://code4fukui.github.io/digital-agency-jp/)**: A gallery view of the latest news and articles from the Digital Agency's official website and note.com blog, built using the generated `news.csv` and `note.csv`.
- **[Personnel Search App](https://code4fukui.github.io/digital-agency-jp/digital-agency-person.html)**: A searchable and filterable table of Digital Agency executives and personnel, powered by `digital-agency-person.csv`.
- **[GIGA School Survey Results](https://code4fukui.github.io/digital-agency-jp/GIGA%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E6%A7%8B%E6%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AE%E3%82%A2%E3%83%B3%E3%82%B1%E3%83%BC%E3%83%88%E3%81%AE%E5%8F%96%E3%82%8A%E3%81%BE%E3%81%A8%E3%82%81%E7%B5%90%E6%9E%9C/)**: A simple viewer for the joint minister's message regarding the GIGA School Initiative survey.

## Datasets

The core of this project is the collection of datasets converted into various open formats. The primary data is in CSV, with JSON and Markdown versions also provided.

"CSV for App" links point to the raw files used by the live demos.

### Personnel & Organization

| Dataset | CSV | JSON | Markdown |
| :--- | :--- | :--- | :--- |
| **Personnel (Combined)** | [digital-agency-person.csv](digital-agency-person.csv) | [digital-agency-person.json](digital-agency-person.json) | - |
| Executive List | [CSV](https://github.com/code4fukui/digital-agency-jp/blob/main/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E5%B9%B9%E9%83%A8%E5%90%8D%E7%B0%BF.csv) ([CSV for App](https://code4fukui.github.io/digital-agency-jp/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E5%B9%B9%E9%83%A8%E5%90%8D%E7%B0%BF.csv)) | - | [MD](https://github.com/code4fukui/digital-agency-jp/blob/main/md/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E5%B9%B9%E9%83%A8%E5%90%8D%E7%B0%BF.md) |
| Personnel List | [CSV](https://github.com/code4fukui/digital-agency-jp/blob/main/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E4%BA%BA%E4%BA%8B.csv) ([CSV for App](https://code4fukui.github.io/digital-agency-jp/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E4%BA%BA%E4%BA%8B.csv))¹ | - | [MD](https://github.com/code4fukui/digital-agency-jp/blob/main/md/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E4%BA%BA%E4%BA%8B.md)¹ |
| Organization Structure | [CSV](https://github.com/code4fukui/digital-agency-jp/blob/main/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E3%81%AE%E7%B5%84%E7%B9%94%E4%BD%93%E5%88%B6.csv) ([CSV for App](https://code4fukui.github.io/digital-agency-jp/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E3%81%AE%E7%B5%84%E7%B9%94%E4%BD%93%E5%88%B6.csv)) | - | [MD](https://github.com/code4fukui/digital-agency-jp/blob/main/md/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E5%BA%81%E3%81%AE%E7%B5%84%E7%B9%94%E4%BD%93%E5%88%B6.md) |
| Digital Society Council | - | - | [MD](https://github.com/code4fukui/digital-agency-jp/blob/main/md/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E7%A4%BE%E4%BC%9A%E6%A7%8B%E6%83%B3%E4%BC%9A%E8%AD%B0%E3%81%AE%E9%96%8B%E5%82%AC%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6.md) |

¹ *Note: Some job titles in this dataset are ambiguous. [Details (in Japanese)](https://fukuno.jig.jp/3325)*

### News & Publications

| Dataset | CSV | Markdown |
| :--- | :--- | :--- |
| **News Articles** | [news.csv](news.csv) | [news.md](md/news.md) |
| **Note.com Articles** | [note.csv](note.csv) | [note.md](md/note.md) |
| **GIGA School Survey** | [CSV](https://github.com/code4fukui/digital-agency-jp/blob/main/GIGA%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E6%A7%8B%E6%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AE%E3%82%A2%E3%83%B3%E3%82%B1%E3%83%BC%E3%83%88%E3%81%AE%E5%8F%96%E3%82%8A%E3%81%BE%E3%81%A8%E3%82%81%E7%B5%90%E6%9E%9C/%E9%96%A2%E4%BF%82%E5%A4%A7%E8%87%A3%E5%85%B1%E5%90%8C%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8.csv) | [MD](https://github.com/code4fukui/digital-agency-jp/blob/main/GIGA%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E6