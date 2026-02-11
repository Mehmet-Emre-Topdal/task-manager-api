# Mangolab - Task Management API

Modern JavaScript (ES Modules) ve Express.js kullanılarak geliştirilmiş bir Task Management API.

## 🎯 Özellikler

- ✅ **ES Modules** (import/export)
- ✅ **Katmanlı Mimari** (Controller-Service-Middleware)
- ✅ **Swagger/OpenAPI** Dokümantasyonu
- ✅ **%100 Test Coverage** (44 tests - Vitest)
- ✅ **Docker** Multi-stage containerization
- ✅ **Yup** Schema validation
- ✅ **Helmet** Security headers
- ✅ **Rate Limiting** API koruması
- ✅ **Morgan** HTTP request logging
- ✅ **Clean Code** (yorum satırı yok)
- ✅ **CORS** desteği
- ✅ **Merkezi Hata Yönetimi**
- ✅ **Standart API Response** formatı

## 🚀 Hızlı Başlangıç

### Local Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development modunda çalıştır
npm run dev

# Testleri çalıştır
npm test

# Production modunda çalıştır
npm start
```

### Docker ile Çalıştırma

```bash
# Production modunda başlat
npm run docker:up

# Development modunda başlat (hot-reload)
npm run docker:dev

# Logları görüntüle
npm run docker:logs

# Durdur
npm run docker:down
```

## 📚 API Dokümantasyonu

API çalıştıktan sonra Swagger UI'a erişebilirsiniz:

🔗 **Swagger UI**: http://localhost:3000/api-docs  
🔗 **API Base URL**: http://localhost:3000/api

## 📡 API Endpoints

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| `GET` | `/` | API bilgileri |
| `GET` | `/api-docs` | Swagger UI |
| `POST` | `/api/tasks` | Yeni task oluştur |
| `GET` | `/api/tasks` | Tüm taskları listele |

### Örnek Request

```bash
# Task oluştur
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Test task"}'

# Taskları listele
curl http://localhost:3000/api/tasks
```

## 🏗️ Mimari

Proje **katmanlı mimari** (Layered Architecture) prensiplerine uygun olarak geliştirilmiştir:

```
┌─────────────────────────────────────┐
│         HTTP Request                │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│  Middleware Layer                   │
│  • Security (Helmet, Rate Limit)    │
│  • Validation (Yup)                 │
│  • Error Handling                   │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│  Controller Layer                   │
│  • HTTP Request Handling            │
│  • Response Formatting              │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│  Service Layer                      │
│  • Business Logic                   │
│  • Data Management                  │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│  Data Layer (In-Memory)             │
│  • Ready for DB integration         │
└─────────────────────────────────────┘
```

## 📁 Proje Yapısı

```
Mangolab/
├── src/
│   ├── controllers/        # HTTP request handlers
│   ├── services/          # Business logic
│   ├── routes/            # Route definitions + Swagger
│   ├── middlewares/       # Validation, security, errors
│   ├── validators/        # Yup schemas
│   ├── utils/             # Helper functions
│   ├── config/            # Configurations
│   └── app.js             # Express app setup
├── tests/                 # Unit & Integration tests
├── Dockerfile             # Multi-stage build
├── docker-compose.yml     # Docker services
├── vitest.config.js       # Test configuration
├── server.js              # Entry point
└── package.json
```

## 🧪 Testing

Proje **%100 code coverage** ile test edilmiştir.

```bash
# Tüm testleri çalıştır
npm test

# Watch mode
npm run test:watch

# UI mode
npm run test:ui
```

### Test İstatistikleri

- ✅ **44 test** (tümü başarılı)
- ✅ **100% coverage** (statements, branches, functions, lines)
- ✅ **6 test dosyası** (unit + integration)

## 🐳 Docker

Multi-stage Dockerfile ile optimize edilmiş production image.

### Özellikler

- ✅ **Multi-stage Build** (4 aşama)
- ✅ **Security** (non-root user)
- ✅ **Test Integration** (build sırasında)
- ✅ **Alpine Linux** (~150MB production image)
- ✅ **Layer Caching** (hızlı rebuild)

### Komutlar

```bash
# Image oluştur
docker build -t mangolab-api .

# Container çalıştır
docker run -p 3000:3000 mangolab-api

# Docker Compose
docker-compose up -d
docker-compose logs -f
docker-compose down
```

## 🛡️ Güvenlik

### Helmet
HTTP güvenlik başlıkları otomatik eklenir:
- X-Content-Type-Options
- X-Frame-Options
- Strict-Transport-Security

### Rate Limiting
- **100 istek / 15 dakika** (tüm `/api/*` endpoint'leri)
- Limit aşımında `429 Too Many Requests`

### CORS
Cross-Origin Resource Sharing aktif ve yapılandırılabilir.

## 🔧 Teknolojiler

| Kategori | Teknoloji |
|----------|-----------|
| **Runtime** | Node.js 20.x |
| **Framework** | Express.js |
| **Validation** | Yup |
| **Testing** | Vitest + Supertest |
| **Documentation** | Swagger/OpenAPI |
| **Security** | Helmet + Rate Limit |
| **Logging** | Morgan |
| **Container** | Docker + Docker Compose |

## 📝 Environment Variables

```env
PORT=3000
NODE_ENV=development
API_VERSION=1.0.0
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 🚦 API Response Standartları

### Başarılı Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

### Hata Response
```json
{
  "success": false,
  "message": "Error description",
  "statusCode": 400
}
```

### Validasyon Hatası
```json
{
  "success": false,
  "message": "Validation failed",
  "statusCode": 400,
  "errors": [
    {
      "field": "title",
      "message": "Title must be at least 3 characters"
    }
  ]
}

