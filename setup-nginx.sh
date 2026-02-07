#!/bin/bash
set -e

DOMAIN="portfolio.noraneko.cc"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
NGINX_CONF="$SCRIPT_DIR/nginx.conf"
SITES_ENABLED="/etc/nginx/sites-enabled"

if [ "$EUID" -ne 0 ]; then
    echo "root 권한이 필요합니다. sudo로 실행해주세요."
    exit 1
fi

# sites-enabled 디렉토리 확인
if [ ! -d "$SITES_ENABLED" ]; then
    mkdir -p "$SITES_ENABLED"
fi

# SSL 인증서 발급
if [ ! -d "/etc/letsencrypt/live/$DOMAIN" ]; then
    echo "SSL 인증서 발급 중..."
    certbot certonly --nginx -d "$DOMAIN"
fi

# 심볼릭 링크 생성
echo "nginx 설정 연결 중..."
ln -sf "$NGINX_CONF" "$SITES_ENABLED/$DOMAIN"

# 설정 검증
echo "nginx 설정 검증 중..."
nginx -t

# nginx 리로드
echo "nginx 리로드 중..."
systemctl reload nginx

echo "완료: https://$DOMAIN -> localhost:3000"
