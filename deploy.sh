#!/bin/bash

CURRENT_DIR=$(pwd)

sudo yum update -y

sudo yum install -y git curl-minimal
curl -fsSL https://rpm.nodesource.com/setup_22.x | sudo bash -
sudo yum install -y nodejs

sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo
sudo yum install -y terraform


cd ./api
npm ci

cd "$CURRENT_DIR"/frontend
npm ci
npm run build

# Terraform
cd "$CURRENT_DIR"/terraform
terraform init
terraform apply -auto-approve -var-file=secrets.tfvars
