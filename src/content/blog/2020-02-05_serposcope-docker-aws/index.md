---
layout: /src/layouts/PostLayout.astro
title: "Serposcope + AWS + Dockerの構築手順書"
createdAt: "2020-02-05 21:00"
updatedAt: "2020-02-05 21:00"
category: "技術"
tags:
  - Docker
  - AWS
  - Serposcope
slug: serposcope-docker-aws
word:
  - "nothing"
---

# Serposcope + AWS + Docker の構築手順書

この記事は下記の構築手順書です。

- serposcope
- AWS EC2
- Docker

主に自分のメモ用です

下記は考えてないです。

DB 周りは serposcope の機能で save/restore があるので、それで十分だと思ってるので。

- MySQL 周り
- ElasticIP 周り

では、見ていきます。

## 手順

大きく分けて２つです。

- EC2 立てて、git/docker などを入れる
- docker 周りの手順

では、見ていきます。

### EC2 を立てる

AWS コンソールをポチポチする。気をつけるポイントは下記くらい。

- インスタンスはなんでも OK。（Amazon Linux 2 とかで OK じゃないかな）
- 下記の穴あけを行うこと。
  - https
  - custom / tcp / 7341

### EC2 へ接続

```shell
# permissionを絞る
chomod 400 <serposcope>.pem

# ssh接続
# > -i でkeyを指定
# > user名はデフォルトのec2-user
# > publicDNSはawsのコンソールとかで見てください。
ssh -i <serposcope>.pem ec2-user@<ec2のpublicDNS>
```

### EC2 に git 入れる

```shell
sudo yum install git
```

### EC2 に docker 入れる

```shell
sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -aG docker ec2-user # これでsudoなしで実行できるようになるはず。
# --- ここまででdockerは入ってるはず
# docker ps とかで、動くことを確認する。
# sudoつけなくてもOKのはずだけど、ダメならsudoつけて、以降の手順をやる。
```

## Serposcope の手順

```shell
# これで、serposcopeを取得。
git clone https://github.com/serphacker/serposcope.git
cd serposcope/docker

# ここからは、readme.mdを参照だけど、一応手順書かく。
cat README.md

# 以降のmyapp は適当に変えてOK

# build
docker build -t myapp/serposcope .

# run
docker run -d -p 7134:7134 --name serposcope myapp/serposcope

# 確認
docker ps # STATUS > Up なのを確認する
```

### EC2 へブラウザでアクセス

下記へブラウザで接続

```
<ec2のpublicDNS>:7134
```

おわり。

### REF

- [「Serposcope」を AWS 等にのせて自動で SEO ランクを収集させ続ける方法](https://awe-some.net/2016/12/serposcope-vps/)
- [Running Docker on AWS EC2 - By ](https://hackernoon.com/running-docker-on-aws-ec2-83a14b780c56)
