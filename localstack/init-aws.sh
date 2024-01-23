#!/bin/bash
awslocal s3api create-bucket --bucket strapi-dev-bucket
awslocal s3api create-bucket --bucket strapi-prod-bucket
awslocal s3api create-bucket --bucket payloadcms-dev-bucket
awslocal s3api create-bucket --bucket payloadcms-prod-bucket

awslocal s3api list-buckets